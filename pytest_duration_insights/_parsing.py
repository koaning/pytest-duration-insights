from clumper import Clumper
from parse import parse
from pathlib import Path


def trim_nodeid(nodeid):
    """
    Trims a nodeid from a pytest run such that all parametrized tests fold into a single id.

    Usage

    ```python
    nodeid = "test_shape_trained_model[random_xy_dataset_regr15]"
    expected = "test_shape_trained_model[*]"
    assert trim_nodeid(nodeid) == expected
    ```
    """
    if "[" not in nodeid:
        return nodeid
    return nodeid[: nodeid.find("[")] + "[*]"


def parse_test_info(clump, trim=True):
    """
    Parses the test info for useful information.
    """
    c = clump.keep(lambda d: "duration" in d.keys())
    if trim:
        c = c.mutate(nodeid=lambda d: trim_nodeid(d["nodeid"]))
    return (
        c.group_by("nodeid")
        .agg(duration=("duration", "sum"))
        .mutate(
            duration=lambda d: max(1, round(d["duration"] * 1000)),
            parsed=lambda d: parse("{path}/{file}.py::{test}", d["nodeid"]).named,
            parsed_path=lambda d: f"{d['parsed']['path']}/{d['parsed']['file']}.py",
            parsed_test=lambda d: d["parsed"]["test"],
            path=lambda d: d["parsed"]["path"],
            hierarchy=lambda d: tuple(
                list(Path(d["parsed_path"]).parts) + [d["parsed_test"]]
            ),
        )
        .drop("parsed")
    )


def to_hierarchy_dict(clump, hierarchy_col=None, value_col=None, value_name="value"):
    """
    Turns a clumper into a hierarchical dictionary ready for d3.
    """
    lines = (
        clump.ungroup()
        .sort(lambda d: tuple(d[hierarchy_col]))
        .select(hierarchy_col, value_col)
        .collect()
    )
    data = {"name": "root", "children": []}
    for line in lines:
        cursor = data
        for idx, item in enumerate(line["hierarchy"]):
            res = [c for c in cursor["children"] if c["name"] == item]
            if len(res) == 0:
                if idx != len(line["hierarchy"]) - 1:
                    cursor["children"].append({"name": item, "children": []})
                else:
                    cursor["children"].append(
                        {"name": item, value_name: line["duration"]}
                    )
                res = [c for c in cursor["children"] if c["name"] == item]
            cursor = res[0]
    return data


class Node:
    def __init__(self, name, children=None, val=None):
        self.name = name
        self.children = children
        self.val = val

    @property
    def value(self):
        if self.val:
            return self.val
        return sum([c.value for c in self.children])

    @classmethod
    def from_dict(cls, d):
        if "children" in d:
            return Node(
                name=d["name"], children=[cls.from_dict(c) for c in d["children"]]
            )
        return Node(name=d["name"], val=d["value"])

    def to_value_dict(self):
        if self.children:
            return {
                "name": self.name,
                "value": self.value,
                "children": sorted(
                    [c.to_value_dict() for c in self.children],
                    key=lambda d: -d["value"],
                ),
            }
        return {"name": self.name, "value": self.value}
