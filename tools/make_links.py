import json
import re
import os
import subprocess

def trust_file(file_path):
    os.chmod(file_path, 0o755)
    
    checksum_output = subprocess.check_output(['sha256sum', file_path], text=True)
    checksum = checksum_output.split()[0]
    subprocess.run(['gio', 'set', '-t', 'string', file_path, 'metadata::xfce-exe-checksum', checksum])

with open("LinksIndex.json", "r") as f:
    data = json.loads(f.read().strip())

for key in data.keys():
    tags = '; '.join(re.split(r',\s?', data[key]['tags']))
    
    link = "\n".join([
        "[Desktop Entry]",
        "Version=1.0",
        "Type=Link",
        f"Name={key}",
        f"Comment={data[key]['desc']}",
        "Icon=firefox",
        f"URL={data[key]['url']}",
        f"Keywords={tags}"
    ])
    
    filename = f"links/{key}.desktop"
    with open(filename, "w") as f:
        f.write(link)
    
    trust_file(filename)
