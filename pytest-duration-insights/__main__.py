import sys
import json
import shutil
import tempfile
from pathlib import Path

from clumper import Clumper 

from ._parsing import to_hierarchy_dict, parse_test_info, Node


if __name__ == "__main__":
    """
    pytest-duration-insights --report-file --open-browser --reduce --port
    """
    report_path = sys.argv[1]
    res = (Clumper.read_jsonl(report_path)
           .pipe(parse_test_info)
           .pipe(to_hierarchy_dict, hierarchy_col="hierarchy", value_col="duration"))
    
    tmpdir = tempfile.mkdtemp()
    shutil.copytree(src=Path(__file__).parent / "static", 
                    dst=Path(tmpdir) / "static")
    
    data_path = Path(tmpdir) / "static" / "data.json"
    tree_path = Path(tmpdir) / "static" / "treedata.json"
    Clumper(res, listify=False).write_json(data_path)
    Clumper(Node.from_dict(res).to_value_dict(), listify=False).write_json(tree_path)

    import subprocess
    
    subprocess.run(["python", "-m", "http.server", "8002", "--directory", str(Path(tmpdir) / "static")])
