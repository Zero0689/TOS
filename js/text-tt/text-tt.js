var computeDifference = (() => {
    let h = ``,
    g = Object.keys,
    f = Set;
    const a = new f(g(data.oldDict));
    const b = new f(g(data.newDict));
    const c = [...a].filter(a => !b.has(a));
    const d = [...b].filter(b => !a.has(b));
    const e = [...b].filter(b => a.has(b) && data.oldDict[b] != data.newDict[b]);
    return [...c.map(a => [a, data.oldDict[a], h]), ...d.map(a => [a, h, data.newDict[a]]), ...e.map(a => [a, data.oldDict[a], data.newDict[a]])]
});
var onSelectedFileOf = (a => async function () {
    data[a] = null;
    updateButton();
    const b = this.files[0];
    const [c, d] = await readFile(b);
    data[a] = d;
    updateButton()
});
var readBinaryTranslation = (a => {
    let i = 1,
    j = 0;
    var f = (() => {
        const a = e();
        const f = c.decode(b.slice(d, d + a));
        d += a;
        return f
    });
    var e = (() => {
        let a = j;
        let [c, e] = [j, j];
        do {
            c = b[d];
            a |= (c & 127) << 7 * e;
            ++d;
            ++e
        } while (c & 128);
        return a
    });
    const b = new Uint8Array(a);
    const c = new TextDecoder();
    let d = i;
    if (b[j] != j)
        return -i;
    const g = e();
    const h = {};
    while (d < b.length - i) {
        const a = f();
        const b = f();
        h[a] = b
    };
    return [g, h]
});
var clearOutput = (() => {
    const a = document.getElementById(`translations`);
    a.innerHTML = ``
});
var readFile = (async(a) => {
    const b = new FileReader();
    return await new Promise((c, d) => {
        b.addEventListener(`load`, a => {
            const [b, e] = readBinaryTranslation(a.target.result);
            if (b > 0) {
                c([b, e])
            } else {
                d()
            }
        });
        b.readAsArrayBuffer(a)
    })
});
var updateButton = (() => {
    let b = null;
    const a = document.getElementById(`startButton`);
    a.disabled = data.oldDict === b || data.newDict === b
});
var updateOutput = (() => {
    let b = `td`;
    const a = document.getElementById(`translations`);
    for (const [c, d, e] of computeDifference()) {
        const f = document.createElement(b);
        f.innerHTML = c;
        const g = document.createElement(b);
        const h = document.createTextNode(d);
        g.appendChild(h);
        const i = document.createElement(b);
        const j = document.createTextNode(e);
        i.appendChild(j);
        const k = document.createElement(`tr`);
        k.append(f, g, i);
        a.appendChild(k)
    }
});
const data = {
    oldDict: null,
    newDict: null
}

document.getElementById(`oldSel`).addEventListener(`change`, onSelectedFileOf(`oldDict`), !1);
document.getElementById(`newSel`).addEventListener(`change`, onSelectedFileOf(`newDict`), !1);
document.getElementById(`startButton`).addEventListener(`click`, updateOutput, !1)