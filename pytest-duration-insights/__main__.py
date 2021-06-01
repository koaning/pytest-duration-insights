import sys
import json
import shutil
import tempfile
from pathlib import Path

from parse import parse
from clumper import Clumper


def parse_test_info(clump):
    """
    Parses the test info for useful information.
    """
    return (clump
            .keep(lambda d: "duration" in d.keys())
            .group_by("nodeid")
            .agg(duration=("duration", "sum"))
            .mutate(duration=lambda d: round(d['duration'] * 1000),
                    parsed=lambda d: parse("{path}/{file}.py::{test}", d['nodeid']).named,
                    parsed_path=lambda d: f"{d['parsed']['path']}/{d['parsed']['file']}.py",
                    parsed_test=lambda d: d['parsed']['test'],
                    path=lambda d: d['parsed']['path'],
                    hierarchy=lambda d: tuple(list(Path(d['parsed_path']).parts) + [d['parsed_test']]))
            .drop("parsed"))


def to_hierarchy_dict(clump, hierarchy_col=None, value_col=None, value_name="value"):
    """
    Turns a clumper into a hierarchical dictionary ready for d3.
    """
    lines = clump.ungroup().sort(lambda d: tuple(d[hierarchy_col])).select(hierarchy_col, value_col).collect()
    data = {"name": "root", "children": []}
    for line in lines: 
        cursor = data
        for idx, item in enumerate(line['hierarchy']):
            res = [c for c in cursor["children"] if c['name'] == item]
            if len(res) == 0:
                if idx != len(line['hierarchy']) - 1:
                    cursor['children'].append({"name": item, "children": []})
                else:
                    cursor['children'].append({"name": item, value_name: line['duration']})
                res = [c for c in cursor["children"] if c['name'] == item]
            cursor = res[0]
    return data


if __name__ == "__main__":
    report_path = sys.argv[1]
    res = (Clumper.read_jsonl(report_path)
           .pipe(parse_test_info)
           .pipe(to_hierarchy_dict, hierarchy_col="hierarchy", value_col="duration"))
    from rich import print
    print(res)
    
    tmpdir = tempfile.mkdtemp()
    shutil.copytree(src=Path(__file__).parent / "web", 
                    dst=Path(tmpdir) / "web")
    Clumper(res, listify=False).write_json(Path(tmpdir) / "web" / "flare.json")

    import subprocess
    
    subprocess.run(["python", "-m", "http.server", "8002", "--directory", str(Path(tmpdir) / "web")])
