(function() {
    window.action_log = [];
    var c = document.getElementById("current_tool_indicator");
    var k = document.getElementById("feet");

    k.onmouseout = function() {
        c.style.display = "none";
    };

    var n = function(b) {
        c.style.display = "block";
        var a = c.getBoundingClientRect();
        c.style.left = b.clientX - (a.width / 2) + document.documentElement.scrollLeft + "px";
        c.style.top = b.clientY - (a.height / 2) + document.documentElement.scrollTop + "px";
    };

    k.onmousemove = n;

    k.onclick = function(f) {
        var e = c.getBoundingClientRect();
        var a = document.createElement("div");
        a.className = ["placed", c.className].join(" ");
        var d = f.clientX - (e.width / 2) + document.documentElement.scrollLeft;
        var b = f.clientY - (e.height / 2) + document.documentElement.scrollTop;
        a.style.left = d + "px";
        a.style.top = b + "px";
        var g = {
            "type": c.className,
            "action": "added",
            "x": d,
            "y": b,
            "element": a
        };
        window.action_log.push(g);

        a.onclick = function() {
            this.remove();
            var b = {
                "type": a.className.split(" ")[1],
                "action": "removed",
                "x": parseInt(this.style.left),
                "y": parseInt(this.style.top),
                "element": this
            };
            window.action_log.push(b);
        };

        document.getElementById("container").appendChild(a);
    };

    var b = [];
    var m = 32;
    var u = document.getElementById("foot1");
    var i = u.getBoundingClientRect();
    var f = [
        [122, 494],
        [64, 489],
        [0, 372],
        [122, 268]
    ];

    for (var a = 0; a < f.length; a++) {
        b.push([i.left + f[a][0], f[a][1]]);
    }

    var t = document.getElementById("foot2");
    var s = t.getBoundingClientRect();

    for (var a = 0; a < f.length; a++) {
        var g = i.right + (s.left - i.right) / 2;
        var j = g + (g - (f[a][0] + i.left)) - m;
        b.push([j, f[a][1]]);
    }

    var r = document.getElementById("foot3");
    var h = r.getBoundingClientRect();
    var e = [
        [155, 150],
        [84, 156],
        [27, 218],
        [20, 291],
        [84, 246],
        [148, 248],
        [35, 395],
        [121, 387],
        [95, 516]
    ];

    for (var a = 0; a < e.length; a++) {
        b.push([h.left + e[a][0], e[a][1]]);
    }

    var q = document.getElementById("foot4");
    var p = q.getBoundingClientRect();

    for (var a = 0; a < e.length; a++) {
        var g = h.right + (p.left - h.right) / 2;
        var j = g + (g - (e[a][0] + h.left)) - m;
        b.push([j, e[a][1]]);
    }

    for (var a = 0; a < b.length; a++) {
        var d = document.createElement("div");
        d.className = "placed sensitive";
        d.style.left = b[a][0] + "px";
        d.style.top = b[a][1] + "px";
        var v = {
            "type": "sensitive",
            "action": "added",
            "x": b[a][0],
            "y": b[a][1],
            "element": d
        };
        d.onclick = function() {
            this.remove();
            var a = {
                "type": this.className.split(" ")[1],
                "action": "removed",
                "x": parseInt(this.style.left),
                "y": parseInt(this.style.top),
                "element": this
            };
            window.action_log.push(a);
        };

        document.getElementById("container").appendChild(d);
    }

    var l = document.getElementsByClassName("tool_selector");
    for (var a = 0; a < l.length; a++) {
        l[a].onclick = function() {
            c.className = this.className.split(" ")[1];
        };
    }

    var o = document.getElementById("save_btn");
    o.addEventListener("click", function() {
        var c = document.getElementById("image_container");
        var b = c.getBoundingClientRect();
        var a = b.width * 15;
        var d = b.height * 15;
        html2canvas(c).then(function(i) {
            var j = i.toDataURL("image/png").replace(/^data:image\/png;base64,/, "");
            var f = base64ToHex(j);
            var e = ["{\\rtf1\\ansi\\deff0\\margl720\\margr720\\margt360\\margb360", "{\\pard{\\pict\\pngblip\\picw" + parseInt(a) + "\\pich" + parseInt(d) + "\\picwgoal" + parseInt(a / 1.5) + "\\pichgoal" + parseInt(d / 1.5) + " " + f + "}\\par}", "}"].join("\n");
            var h = new Blob([e], {type: "text/plain;charset=utf-8"});
            var g = "Diabetic Foot Exam.rtf";
            var b = document.createElement("a"), c = URL.createObjectURL(h);
            b.href = c;
            b.download = g;
            document.body.appendChild(b);
            b.click();
        });
    });
})();
