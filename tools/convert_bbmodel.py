#!/usr/bin/env python3
"""Turn a Blockbench .bbmodel into js/model-data.js (the model shown in the hero).
Usage:  python tools/convert_bbmodel.py my_model.bbmodel js/model-data.js
Save the project in Blockbench with File > Save Project so the texture is embedded.
Supports cube models with one texture (Bedrock / Java / generic)."""
import json, sys
src = sys.argv[1]
dst = sys.argv[2] if len(sys.argv) > 2 else "js/model-data.js"
d = json.load(open(src))
tex = (d.get("textures") or [{}])[0].get("source")
if not tex:
    sys.exit("No embedded texture found. Re-save the project in Blockbench (File > Save Project).")
G = {g["uuid"]: g for g in d.get("groups", [])}
E = {e["uuid"]: e for e in d["elements"] if e.get("type", "cube") == "cube"}
K = {"east": "e", "north": "n", "west": "w", "south": "s", "up": "u", "down": "d"}

def uvs(e):
    f, t = e["from"], e["to"]
    sx, sy, sz = [t[i] - f[i] for i in range(3)]
    if e.get("box_uv"):
        ox, oy = e.get("uv_offset", [0, 0])
        return {"e": [ox, oy+sz, ox+sz, oy+sz+sy], "n": [ox+sz, oy+sz, ox+sz+sx, oy+sz+sy],
                "w": [ox+sz+sx, oy+sz, ox+2*sz+sx, oy+sz+sy], "s": [ox+2*sz+sx, oy+sz, ox+2*sz+2*sx, oy+sz+sy],
                "u": [ox+sz+sx, oy+sz, ox+sz, oy], "d": [ox+sz+2*sx, oy, ox+sz+sx, oy+sz]}
    return {K[n]: fc["uv"] for n, fc in e["faces"].items() if fc.get("texture") is not None}

def node(n):
    if isinstance(n, str):
        e = E.get(n)
        if e is None: return None
        o = {"f": e["from"], "t": e["to"], "o": e.get("origin", [0, 0, 0]), "u": uvs(e)}
        if any(e.get("rotation") or []): o["r"] = e["rotation"]
        if e.get("inflate"): o["i"] = e["inflate"]
        return o
    g = G[n["uuid"]]
    o = {"o": g["origin"], "c": [x for x in (node(c) for c in n["children"]) if x]}
    if any(g.get("rotation", [0, 0, 0])): o["r"] = g["rotation"]
    return o

tree = {"o": [0, 0, 0], "c": [x for x in (node(n) for n in d["outliner"]) if x]}
res = d.get("resolution", {"width": 16, "height": 16})
with open(dst, "w") as f:
    f.write("var MODEL=" + json.dumps({"tree": tree, "res": [res["width"], res["height"]]}, separators=(",", ":")) + ";\n")
    f.write('var TEX="' + tex + '";\n')
print("Wrote", dst)
