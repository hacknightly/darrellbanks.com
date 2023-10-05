#!/usr/bin/env python

import glob
from pathlib import Path

files = glob.glob("org/posts/*.org")

with open('build.ninja', 'w') as ninja_file:
    ninja_file.write("""
rule org2md
  command = emacs --batch -l ~/.emacs -l publish.el --eval \"(darrell/publish \\"$in\\")"
  description = org2md $in
""")
    
    for f in files:
        path = Path(f)
        output_file = f"content/posts/{path.with_suffix('.md').name}"
        print([path, output_file])
        ninja_file.write(f"""
build {output_file}: org2md {path}
""")

import subprocess
subprocess.call(["ninja"])
