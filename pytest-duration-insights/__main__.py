import sys
import json
import shutil
import tempfile
from pathlib import Path

from clumper import Clumper 

from ._parsing import to_hierarchy_dict, parse_test_info


if __name__ == "__main__":
    """
    pytest-duration-insights --report-file --open-browser --reduce
    """
    report_path = sys.argv[1]
    res = (Clumper.read_jsonl(report_path)
           .pipe(parse_test_info)
           .pipe(to_hierarchy_dict, hierarchy_col="hierarchy", value_col="duration"))
    
    tmpdir = tempfile.mkdtemp()
    shutil.copytree(src=Path(__file__).parent / "static", 
                    dst=Path(tmpdir) / "static")
    Clumper(res, listify=False).write_json(Path(tmpdir) / "static" / "data.json")

    import subprocess
    
    subprocess.run(["python", "-m", "http.server", "8002", "--directory", str(Path(tmpdir) / "static")])
