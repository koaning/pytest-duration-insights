import sys
import typer
import shutil
import tempfile
import subprocess
from pathlib import Path
from pkg_resources import resource_filename

from clumper import Clumper

from ._parsing import to_hierarchy_dict, parse_test_info, Node
from pytest_duration_insights import __version__


app = typer.Typer(
    name="pytest duration insights",
    add_completion=False,
    help="""
    This app allows you to inspect and explore pytest run times.

    Assuming you've got `pytest-reportlog` installed you can collect
    test run data and visualise it via;

    pytest --report-log reportlog.jsonl

    pytest-duration-insights explore reportlog.jsonl
    """,
)


@app.command()
def explore(
    report_path: str = typer.Argument(..., help="Report log to visualise."),
    no_trim: bool = typer.Option(
        False, is_flag=True, help="Flag to not reduce parametrized calls."
    ),
    port: int = typer.Option(8002, help="Port to serve the dashboard on."),
):
    """Starts up a pytest reportlog dashboard."""
    # Use clumper to arrange the data appropriately.
    res = (
        Clumper.read_jsonl(report_path)
        .pipe(parse_test_info, trim=not no_trim)
        .pipe(to_hierarchy_dict, hierarchy_col="hierarchy", value_col="duration")
    )

    # We server everything as static files from a temporary folder
    tmpdir = tempfile.mkdtemp()
    orig = resource_filename("pytest_duration_insights", "static")
    shutil.copytree(src=orig, dst=Path(tmpdir) / "static")
    Clumper(res, listify=False).write_json(Path(tmpdir) / "static" / "data.json")
    tree_res = Node.from_dict(res).to_value_dict()
    Clumper(tree_res, listify=False).write_json(
        Path(tmpdir) / "static" / "treedata.json"
    )

    # This a bit hacky but does the job
    subprocess.run(
        [
            "python",
            "-m",
            "http.server",
            str(port),
            "--directory",
            str(Path(tmpdir) / "static"),
        ]
    )


@app.command()
def version():
    """Returns the version."""
    print(__version__)


if __name__ == "__main__":
    """
    pytest-duration-insights --report-file --open-browser --reduce
    """
    app()
