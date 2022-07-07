import json
import os
from pathlib import Path

#folder = "/home/doakey/Magma/EntertainmentCenter/content/games"
#targets = list(Path(folder).rglob("*info.json"))
paths = []

with open("js/SensitiveIndex.js", "r") as f:
    d = eval(f.read().lstrip("var SensitiveIndex =").strip())
for key in list(d.keys()):
    p = os.path.join(os.path.dirname(__file__), "resources", "Sensitive", d[key]["path"])
    paths.append(p)


with open("js/PublicIndex.js", "r") as f:
    d = eval(f.read().lstrip("var PublicIndex =").strip())
for key in list(d.keys()):
    p = os.path.join(os.path.dirname(__file__), "resources", "Public", d[key]["path"])
    paths.append(p)
    
    
with open("js/PersonalIndex.js", "r") as f:
    d = eval(f.read().lstrip("var PersonalIndex =").strip())
for key in list(d.keys()):
    p = os.path.join(os.path.dirname(__file__), "resources", "Personal", d[key]["path"])
    paths.append(p)


for path in paths:
    missing = []
    if not os.path.exists(path):
        missing.append(path)
    if len(missing) > 0:
        print("The following files are indexed, but missing from the folder:\n\n" + "\n".join(missing))


    
