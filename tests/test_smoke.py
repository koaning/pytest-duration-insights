import pathlib

import pytest
from clumper import Clumper
from typer.testing import CliRunner

from pytest_duration_insights.__main__ import app
from pytest_duration_insights._parsing import parse_test_info, to_hierarchy_dict, Node


runner = CliRunner()


def test_version():
    result = runner.invoke(app, ["version"])
    assert result.exit_code == 0


@pytest.mark.parametrize(
    "path", [str(p) for p in pathlib.Path("tests/data").glob("*.jsonl")]
)
def test_pipeline_smoke(path):
    res = (
        Clumper.read_jsonl(path)
        .pipe(parse_test_info)
        .pipe(to_hierarchy_dict, hierarchy_col="hierarchy", value_col="duration")
    )

    assert isinstance(res, dict)
    tree_res = Node.from_dict(res).to_value_dict()
    assert isinstance(tree_res, dict)
