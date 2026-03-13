def parse(text):
    p,a,l=[],[],[]
    mode=None
    for line in text.split("\n"):
        line=line.strip()
        if "PRESENT" in line: mode="p";continue
        if "ABSENT" in line: mode="a";continue
        if "COMPANY" in line: mode="l";continue
        if not line: continue
        if mode=="p": p.append(line)
        if mode=="a": a.append(line)
        if mode=="l": l.append(line)
    return p,a,l
