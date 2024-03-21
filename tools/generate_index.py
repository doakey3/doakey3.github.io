
# pip install pypdf2
# pip install pycryptodome
# pip install bs4

import os
from bs4 import BeautifulSoup as bs
import re
import PyPDF2
from pathlib import Path
import json

def get_html_info(path):
    relpath = os.path.dirname(os.path.relpath(path, start=os.path.join(os.path.dirname(__file__), "..")))
    key = os.path.basename(relpath)
    d = {"path": relpath}
    
    with open(path, "r") as f:
        soup = bs(f.read(), features="lxml")
    d["title"] = soup.title.string
    metas = soup.find_all("meta")
    
    for meta in metas:
        if meta.has_attr("name"):
            if meta.get("name") == "description":
                d["description"] = meta.get("content")
            if meta.get("name") == "keywords":
                d["keywords"] = meta.get("content").replace(" ", "").split(",")
    
    return key, d

def get_pdf_info(path):
    relpath = os.path.relpath(path, start=os.path.join(os.path.dirname(__file__), ".."))
    key = os.path.basename(relpath)
    d = {"path": relpath}
    
    with open(path, 'rb') as file:
        reader = PyPDF2.PdfReader(file)
        info = reader.metadata
        d['title'] = info.get('/Title', None)
        d['description'] = info.get('/Subject', None)
        keywords = info.get('/Keywords', None)
        if keywords:
            d['keywords'] = [keyword.strip() for keyword in keywords.split(',')]
    
    return key, d

def get_link_info(path):
    relpath = os.path.relpath(path, start=os.path.join(os.path.dirname(__file__), ".."))
    key = os.path.basename(relpath)
    d = {"path": relpath}
    
    with open(path, "r") as f:
        text = f.read()
        
        d["title"] = re.search(r"Name=(.*)", text).groups(1)[0].strip()
        d["description"] = re.search(r"Comment=(.*)", text).groups(1)[0].strip()
        d["keywords"] = re.search(r"Keywords=(.*)", text).groups(1)[0].strip().split(";")

    return key, d

def generate_index():
    folder = os.path.join(os.path.dirname(__file__), "..", "resources")
    
    lines = []
    
    htmls = list(Path(folder).rglob('index.html'))
    for html in htmls:
        key, d = get_html_info(html)
        lines.append(f'"{key}": {json.dumps(d)}')
    
    pdfs = list(Path(folder).rglob('*.pdf'))
    for pdf in pdfs:
        key, d = get_pdf_info(pdf)
        lines.append(f'"{key}": {json.dumps(d)}')
    
    links = list(Path(folder).rglob('*.desktop'))
    for link in links:
        key, d = get_link_info(link)
        lines.append(f'"{key}": {json.dumps(d)}')
    
    outpath = os.path.join(os.path.dirname(__file__), "..", "js", "PathsIndex.js")
    with open(outpath, "w") as f:
        f.write("let PathsIndex = {\n" + ",\n".join(lines) + "\n}")

if __name__ == "__main__":
    generate_index()
