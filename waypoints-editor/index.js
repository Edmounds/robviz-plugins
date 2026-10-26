import { createContext as e, createElement as t, forwardRef as n, useCallback as r, useContext as i, useEffect as a, useMemo as o, useRef as s, useState as c } from "react";
import { Button as l, Notice as u, NumberInput as d, Page as f, Select as p, TextInput as m, Toolbar as ee, useI18n as h, validateInputs as te } from "@robviz/core";
import { Fragment as ne, jsx as g, jsxs as _ } from "react/jsx-runtime";
// node_modules/lucide-react/dist/esm/shared/src/utils/toKebabCase.mjs
var re = (e) => e?.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
// node_modules/lucide-react/dist/esm/shared/src/utils/toLucideIconData.mjs
function v(e, t, n = []) {
	if (t == null) throw Error("[lucide]: iconNode is required when icon name is used");
	return {
		name: re(e),
		size: 24,
		node: t,
		...n.length > 0 ? { aliases: n } : {}
	};
}
// node_modules/lucide-react/dist/esm/shared/src/utils/toCamelCase.mjs
var y = (e) => {
	let t = "", n = !1;
	for (let r of e) r === "-" || r === "_" || r <= " " ? n = t.length > 0 : (t.length === 0 ? t += r.toLowerCase() : t += n ? r.toUpperCase() : r, n = !1);
	return t;
}, b = (e) => {
	let t = y(e);
	return t.charAt(0).toUpperCase() + t.slice(1);
}, x = (...e) => e.filter((e, t, n) => !!e && e.trim() !== "" && n.indexOf(e) === t).join(" ").trim(), S = {
	xmlns: "http://www.w3.org/2000/svg",
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	"stroke-width": 2,
	"stroke-linecap": "round",
	"stroke-linejoin": "round"
};
// node_modules/lucide-react/dist/esm/shared/src/build/buildLucideIconNode.mjs
function C(e) {
	return e != null;
}
function ie(e, t = {}) {
	let n = t.attributeNames ?? {}, r = (e) => n[e] ?? e, i = e.size ?? e.width ?? S.width, a = e.size ?? e.height ?? S.height, o = e.aliases?.filter((e) => typeof e == "string" && e.trim() !== "").map((e) => `lucide-${e}`) ?? [], s = [...e.name ? [`lucide-${e.name}`] : [], ...o], c = t.className?.split(" ").filter(Boolean) ?? [], l = t.includeDefaultClasses === !1 ? x(...c) : x("lucide", ...s, ...c), u = t.absoluteStrokeWidth ? Number(t.strokeWidth ?? S["stroke-width"]) * Number(e.size ?? e.width ?? S.width) / Number(t.size ?? t.width ?? S.width) : t.strokeWidth ?? S["stroke-width"];
	return [
		"svg",
		{
			...Object.entries(S).reduce((e, [t, n]) => (e[r(t)] = n, e), {}),
			..."color" in t && t.color && { [r("stroke")]: t.color },
			..."size" in t && C(t.size) && {
				[r("width")]: t.size,
				[r("height")]: t.size
			},
			..."width" in t && C(t.width) && { [r("width")]: t.width },
			..."height" in t && C(t.height) && { [r("height")]: t.height },
			[r("stroke-width")]: u,
			...l && { [r("class")]: l },
			[r("viewBox")]: `0 0 ${i} ${a}`,
			...t.hasA11yProp === !1 ? { [r("aria-hidden")]: "true" } : {},
			..."attributes" in t && t.attributes
		},
		e.node.map((e) => {
			let [n, i, a] = e, o = t.nonScalingStroke ? {
				[r("vector-effect")]: "non-scaling-stroke",
				...i
			} : i;
			return a ? [
				n,
				o,
				a
			] : [n, o];
		})
	];
}
// node_modules/lucide-react/dist/esm/shared/src/build/buildLucideIconForReact.mjs
function w(e, t = {}) {
	return ie(e, {
		...t,
		attributeNames: {
			...t.attributeNames,
			class: "className",
			"stroke-width": "strokeWidth",
			"stroke-linecap": "strokeLinecap",
			"stroke-linejoin": "strokeLinejoin",
			"vector-effect": "vectorEffect"
		}
	});
}
// node_modules/lucide-react/dist/esm/shared/src/utils/hasA11yProp.mjs
var ae = (e) => {
	for (let t in e) if (t.startsWith("aria-") || t === "role" || t === "title") return !0;
	return !1;
}, T = e({}), oe = () => i(T), E = n(({ color: e, size: n, width: r, height: i, strokeWidth: a, absoluteStrokeWidth: o, nonScalingStroke: s, className: c = "", children: l, iconNode: u = [], icon: d = {
	node: u,
	aliases: [],
	size: 24
}, ...f }, p) => {
	let { size: m = 24, strokeWidth: ee = 2, absoluteStrokeWidth: h = !1, nonScalingStroke: te = !1, color: ne = "currentColor", className: g = "" } = oe() ?? {}, _ = !!l || ae(f), [re, v, y = []] = w(d, {
		color: e ?? ne,
		width: r ?? n ?? m,
		height: i ?? n ?? m,
		strokeWidth: a ?? ee,
		absoluteStrokeWidth: o ?? h,
		nonScalingStroke: s ?? te,
		className: x(g, c),
		hasA11yProp: _,
		attributes: f
	});
	return t(re, {
		ref: p,
		...v
	}, [...y.map(([e, n]) => t(e, n)), ...Array.isArray(l) ? l : [l]]);
});
// node_modules/lucide-react/dist/esm/createLucideIcon.mjs
function D(e, r = [], i = []) {
	let a = typeof e == "string" ? v(e, r, i) : e, o = n(({ className: e, ...n }, r) => t(E, {
		ref: r,
		icon: a,
		className: e,
		...n
	}));
	return a.name && (o.displayName = b(a.name)), o;
}
// node_modules/lucide-react/dist/esm/icons/arrow-down.mjs
var O = {
	name: "arrow-down",
	size: 24,
	node: [["path", {
		d: "M12 5v14",
		key: "s699le"
	}], ["path", {
		d: "m19 12-7 7-7-7",
		key: "1idqje"
	}]]
};
O.node;
var se = D(O), k = {
	name: "arrow-up",
	size: 24,
	node: [["path", {
		d: "m5 12 7-7 7 7",
		key: "hav0vg"
	}], ["path", {
		d: "M12 19V5",
		key: "x0mq9r"
	}]]
};
k.node;
var ce = D(k), A = {
	name: "crosshair",
	size: 24,
	node: [
		["circle", {
			cx: "12",
			cy: "12",
			r: "10",
			key: "1mglay"
		}],
		["line", {
			x1: "22",
			x2: "18",
			y1: "12",
			y2: "12",
			key: "l9bcsi"
		}],
		["line", {
			x1: "6",
			x2: "2",
			y1: "12",
			y2: "12",
			key: "13hhkx"
		}],
		["line", {
			x1: "12",
			x2: "12",
			y1: "6",
			y2: "2",
			key: "10w3f3"
		}],
		["line", {
			x1: "12",
			x2: "12",
			y1: "22",
			y2: "18",
			key: "15g9kq"
		}]
	]
};
A.node;
var le = D(A), j = {
	name: "file-text",
	size: 24,
	node: [
		["path", {
			d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",
			key: "1oefj6"
		}],
		["path", {
			d: "M14 2v5a1 1 0 0 0 1 1h5",
			key: "wfsgrz"
		}],
		["path", {
			d: "M10 9H8",
			key: "b1mrlr"
		}],
		["path", {
			d: "M16 13H8",
			key: "t4e002"
		}],
		["path", {
			d: "M16 17H8",
			key: "z1uh3a"
		}]
	]
};
j.node;
var ue = D(j), M = {
	name: "grid-3x3",
	size: 24,
	node: [
		["rect", {
			width: "18",
			height: "18",
			x: "3",
			y: "3",
			rx: "2",
			key: "afitv7"
		}],
		["path", {
			d: "M3 9h18",
			key: "1pudct"
		}],
		["path", {
			d: "M3 15h18",
			key: "5xshup"
		}],
		["path", {
			d: "M9 3v18",
			key: "fh3hqa"
		}],
		["path", {
			d: "M15 3v18",
			key: "14nvp0"
		}]
	],
	aliases: ["grid", "grid-3-x-3"]
};
M.node;
var de = D(M), fe = {
	name: "image",
	size: 24,
	node: [
		["rect", {
			width: "18",
			height: "18",
			x: "3",
			y: "3",
			rx: "2",
			ry: "2",
			key: "1m3agn"
		}],
		["circle", {
			cx: "9",
			cy: "9",
			r: "2",
			key: "af1f0g"
		}],
		["path", {
			d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",
			key: "1xmnt7"
		}]
	]
};
fe.node;
var pe = D(fe), me = {
	name: "layers",
	size: 24,
	node: [
		["path", {
			d: "M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",
			key: "zw3jo"
		}],
		["path", {
			d: "M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",
			key: "1wduqc"
		}],
		["path", {
			d: "M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",
			key: "kqbvx6"
		}]
	],
	aliases: ["layers-3"]
};
me.node;
var he = D(me), N = {
	name: "list-ordered",
	size: 24,
	node: [
		["path", {
			d: "M11 5h10",
			key: "1cz7ny"
		}],
		["path", {
			d: "M11 12h10",
			key: "1438ji"
		}],
		["path", {
			d: "M11 19h10",
			key: "11t30w"
		}],
		["path", {
			d: "M4 4h1v5",
			key: "10yrso"
		}],
		["path", {
			d: "M4 9h2",
			key: "r1h2o0"
		}],
		["path", {
			d: "M6.5 20H3.4c0-1 2.6-1.925 2.6-3.5a1.5 1.5 0 0 0-2.6-1.02",
			key: "xtkcd5"
		}]
	]
};
N.node;
var ge = D(N), P = {
	name: "list",
	size: 24,
	node: [
		["path", {
			d: "M3 5h.01",
			key: "18ugdj"
		}],
		["path", {
			d: "M3 12h.01",
			key: "nlz23k"
		}],
		["path", {
			d: "M3 19h.01",
			key: "noohij"
		}],
		["path", {
			d: "M8 5h13",
			key: "1pao27"
		}],
		["path", {
			d: "M8 12h13",
			key: "1za7za"
		}],
		["path", {
			d: "M8 19h13",
			key: "m83p4d"
		}]
	]
};
P.node;
var _e = D(P), F = {
	name: "map-pin",
	size: 24,
	node: [["path", {
		d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
		key: "1r0f0z"
	}], ["circle", {
		cx: "12",
		cy: "10",
		r: "3",
		key: "ilqhr7"
	}]]
};
F.node;
var ve = D(F), ye = {
	name: "maximize-2",
	size: 24,
	node: [
		["path", {
			d: "M15 3h6v6",
			key: "1q9fwt"
		}],
		["path", {
			d: "m21 3-7 7",
			key: "1l2asr"
		}],
		["path", {
			d: "m3 21 7-7",
			key: "tjx5ai"
		}],
		["path", {
			d: "M9 21H3v-6",
			key: "wtvkvv"
		}]
	]
};
ye.node;
var be = D(ye), I = {
	name: "plus",
	size: 24,
	node: [["path", {
		d: "M5 12h14",
		key: "1ays0h"
	}], ["path", {
		d: "M12 5v14",
		key: "s699le"
	}]]
};
I.node;
var xe = D(I), Se = {
	name: "refresh-ccw",
	size: 24,
	node: [
		["path", {
			d: "M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",
			key: "14sxne"
		}],
		["path", {
			d: "M3 3v5h5",
			key: "1xhq8a"
		}],
		["path", {
			d: "M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16",
			key: "1hlbsb"
		}],
		["path", {
			d: "M16 16h5v5",
			key: "ccwih5"
		}]
	]
};
Se.node;
var Ce = D(Se), L = {
	name: "rotate-ccw",
	size: 24,
	node: [["path", {
		d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",
		key: "1357e3"
	}], ["path", {
		d: "M3 3v5h5",
		key: "1xhq8a"
	}]]
};
L.node;
var we = D(L), Te = {
	name: "save",
	size: 24,
	node: [
		["path", {
			d: "M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",
			key: "1c8476"
		}],
		["path", {
			d: "M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",
			key: "1ydtos"
		}],
		["path", {
			d: "M7 3v4a1 1 0 0 0 1 1h7",
			key: "t51u73"
		}]
	]
};
Te.node;
var Ee = D(Te), De = {
	name: "sliders-vertical",
	size: 24,
	node: [
		["path", {
			d: "M10 8h4",
			key: "1sr2af"
		}],
		["path", {
			d: "M12 21v-9",
			key: "17s77i"
		}],
		["path", {
			d: "M12 8V3",
			key: "13r4qs"
		}],
		["path", {
			d: "M17 16h4",
			key: "h1uq16"
		}],
		["path", {
			d: "M19 12V3",
			key: "o1uvq1"
		}],
		["path", {
			d: "M19 21v-5",
			key: "qua636"
		}],
		["path", {
			d: "M3 14h4",
			key: "bcjad9"
		}],
		["path", {
			d: "M5 10V3",
			key: "cb8scm"
		}],
		["path", {
			d: "M5 21v-7",
			key: "1w1uti"
		}]
	],
	aliases: ["sliders"]
};
De.node;
var Oe = D(De), ke = {
	name: "trash",
	size: 24,
	node: [
		["path", {
			d: "M10 11v6",
			key: "nco0om"
		}],
		["path", {
			d: "M14 11v6",
			key: "outv1u"
		}],
		["path", {
			d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",
			key: "miytrc"
		}],
		["path", {
			d: "M3 6h18",
			key: "d0wm0j"
		}],
		["path", {
			d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",
			key: "e791ji"
		}]
	],
	aliases: ["trash-2"]
};
ke.node;
var Ae = D(ke), je = {
	name: "triangle-alert",
	size: 24,
	node: [
		["path", {
			d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
			key: "wmoenq"
		}],
		["path", {
			d: "M12 9v4",
			key: "juzpu7"
		}],
		["path", {
			d: "M12 17h.01",
			key: "p32p05"
		}]
	],
	aliases: ["alert-triangle"]
};
je.node;
var Me = D(je), Ne = {
	name: "undo-2",
	size: 24,
	node: [["path", {
		d: "M9 14 4 9l5-5",
		key: "102s5s"
	}], ["path", {
		d: "M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11",
		key: "f3b9sd"
	}]]
};
Ne.node;
var Pe = D(Ne), Fe = {
	name: "upload",
	size: 24,
	node: [
		["path", {
			d: "M12 3v12",
			key: "1x0j5s"
		}],
		["path", {
			d: "m17 8-5-5-5 5",
			key: "7q97r8"
		}],
		["path", {
			d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",
			key: "ih7n3h"
		}]
	]
};
Fe.node;
var Ie = D(Fe), Le = {
	name: "zoom-in",
	size: 24,
	node: [
		["circle", {
			cx: "11",
			cy: "11",
			r: "8",
			key: "4ej97u"
		}],
		["line", {
			x1: "21",
			x2: "16.65",
			y1: "21",
			y2: "16.65",
			key: "13gj7c"
		}],
		["line", {
			x1: "11",
			x2: "11",
			y1: "8",
			y2: "14",
			key: "1vmskp"
		}],
		["line", {
			x1: "8",
			x2: "14",
			y1: "11",
			y2: "11",
			key: "durymu"
		}]
	]
};
Le.node;
var Re = D(Le), ze = {
	name: "zoom-out",
	size: 24,
	node: [
		["circle", {
			cx: "11",
			cy: "11",
			r: "8",
			key: "4ej97u"
		}],
		["line", {
			x1: "21",
			x2: "16.65",
			y1: "21",
			y2: "16.65",
			key: "13gj7c"
		}],
		["line", {
			x1: "8",
			x2: "14",
			y1: "11",
			y2: "11",
			key: "durymu"
		}]
	]
};
ze.node;
var Be = D(ze), Ve = class extends Error {
	status;
	constructor(e, t) {
		super(t), this.status = e, this.name = "WaypointApiError";
	}
};
async function R(e, t) {
	let n = await fetch(e, t), r;
	try {
		r = await n.json();
	} catch {
		throw new Ve(n.status, `HTTP ${n.status}: invalid JSON response`);
	}
	if (!n.ok) {
		let e = typeof r == "object" && r && "error" in r && typeof r.error == "string" ? r.error : `HTTP ${n.status}`;
		throw new Ve(n.status, e);
	}
	return r;
}
async function He() {
	let e = await R("/api/files");
	if (!Array.isArray(e.files)) throw Error("waypoint 文件目录格式无效");
	return e.files;
}
function Ue(e) {
	return R(`/api/document?id=${encodeURIComponent(e)}`);
}
function We(e) {
	return R("/api/document", {
		method: "PUT",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(e)
	});
}
function Ge(e) {
	return R(`/api/background?id=${encodeURIComponent(e)}`);
}
async function Ke(e, t) {
	let n = await fetch(`/api/background/image?id=${encodeURIComponent(e)}`, {
		method: "POST",
		headers: { "Content-Type": t.type || "application/octet-stream" },
		body: t
	});
	if (!n.ok) {
		let e = await n.text(), t = `HTTP ${n.status}`;
		try {
			let n = JSON.parse(e);
			n && typeof n.error == "string" && (t = n.error);
		} catch {
			e && (t = e);
		}
		throw new Ve(n.status, t);
	}
	return n.json();
}
function qe(e, t) {
	return R(`/api/background/config?id=${encodeURIComponent(e)}`, {
		method: "PUT",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(t)
	});
}
function Je(e) {
	return R(`/api/background?id=${encodeURIComponent(e)}`, { method: "DELETE" });
}
// waypoints-editor/view2d.ts
function z(e, t, n) {
	return [e.width / 2 + (t - e.centerX) * e.scale, e.height / 2 - (n - e.centerY) * e.scale];
}
function Ye(e, t, n) {
	return {
		x: e.centerX + (t - e.width / 2) / e.scale,
		y: e.centerY - (n - e.height / 2) / e.scale
	};
}
function Xe(e, t, n) {
	return {
		...e,
		centerX: e.centerX - t / e.scale,
		centerY: e.centerY + n / e.scale
	};
}
function Ze(e, t, n, r, i = 2, a = 2e3) {
	let o = Math.max(i, Math.min(a, e.scale * r));
	if (Math.abs(o - e.scale) < 1e-6) return e;
	let s = e.centerX + (t - e.width / 2) / e.scale, c = e.centerY - (n - e.height / 2) / e.scale, l = s - (t - e.width / 2) / o, u = c + (n - e.height / 2) / o;
	return {
		...e,
		centerX: l,
		centerY: u,
		scale: o
	};
}
function Qe(e, t, n, r = 40) {
	let i = Math.max(1, e.maxX - e.minX), a = Math.max(1, e.maxY - e.minY), o = Math.max(10, t - r * 2), s = Math.max(10, n - r * 2), c = Math.max(2, Math.min(o / i, s / a)), l = (e.minX + e.maxX) / 2, u = (e.minY + e.maxY) / 2;
	return {
		centerX: Number.isFinite(l) ? l : 0,
		centerY: Number.isFinite(u) ? u : 0,
		scale: Number.isFinite(c) ? c : 50,
		width: t,
		height: n
	};
}
function B(e, t, n = 3) {
	return e.x - n < t.x + t.width && e.x + e.width + n > t.x && e.y - n < t.y + t.height && e.y + e.height + n > t.y;
}
function $e(e, t, n, r, i) {
	let a = r - t / 2, o = i - n / 2, s = e.rotationDeg * Math.PI / 180, c = Math.cos(s), l = Math.sin(s), u = e.metersPerPixel, d = u * (c * a + l * o), f = u * (l * a - c * o);
	return {
		x: e.centerX + d,
		y: e.centerY + f
	};
}
function et(e, t, n, r, i) {
	let a = e.metersPerPixel;
	if (a <= 1e-9) return {
		u: t / 2,
		v: n / 2
	};
	let o = e.rotationDeg * Math.PI / 180, s = Math.cos(o), c = Math.sin(o), l = r - e.centerX, u = i - e.centerY, d = (s * l + c * u) / a, f = (c * l - s * u) / a;
	return {
		u: t / 2 + d,
		v: n / 2 + f
	};
}
function tt(e, t, n, r, i, a) {
	let o = t.u - n / 2, s = t.v - r / 2, c = a * Math.PI / 180, l = Math.cos(c), u = Math.sin(c), d = i, f = d * (l * o + u * s), p = d * (u * o - l * s);
	return {
		centerX: e.x - f,
		centerY: e.y - p
	};
}
function nt(e, t, n, r) {
	let i = [], a = [];
	for (let o of e) {
		let e = t(o.name), s = Math.max(12, e.width), c = Math.max(12, e.height), l = [
			{
				rect: {
					x: o.px + 10,
					y: o.py - c - 2,
					width: s + 6,
					height: c + 6
				},
				textX: o.px + 10 + 3,
				textY: o.py - 2,
				needLeader: !1
			},
			{
				rect: {
					x: o.px + 10,
					y: o.py + 4,
					width: s + 6,
					height: c + 6
				},
				textX: o.px + 10 + 3,
				textY: o.py + 4 + c,
				needLeader: !1
			},
			{
				rect: {
					x: o.px - 10 - s - 6,
					y: o.py - c - 2,
					width: s + 6,
					height: c + 6
				},
				textX: o.px - 10 - s - 3,
				textY: o.py - 2,
				needLeader: !1
			},
			{
				rect: {
					x: o.px - 10 - s - 6,
					y: o.py + 4,
					width: s + 6,
					height: c + 6
				},
				textX: o.px - 10 - s - 3,
				textY: o.py + 4 + c,
				needLeader: !1
			},
			{
				rect: {
					x: o.px - s / 2 - 3,
					y: o.py - c - 20,
					width: s + 6,
					height: c + 6
				},
				textX: o.px - s / 2,
				textY: o.py - 20,
				needLeader: !0
			},
			{
				rect: {
					x: o.px - s / 2 - 3,
					y: o.py + 18,
					width: s + 6,
					height: c + 6
				},
				textX: o.px - s / 2,
				textY: o.py + 18 + c,
				needLeader: !0
			},
			{
				rect: {
					x: o.px + 14,
					y: o.py - c - 34,
					width: s + 6,
					height: c + 6
				},
				textX: o.px + 14 + 3,
				textY: o.py - 34,
				needLeader: !0
			},
			{
				rect: {
					x: o.px - 14 - s - 6,
					y: o.py - c - 34,
					width: s + 6,
					height: c + 6
				},
				textX: o.px - 14 - s - 3,
				textY: o.py - 34,
				needLeader: !0
			},
			{
				rect: {
					x: o.px + 14,
					y: o.py + 32,
					width: s + 6,
					height: c + 6
				},
				textX: o.px + 14 + 3,
				textY: o.py + 32 + c,
				needLeader: !0
			},
			{
				rect: {
					x: o.px - 14 - s - 6,
					y: o.py + 32,
					width: s + 6,
					height: c + 6
				},
				textX: o.px - 14 - s - 3,
				textY: o.py + 32 + c,
				needLeader: !0
			}
		], u;
		for (let e of l) if (!(e.rect.x < 4 || e.rect.x + e.rect.width > n - 4) && !(e.rect.y < 4 || e.rect.y + e.rect.height > r - 4) && !a.some((t) => B(e.rect, t, 2))) {
			u = e;
			break;
		}
		if (u) {
			let e = {
				name: o.name,
				rect: u.rect,
				textX: u.textX,
				textY: u.textY,
				leaderLine: u.needLeader ? {
					fromX: o.px,
					fromY: o.py,
					toX: u.rect.x + u.rect.width / 2,
					toY: u.rect.y + (u.rect.y > o.py ? 0 : u.rect.height)
				} : void 0
			};
			i.push(e), a.push(u.rect);
		} else {
			let e = c + 6, t = [
				{
					rect: {
						x: o.px + 8,
						y: o.py - c - 2,
						width: 22,
						height: e
					},
					textX: o.px + 8 + 4,
					textY: o.py - 2,
					needLeader: !1
				},
				{
					rect: {
						x: o.px + 8,
						y: o.py + 4,
						width: 22,
						height: e
					},
					textX: o.px + 8 + 4,
					textY: o.py + 4 + c,
					needLeader: !1
				},
				{
					rect: {
						x: o.px - 8 - 22,
						y: o.py - c - 2,
						width: 22,
						height: e
					},
					textX: o.px - 8 - 22 + 4,
					textY: o.py - 2,
					needLeader: !1
				},
				{
					rect: {
						x: o.px - 8 - 22,
						y: o.py + 4,
						width: 22,
						height: e
					},
					textX: o.px - 8 - 22 + 4,
					textY: o.py + 4 + c,
					needLeader: !1
				},
				{
					rect: {
						x: o.px - 11,
						y: o.py - c - 18,
						width: 22,
						height: e
					},
					textX: o.px - 11 + 4,
					textY: o.py - 18,
					needLeader: !0
				},
				{
					rect: {
						x: o.px - 11,
						y: o.py + 16,
						width: 22,
						height: e
					},
					textX: o.px - 11 + 4,
					textY: o.py + 16 + c,
					needLeader: !0
				}
			], s;
			for (let e of t) if (!(e.rect.x < 4 || e.rect.x + e.rect.width > n - 4) && !(e.rect.y < 4 || e.rect.y + e.rect.height > r - 4) && !a.some((t) => B(e.rect, t, 2))) {
				s = e;
				break;
			}
			if (s) i.push({
				name: o.name,
				rect: s.rect,
				textX: s.textX,
				textY: s.textY,
				leaderLine: s.needLeader ? {
					fromX: o.px,
					fromY: o.py,
					toX: s.rect.x + s.rect.width / 2,
					toY: s.rect.y + (s.rect.y > o.py ? 0 : s.rect.height)
				} : void 0,
				crowded: !0
			}), a.push(s.rect);
			else {
				let t = Math.max(4, Math.min(n - 22 - 4, o.px + 8)), s = Math.max(4, Math.min(r - e - 4, o.py - c - 2)), l = {
					x: t,
					y: s,
					width: 22,
					height: e
				};
				i.push({
					name: o.name,
					rect: l,
					textX: t + 4,
					textY: s + c,
					crowded: !0
				}), a.push(l);
			}
		}
	}
	return i;
}
// waypoints-editor/WaypointsEditorPage.tsx
function rt(e) {
	return e.map((e) => ({
		...e,
		extra: { ...e.extra }
	}));
}
function it({ value: e, onChange: t }) {
	return /* @__PURE__ */ g(d, {
		value: e,
		onValueChange: (e) => t(e ?? NaN),
		onInvalidValue: () => t(NaN)
	});
}
function at({ fontScale: e = 1 }) {
	let { locale: t } = h(), n = s(null), i = s(null), re = s(null), v = s(null), y = s(void 0), b = s(void 0), x = s(!1), S = s({
		x: 0,
		y: 0
	}), C = s([]), ie = s(""), [w, ae] = c([]), [T, oe] = c(() => {
		if (typeof window < "u" && window.location?.search) {
			let e = new URLSearchParams(window.location.search).get("file");
			if (e) return e;
		}
		return "odom";
	}), [E, D] = c(void 0), [O, k] = c([]), [A, j] = c(void 0), [M, fe] = c({
		width: 640,
		height: 420
	}), [me, N] = c({
		centerX: 0,
		centerY: 0,
		scale: 50,
		width: 640,
		height: 420
	}), [P, F] = c(!1), [ye, I] = c(), [Se, L] = c(), [Te, De] = c(0), [ke, je] = c(""), [Ne, Fe] = c("goal"), [Le, ze] = c(!1), [R, B] = c(() => {
		if (typeof window < "u" && window.location?.search) {
			let e = new URLSearchParams(window.location.search).get("tab");
			if (e === "list" || e === "map" || e === "inspector") return e;
		}
		return "map";
	}), [at, ot] = c(!1), [V, H] = c(null), [U, W] = c(null), [st, G] = c(""), [ct, K] = c(null), [q, lt] = c(!1), [ut, dt] = c(!1), ft = s(null), [J, pt] = c("auto"), [mt, ht] = c(1);
	y.current = me;
	let Y = w.find((e) => e.id === T), X = Y?.mode === "template" || E?.id === "template", Z = JSON.stringify(O) !== ie.current, gt = !!(ct || U && JSON.stringify(U) !== st);
	a(() => {
		let e = () => {
			ot(window.innerWidth < 860);
		};
		return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e);
	}, []);
	let _t = o(() => {
		if (!E) return [];
		if (X || !E.formal) return O.map((e) => ({
			point: e,
			templateName: e.name,
			templateType: e.type,
			missing: !1
		}));
		let e = new Map(O.map((e) => [e.name, e]));
		return E.template.map((t) => ({
			point: e.get(t.name),
			templateName: t.name,
			templateType: t.type,
			missing: !e.has(t.name)
		}));
	}, [
		O,
		X,
		E
	]), vt = s({
		width: 640,
		height: 420
	}), yt = r((e, t) => {
		e = e.filter((e) => Number.isFinite(e.x) && Number.isFinite(e.y));
		let n = t ?? vt.current;
		if (e.length === 0) {
			N({
				centerX: 0,
				centerY: 0,
				scale: 50,
				width: n.width,
				height: n.height
			});
			return;
		}
		let r = e.map((e) => e.x), i = e.map((e) => e.y), a = Qe({
			minX: Math.min(...r),
			maxX: Math.max(...r),
			minY: Math.min(...i),
			maxY: Math.max(...i)
		}, n.width, n.height, 60);
		N(a);
	}, []), bt = r(async (e) => {
		F(!0), I(void 0), L(void 0);
		try {
			let t = await Ue(e);
			D(t);
			let n = rt(t.points);
			k(n), ie.current = JSON.stringify(t.points), C.current = [], De(0), j(t.points[0]?.name), yt(n);
		} catch (e) {
			D(void 0), k([]), I(e instanceof Error ? e.message : String(e));
		} finally {
			F(!1);
		}
	}, [yt]);
	a(() => {
		let e = !1;
		return He().then((t) => {
			if (e) return;
			ae(t);
			let n = t.find((e) => e.id === T && e.file_available) ?? t.find((e) => e.file_available);
			n && oe(n.id);
		}).catch((t) => {
			e || I(t instanceof Error ? t.message : String(t));
		}), () => {
			e = !0;
		};
	}, [T]), a(() => {
		T && w.some((e) => e.id === T && e.file_available) && bt(T);
	}, [
		w,
		bt,
		T
	]);
	let xt = r(async (e) => {
		try {
			let t = await Ge(e);
			if (t.has_image && t.config && t.image_url) {
				let e = new Image();
				e.src = t.image_url, await new Promise((t, n) => {
					e.onload = () => t(), e.onerror = () => n(/* @__PURE__ */ Error("Failed to load background image"));
				});
				let n = {
					centerX: t.config.center_x,
					centerY: t.config.center_y,
					metersPerPixel: t.config.meters_per_pixel,
					rotationDeg: t.config.rotation_deg,
					opacity: t.config.opacity,
					visible: t.config.visible,
					pivotU: t.config.pivot_u,
					pivotV: t.config.pivot_v,
					width: t.config.width || e.naturalWidth,
					height: t.config.height || e.naturalHeight,
					imageFile: t.config.image_file
				};
				H(e), W(n), G(JSON.stringify(n)), K(null);
			} else H(null), W(null), G(""), K(null);
		} catch {
			H(null), W(null), G(""), K(null);
		}
	}, []);
	a(() => {
		Y && Y.mode !== "template" ? xt(T) : (H(null), W(null), G(""), K(null));
	}, [
		xt,
		Y?.mode,
		T
	]);
	let St = r((e) => {
		let n = e.target.files?.[0];
		if (!n) return;
		if (n.size > 20971520) {
			I(t === "en" ? "Image size exceeds 20 MiB limit" : "图片大小超过 20 MiB 限制");
			return;
		}
		let r = URL.createObjectURL(n), i = new Image();
		i.src = r, i.onload = () => {
			H(i), K(n);
			let e = {
				centerX: 0,
				centerY: 0,
				metersPerPixel: 1,
				rotationDeg: 0,
				opacity: .5,
				visible: !0,
				pivotU: i.naturalWidth / 2,
				pivotV: i.naturalHeight / 2,
				width: i.naturalWidth,
				height: i.naturalHeight,
				imageFile: n.name
			};
			W(e), L(t === "en" ? `Loaded image: ${n.name}` : `已加载图片: ${n.name}`);
		}, e.target.value = "";
	}, [t]), Ct = r((e, t) => {
		W((n) => n && {
			...n,
			centerX: e,
			centerY: t
		});
	}, []), wt = r((e, t) => {
		W((n) => {
			if (!n) return n;
			let r = tt($e(n, n.width, n.height, n.pivotU, n.pivotV), {
				u: n.pivotU,
				v: n.pivotV
			}, n.width, n.height, e, t);
			return {
				...n,
				centerX: r.centerX,
				centerY: r.centerY,
				metersPerPixel: e,
				rotationDeg: t
			};
		});
	}, []), Tt = r(async () => {
		if (U && T && !ut) {
			dt(!0), I(void 0), L(void 0);
			try {
				let e = U.imageFile;
				ct && (e = (await Ke(T, ct)).image_file);
				let n = {
					center_x: U.centerX,
					center_y: U.centerY,
					meters_per_pixel: U.metersPerPixel,
					rotation_deg: U.rotationDeg,
					opacity: U.opacity,
					visible: U.visible,
					pivot_u: U.pivotU,
					pivot_v: U.pivotV,
					width: U.width,
					height: U.height,
					image_file: e
				};
				await qe(T, n);
				let r = {
					...U,
					imageFile: e
				};
				W(r), G(JSON.stringify(r)), K(null), L(t === "en" ? "Background image and transform saved" : "背景图与变换已保存");
			} catch (e) {
				I(e instanceof Error ? e.message : String(e));
			} finally {
				dt(!1);
			}
		}
	}, [
		U,
		ct,
		ut,
		t,
		T
	]), Et = r(async () => {
		if (T && window.confirm(t === "en" ? "Delete background image for this preset?" : "确定删除当前预设的背景图？")) try {
			await Je(T), H(null), W(null), G(""), K(null), L(t === "en" ? "Background deleted" : "已删除背景图");
		} catch (e) {
			I(e instanceof Error ? e.message : String(e));
		}
	}, [t, T]), Dt = r(() => {
		U && V && (W((e) => e && {
			...e,
			centerX: 0,
			centerY: 0,
			metersPerPixel: 1,
			rotationDeg: 0,
			opacity: .5,
			visible: !0,
			pivotU: V.naturalWidth / 2,
			pivotV: V.naturalHeight / 2
		}), L(t === "en" ? "Reset background transform" : "已恢复默认背景变换"));
	}, [
		U,
		V,
		t
	]);
	a(() => {
		if (X) return;
		let e = v.current;
		if (!e) return;
		let t = () => {
			let t = e.clientWidth, n = e.clientHeight;
			t <= 0 || n <= 0 || (vt.current = {
				width: t,
				height: n
			}, fe({
				width: t,
				height: n
			}), N((e) => ({
				...e,
				width: t,
				height: n
			})));
		};
		t();
		let n = new ResizeObserver(t);
		return n.observe(e), () => n.disconnect();
	}, [X]), a(() => {
		if (X) return;
		let t = re.current;
		if (!t) return;
		let n = window.devicePixelRatio || 1;
		t.width = Math.max(1, Math.round(M.width * n)), t.height = Math.max(1, Math.round(M.height * n)), t.style.width = `${M.width}px`, t.style.height = `${M.height}px`;
		let r = t.getContext("2d");
		if (!r) return;
		r.setTransform(n, 0, 0, n, 0, 0), r.clearRect(0, 0, M.width, M.height);
		let i = getComputedStyle(document.documentElement), a = i.getPropertyValue("--foreground").trim() || "#f5f5f5", o = i.getPropertyValue("--text-muted").trim() || "#888888", s = i.getPropertyValue("--text-faint").trim() || "#555555", c = i.getPropertyValue("--border-soft").trim() || "#333333", l = i.getPropertyValue("--canvas").trim() || "#0f0f12", u = i.getPropertyValue("--surface-soft").trim() || "#1e1e24", d = document.documentElement.getAttribute("data-theme") === "light" || i.getPropertyValue("--canvas").trim() === "#ffffff" || i.getPropertyValue("--canvas").trim() === "#fff", f = d ? "#16a34a" : "#22c55e", p = d ? "#2563eb" : "#3b82f6";
		r.fillStyle = l, r.fillRect(0, 0, M.width, M.height);
		let m = me;
		if (V && U && U.visible) {
			r.save(), r.globalAlpha = Math.max(0, Math.min(1, U.opacity));
			let [e, t] = z(m, U.centerX, U.centerY);
			r.translate(e, t), r.rotate(-(U.rotationDeg * Math.PI) / 180);
			let n = U.metersPerPixel * m.scale;
			if (r.scale(n, n), r.drawImage(V, -U.width / 2, -U.height / 2, U.width, U.height), r.restore(), U.pivotU !== void 0 && U.pivotV !== void 0) {
				let e = $e(U, U.width, U.height, U.pivotU, U.pivotV), [t, n] = z(m, e.x, e.y);
				r.save(), r.strokeStyle = d ? "#d97706" : "#f59e0b", r.fillStyle = d ? "rgba(217, 119, 6, 0.25)" : "rgba(245, 158, 11, 0.25)", r.lineWidth = 1.5, r.beginPath(), r.arc(t, n, 6, 0, Math.PI * 2), r.fill(), r.stroke(), r.beginPath(), r.moveTo(t - 10, n), r.lineTo(t + 10, n), r.moveTo(t, n - 10), r.lineTo(t, n + 10), r.stroke(), r.restore();
			}
		}
		let ee = 1;
		for (let e of [
			.1,
			.2,
			.5,
			1,
			2,
			5,
			10,
			20
		]) if (e * m.scale >= 40) {
			ee = e;
			break;
		}
		let h = ee;
		if (J !== "auto") {
			let e = parseFloat(J);
			Number.isFinite(e) && e > 0 ? h = e : J === "custom" && Number.isFinite(mt) && mt > 0 && (h = mt);
		}
		let te = Ye(m, 0, M.height), ne = Ye(m, M.width, 0), g = Math.floor(te.x / h) * h, _ = Math.ceil(ne.x / h) * h, v = Math.floor(te.y / h) * h, y = Math.ceil(ne.y / h) * h;
		r.lineWidth = 1, r.strokeStyle = c, r.beginPath();
		for (let e = g; e <= _; e += h) {
			let [t] = z(m, e, 0), n = Math.round(t) + .5;
			r.moveTo(n, 0), r.lineTo(n, M.height);
		}
		for (let e = v; e <= y; e += h) {
			let [, t] = z(m, 0, e), n = Math.round(t) + .5;
			r.moveTo(0, n), r.lineTo(M.width, n);
		}
		r.stroke();
		let [b, x] = z(m, 0, 0);
		r.strokeStyle = d ? "rgba(0, 0, 0, 0.35)" : "rgba(255, 255, 255, 0.25)", r.lineWidth = 1.5, r.beginPath(), b >= 0 && b <= M.width && (r.moveTo(Math.round(b) + .5, 0), r.lineTo(Math.round(b) + .5, M.height)), x >= 0 && x <= M.height && (r.moveTo(0, Math.round(x) + .5), r.lineTo(M.width, Math.round(x) + .5)), r.stroke(), r.font = `${Math.max(9, Math.round(11 * e))}px ui-monospace, monospace`, r.fillStyle = s;
		let S = (e) => {
			if (Math.abs(e) < 1e-6) return "0m";
			let t = h < .1 ? 2 : h < 1 ? 1 : h % 1 == 0 ? 0 : 1;
			return `${e > 0 ? "+" : ""}${e.toFixed(t)}m`;
		};
		for (let e = g; e <= _; e += h) {
			let [t] = z(m, e, 0);
			t >= 40 && t <= M.width - 40 && r.fillText(S(e), t + 2, M.height - 4);
		}
		for (let e = v; e <= y; e += h) {
			let [, t] = z(m, 0, e);
			t >= 20 && t <= M.height - 20 && r.fillText(S(e), 4, t - 3);
		}
		r.fillText(`odom x (grid ${h.toFixed(h < .1 ? 2 : h % 1 == 0 ? 0 : 1)}m)`, 10, M.height - 18), r.save(), r.translate(14, 20), r.rotate(-Math.PI / 2), r.fillText(`odom y (grid ${h.toFixed(h < .1 ? 2 : h % 1 == 0 ? 0 : 1)}m)`, 0, 0), r.restore();
		let C = Math.max(10, Math.round(12 * e));
		r.font = `${C}px ui-monospace, monospace`;
		let ie = O.filter((e) => [
			e.x,
			e.y,
			e.yaw_deg
		].every(Number.isFinite)).map((e) => {
			let [t, n] = z(m, e.x, e.y);
			return {
				name: e.name,
				px: t,
				py: n,
				point: e
			};
		}), w = nt(ie, (e) => ({
			width: r.measureText(e).width,
			height: C
		}), M.width, M.height);
		for (let e of ie) {
			let { px: t, py: n, point: i } = e, o = i.name === A, s = i.type === "goal" ? f : p;
			r.beginPath(), r.arc(t, n, o ? 8 : 6, 0, Math.PI * 2), r.fillStyle = s, r.fill(), r.lineWidth = o ? 3 : 1.5, r.strokeStyle = o ? a : "#ffffff", r.stroke();
			let c = i.yaw_deg * Math.PI / 180, l = o ? 22 : 16;
			r.beginPath(), r.moveTo(t, n), r.lineTo(t + Math.cos(c) * l, n - Math.sin(c) * l), r.strokeStyle = s, r.lineWidth = o ? 2.5 : 1.5, r.stroke();
		}
		for (let e of w) {
			let t = e.name === A, n = O.find((t) => t.name === e.name)?.type === "goal" ? f : p;
			e.leaderLine && (r.beginPath(), r.setLineDash([3, 3]), r.moveTo(e.leaderLine.fromX, e.leaderLine.fromY), r.lineTo(e.leaderLine.toX, e.leaderLine.toY), r.strokeStyle = t ? a : o, r.lineWidth = 1, r.stroke(), r.setLineDash([]));
			let i = e.crowded, s = e.rect;
			r.fillStyle = t ? d ? "#e2e8f0" : "#27272a" : d ? "#ffffff" : u, r.strokeStyle = t ? a : n, r.lineWidth = t ? 2 : 1, r.beginPath(), r.roundRect ? r.roundRect(s.x, s.y, s.width, s.height, 3) : r.rect(s.x, s.y, s.width, s.height), r.fill(), r.stroke(), r.fillStyle = a, i ? r.fillText("…", e.textX, e.textY) : r.fillText(e.name, e.textX, e.textY);
		}
	}, [
		U,
		V,
		M,
		mt,
		O,
		e,
		J,
		q,
		X,
		A,
		me
	]);
	let Q = r(() => {
		C.current = [...C.current.slice(-99), rt(O)], De(C.current.length);
	}, [O]), Ot = r((e, t) => {
		Q(), k((n) => n.map((n) => n.name === e ? {
			...n,
			...t
		} : n));
	}, [Q]), kt = r(() => {
		if (!te(i.current)) return;
		let e = ke.trim();
		e ? O.some((t) => t.name === e) ? I(t === "en" ? `Point '${e}' already exists` : `点位 '${e}' 已存在`) : (Q(), k((t) => [...t, {
			name: e,
			type: Ne,
			x: 0,
			y: 0,
			z: 0,
			yaw_deg: 0,
			extra: {}
		}]), j(e), je(""), I(void 0)) : I(t === "en" ? "Please enter a point name" : "请输入点位名称");
	}, [
		O,
		t,
		ke,
		Ne,
		Q
	]), At = r((e, t) => {
		Q(), k((n) => n.map((n, r) => r === e ? {
			...n,
			name: t
		} : n));
	}, [Q]), jt = r((e, t) => {
		Q(), k((n) => n.map((n, r) => r === e ? {
			...n,
			type: t
		} : n));
	}, [Q]), Mt = r((e, t) => {
		let n = e + t;
		n < 0 || n >= O.length || (Q(), k((t) => {
			let r = [...t], i = r[e];
			return r[e] = r[n], r[n] = i, r;
		}));
	}, [O.length, Q]), Nt = r((e) => {
		let n = O[e];
		n && window.confirm(t === "en" ? `Delete template point '${n.name}'?` : `确定删除模板点位 '${n.name}'？`) && (Q(), k((t) => t.filter((t, n) => n !== e)), A === n.name && j(void 0));
	}, [
		O,
		t,
		Q,
		A
	]), $ = o(() => {
		if (!X) return {
			total: 0,
			goals: 0,
			waypoints: 0,
			hasDuplicates: !1,
			hasEmpty: !1
		};
		let e = O.map((e) => e.name.trim()), t = e.some((e) => !e), n = new Set(e).size !== e.length, r = O.filter((e) => e.type === "goal").length, i = O.filter((e) => e.type === "waypoint").length;
		return {
			total: O.length,
			goals: r,
			waypoints: i,
			hasDuplicates: n,
			hasEmpty: t
		};
	}, [O, X]), Pt = r(() => {
		let e = C.current.pop();
		e && (k(e), De(C.current.length));
	}, []), Ft = r(() => {
		(!Z || window.confirm(t === "en" ? "Discard unsaved waypoint edits?" : "放弃未保存的航点修改？")) && bt(T);
	}, [
		Z,
		bt,
		t,
		T
	]), It = r(async () => {
		if (te(n.current?.querySelector(X ? ".waypoints-template-list" : ".waypoint-form") ?? null) && E && Z && !P) {
			if (!X && O.some((e) => ![
				e.x,
				e.y,
				e.z,
				e.yaw_deg
			].every(Number.isFinite))) I(t === "en" ? "Fill in all waypoint coordinates" : "请填写所有航点坐标");
			else {
				if (X) {
					if ($.hasEmpty) {
						I(t === "en" ? "Point names cannot be empty" : "点位名称不能为空");
						return;
					}
					if ($.hasDuplicates) {
						I(t === "en" ? "Duplicate point names are not allowed" : "模板中存在重复的点位名称");
						return;
					}
				}
				if (window.confirm(t === "en" ? `Overwrite ${E.id} (${Y?.file_name ?? E.id})?` : `确认覆盖 ${E.id}（${Y?.file_name ?? E.id}）？`)) {
					F(!0), I(void 0), L(void 0);
					try {
						let e = await We({
							id: E.id,
							version: E.version,
							points: O
						});
						D((t) => t && {
							...t,
							points: rt(O),
							version: e.version
						}), ie.current = JSON.stringify(O), L(t === "en" ? `Saved. Backup: ${e.backup}` : `已保存。备份：${e.backup}`);
					} catch (e) {
						e instanceof Ve && e.status === 409 ? I(t === "en" ? "The waypoint file changed externally. Reload before saving." : "航点文件已被外部修改，请重新加载后再保存。") : I(e instanceof Error ? e.message : String(e));
					} finally {
						F(!1);
					}
				}
			}
		}
	}, [
		P,
		O,
		Z,
		X,
		t,
		Y?.file_name,
		$,
		E
	]), Lt = r((e) => {
		let n = y.current;
		if (!n) return;
		let r = e.currentTarget.getBoundingClientRect(), i = e.clientX - r.left, a = e.clientY - r.top;
		if (q && U && V) {
			let e = Ye(n, i, a), r = et(U, U.width, U.height, e.x, e.y), o = Math.max(0, Math.min(U.width, r.u)), s = Math.max(0, Math.min(U.height, r.v));
			W((e) => e && {
				...e,
				pivotU: o,
				pivotV: s
			}), lt(!1), L(t === "en" ? `Set pivot to pixel (${Math.round(o)}, ${Math.round(s)})` : `已设置旋转缩放中心为像素 (${Math.round(o)}, ${Math.round(s)})`);
			return;
		}
		let o = O.find((e) => {
			let [t, r] = z(n, e.x, e.y);
			return Math.hypot(t - i, r - a) <= 15;
		});
		o ? (Q(), b.current = o.name, j(o.name), x.current = !1) : (x.current = !0, S.current = {
			x: i,
			y: a
		}, b.current = void 0), e.currentTarget.setPointerCapture(e.pointerId);
	}, [
		U,
		V,
		O,
		q,
		t,
		Q
	]), Rt = r((e) => {
		let t = y.current;
		if (!t) return;
		let n = e.currentTarget.getBoundingClientRect(), r = e.clientX - n.left, i = e.clientY - n.top;
		if (b.current) {
			let e = b.current, n = Ye(t, r, i);
			k((t) => t.map((t) => t.name === e ? {
				...t,
				x: n.x,
				y: n.y
			} : t));
		} else if (x.current) {
			let e = r - S.current.x, t = i - S.current.y;
			S.current = {
				x: r,
				y: i
			}, N((n) => Xe(n, e, t));
		}
	}, []), zt = r((e) => {
		b.current = void 0, x.current = !1, e.currentTarget.hasPointerCapture(e.pointerId) && e.currentTarget.releasePointerCapture(e.pointerId);
	}, []), Bt = s(0);
	a(() => {
		let e = re.current;
		if (!e) return;
		let t = (t) => {
			if (t.preventDefault(), t.stopPropagation(), performance.now() - Bt.current < 120 && t.ctrlKey || !y.current) return;
			let n = e.getBoundingClientRect(), r = t.clientX - n.left, i = t.clientY - n.top;
			if (t.ctrlKey) {
				let e = Math.exp(-t.deltaY * .01);
				N((t) => Ze(t, r, i, e));
			} else if (t.deltaMode === 0) N((e) => Xe(e, -t.deltaX, -t.deltaY));
			else {
				let e = t.deltaY < 0 ? 1.15 : 1 / 1.15;
				N((t) => Ze(t, r, i, e));
			}
		}, n = 1, r = (e) => {
			e.preventDefault(), e.stopPropagation(), Bt.current = performance.now(), n = 1;
		}, i = (t) => {
			t.preventDefault(), t.stopPropagation(), Bt.current = performance.now();
			let r = t;
			if (!y.current) return;
			let i = e.getBoundingClientRect(), a = (r.clientX ?? i.left + i.width / 2) - i.left, o = (r.clientY ?? i.top + i.height / 2) - i.top, s = r.scale ?? 1, c = s / n;
			n = s, Math.abs(c - 1) > .001 && N((e) => Ze(e, a, o, c));
		}, a = (e) => {
			e.preventDefault(), e.stopPropagation(), Bt.current = performance.now();
		};
		return e.addEventListener("wheel", t, { passive: !1 }), e.addEventListener("gesturestart", r, { passive: !1 }), e.addEventListener("gesturechange", i, { passive: !1 }), e.addEventListener("gestureend", a, { passive: !1 }), () => {
			e.removeEventListener("wheel", t), e.removeEventListener("gesturestart", r), e.removeEventListener("gesturechange", i), e.removeEventListener("gestureend", a);
		};
	}, []);
	let Vt = r(() => {
		let e = y.current;
		e && N((t) => Ze(t, e.width / 2, e.height / 2, 1.25));
	}, []), Ht = r(() => {
		let e = y.current;
		e && N((t) => Ze(t, e.width / 2, e.height / 2, .8));
	}, []), Ut = r(() => {
		yt(O);
	}, [O, yt]);
	return /* @__PURE__ */ _(f, {
		className: "waypoints-editor-page",
		ref: n,
		children: [
			/* @__PURE__ */ _(ee, {
				className: "waypoints-toolbar",
				children: [
					/* @__PURE__ */ g(ue, {}),
					/* @__PURE__ */ g(p, {
						value: T,
						onChange: (e) => {
							let n = e.target.value;
							Z && !window.confirm(t === "en" ? "Discard unsaved waypoint edits?" : "放弃未保存的航点修改？") || gt && !window.confirm(t === "en" ? "Discard unsaved background image edits?" : "放弃未保存的背景图修改？") || oe(n);
						},
						"aria-label": t === "en" ? "Waypoint file" : "航点文件",
						children: w.map((e) => /* @__PURE__ */ _("option", {
							value: e.id,
							disabled: !e.file_available,
							children: [e.label, e.file_available ? "" : " (N/A)"]
						}, e.id))
					}),
					/* @__PURE__ */ g("span", {
						className: "waypoints-file-meta",
						children: X ? t === "en" ? `template · ${O.length} points` : `规则模板 · 共 ${O.length} 个点` : `${E?.frame_id ?? Y?.frame_id ?? "odom"} · ${E?.formal ? t === "en" ? "formal" : "正式" : t === "en" ? "debug" : "调试"}`
					}),
					at && /* @__PURE__ */ _("nav", {
						className: "waypoints-mobile-nav",
						role: "tablist",
						children: [
							/* @__PURE__ */ g(l, {
								selected: R === "list",
								onClick: () => B("list"),
								title: t === "en" ? "List view" : "列表视图",
								children: /* @__PURE__ */ g(_e, {})
							}),
							/* @__PURE__ */ g(l, {
								selected: R === "map",
								onClick: () => B("map"),
								title: t === "en" ? "Map view" : "网格视图",
								children: /* @__PURE__ */ g(ve, {})
							}),
							/* @__PURE__ */ g(l, {
								selected: R === "inspector",
								onClick: () => B("inspector"),
								title: t === "en" ? "Properties view" : "属性视图",
								children: /* @__PURE__ */ g(Oe, {})
							})
						]
					}),
					/* @__PURE__ */ g("span", { className: "spacer" }),
					!X && /* @__PURE__ */ _("div", {
						style: {
							display: "inline-flex",
							alignItems: "center",
							gap: 4
						},
						children: [
							/* @__PURE__ */ g(de, { style: {
								width: 14,
								height: 14,
								color: "var(--text-muted)"
							} }),
							/* @__PURE__ */ _(p, {
								value: J,
								onChange: (e) => pt(e.target.value),
								title: t === "en" ? "Metric grid distance" : "网格实际距离",
								"aria-label": t === "en" ? "Grid distance" : "网格距离",
								style: {
									minHeight: "var(--ctl-min-h)",
									maxWidth: 125
								},
								children: [
									/* @__PURE__ */ g("option", {
										value: "auto",
										children: t === "en" ? "Grid: Auto" : "网格: 自动"
									}),
									/* @__PURE__ */ g("option", {
										value: "0.1",
										children: "0.1 m"
									}),
									/* @__PURE__ */ g("option", {
										value: "0.2",
										children: "0.2 m"
									}),
									/* @__PURE__ */ g("option", {
										value: "0.5",
										children: "0.5 m"
									}),
									/* @__PURE__ */ g("option", {
										value: "1",
										children: "1.0 m"
									}),
									/* @__PURE__ */ g("option", {
										value: "2",
										children: "2.0 m"
									}),
									/* @__PURE__ */ g("option", {
										value: "5",
										children: "5.0 m"
									}),
									/* @__PURE__ */ g("option", {
										value: "custom",
										children: t === "en" ? "Custom..." : "自定义..."
									})
								]
							}),
							J === "custom" && /* @__PURE__ */ g(d, {
								value: mt,
								onValueChange: (e) => ht(e && e > 0 ? e : 1),
								min: .01,
								max: 100,
								step: .1,
								style: {
									width: 55,
									minHeight: "var(--ctl-min-h)"
								},
								title: t === "en" ? "Custom grid distance (meters)" : "自定义网格距离 (米)"
							})
						]
					}),
					/* @__PURE__ */ _("div", {
						className: "waypoints-zoom-controls",
						children: [
							/* @__PURE__ */ g(l, {
								className: "icon-action",
								onClick: Vt,
								title: t === "en" ? "Zoom in" : "放大视图",
								"aria-label": t === "en" ? "Zoom in" : "放大视图",
								children: /* @__PURE__ */ g(Re, {})
							}),
							/* @__PURE__ */ g(l, {
								className: "icon-action",
								onClick: Ht,
								title: t === "en" ? "Zoom out" : "缩小视图",
								"aria-label": t === "en" ? "Zoom out" : "缩小视图",
								children: /* @__PURE__ */ g(Be, {})
							}),
							/* @__PURE__ */ g(l, {
								className: "icon-action",
								onClick: Ut,
								title: t === "en" ? "Fit to view" : "自适应居中",
								"aria-label": t === "en" ? "Fit to view" : "自适应居中",
								children: /* @__PURE__ */ g(be, {})
							})
						]
					}),
					/* @__PURE__ */ g(l, {
						className: "icon-action",
						onClick: Ft,
						disabled: P,
						title: t === "en" ? "Reload file" : "重新加载文件",
						"aria-label": t === "en" ? "Reload file" : "重新加载文件",
						children: /* @__PURE__ */ g(Ce, {})
					}),
					/* @__PURE__ */ _(l, {
						onClick: () => void It(),
						disabled: !Z || P || !E,
						children: [
							/* @__PURE__ */ g(Ee, {}),
							" ",
							t === "en" ? "Save" : "保存"
						]
					}),
					/* @__PURE__ */ g(l, {
						className: "icon-action",
						onClick: Pt,
						disabled: Te === 0,
						title: t === "en" ? "Undo" : "撤销",
						"aria-label": t === "en" ? "Undo" : "撤销",
						children: /* @__PURE__ */ g(Pe, {})
					}),
					/* @__PURE__ */ g("span", {
						className: `waypoints-draft-status ${Z ? "dirty" : "clean"}`,
						children: Z ? t === "en" ? "Draft changed" : "草稿已修改" : t === "en" ? "Loaded" : "已加载"
					})
				]
			}),
			X ? /* @__PURE__ */ _("div", {
				className: "waypoints-workspace template-workspace",
				children: [/* @__PURE__ */ _("div", {
					className: "waypoints-template-pane",
					children: [/* @__PURE__ */ _("div", {
						className: "waypoints-template-toolbar",
						children: [/* @__PURE__ */ _("div", {
							className: "waypoints-section-title",
							children: [
								/* @__PURE__ */ g(ge, {}),
								" ",
								t === "en" ? "Template sequence" : "模板航点序列"
							]
						}), /* @__PURE__ */ _("div", {
							className: "waypoints-template-add-bar",
							ref: i,
							children: [
								/* @__PURE__ */ g(m, {
									type: "text",
									placeholder: t === "en" ? "New point name (e.g. A5)" : "新点位名称 (例如 A5)",
									value: ke,
									onChange: (e) => je(e.target.value),
									onKeyDown: (e) => {
										e.key === "Enter" && kt();
									},
									spellCheck: !1,
									required: !0
								}),
								/* @__PURE__ */ _(p, {
									value: Ne,
									onChange: (e) => Fe(e.target.value),
									children: [/* @__PURE__ */ g("option", {
										value: "goal",
										children: "goal"
									}), /* @__PURE__ */ g("option", {
										value: "waypoint",
										children: "waypoint"
									})]
								}),
								/* @__PURE__ */ _(l, {
									type: "button",
									onClick: kt,
									children: [
										/* @__PURE__ */ g(xe, {}),
										" ",
										t === "en" ? "Add point" : "添加点位"
									]
								})
							]
						})]
					}), /* @__PURE__ */ g("div", {
						className: "waypoints-template-list",
						children: O.length === 0 ? /* @__PURE__ */ g("p", {
							className: "empty-hint",
							children: t === "en" ? "No points in template" : "模板中暂无点位"
						}) : O.map((e, n) => /* @__PURE__ */ _("div", {
							className: `waypoints-template-row ${A === e.name ? "active" : ""}`,
							onClick: () => j(e.name),
							children: [
								/* @__PURE__ */ _("span", {
									className: "template-row-idx",
									children: ["#", n + 1]
								}),
								/* @__PURE__ */ g(m, {
									className: "template-name-input",
									value: e.name,
									onChange: (e) => At(n, e.target.value),
									placeholder: t === "en" ? "Point name" : "点位名称",
									spellCheck: !1,
									required: !0
								}),
								/* @__PURE__ */ _(p, {
									className: "template-type-select",
									value: e.type,
									onChange: (e) => jt(n, e.target.value),
									children: [/* @__PURE__ */ g("option", {
										value: "goal",
										children: "goal"
									}), /* @__PURE__ */ g("option", {
										value: "waypoint",
										children: "waypoint"
									})]
								}),
								/* @__PURE__ */ _("div", {
									className: "template-row-actions",
									children: [
										/* @__PURE__ */ g(l, {
											type: "button",
											className: "icon-action",
											title: t === "en" ? "Move up" : "上移",
											disabled: n === 0,
											onClick: (e) => {
												e.stopPropagation(), Mt(n, -1);
											},
											"aria-label": t === "en" ? "Move up" : "上移",
											children: /* @__PURE__ */ g(ce, {})
										}),
										/* @__PURE__ */ g(l, {
											type: "button",
											className: "icon-action",
											title: t === "en" ? "Move down" : "下移",
											disabled: n === O.length - 1,
											onClick: (e) => {
												e.stopPropagation(), Mt(n, 1);
											},
											"aria-label": t === "en" ? "Move down" : "下移",
											children: /* @__PURE__ */ g(se, {})
										}),
										/* @__PURE__ */ g(l, {
											type: "button",
											className: "icon-action delete",
											title: t === "en" ? "Delete point" : "删除点位",
											onClick: (e) => {
												e.stopPropagation(), Nt(n);
											},
											"aria-label": t === "en" ? "Delete point" : "删除点位",
											children: /* @__PURE__ */ g(Ae, {})
										})
									]
								})
							]
						}, n))
					})]
				}), /* @__PURE__ */ _("aside", {
					className: "waypoints-inspector",
					children: [/* @__PURE__ */ g("div", {
						className: "waypoints-section-title",
						children: t === "en" ? "Template specs & stats" : "模板规范与统计"
					}), /* @__PURE__ */ _("div", {
						className: "template-stats-content",
						children: [
							/* @__PURE__ */ _("div", {
								className: "template-stat-item",
								children: [/* @__PURE__ */ g("span", { children: t === "en" ? "Total points" : "总点数" }), /* @__PURE__ */ g("strong", { children: $.total })]
							}),
							/* @__PURE__ */ _("div", {
								className: "template-stat-item",
								children: [/* @__PURE__ */ g("span", { children: t === "en" ? "Goals" : "作业/目标点 (goal)" }), /* @__PURE__ */ g("strong", { children: $.goals })]
							}),
							/* @__PURE__ */ _("div", {
								className: "template-stat-item",
								children: [/* @__PURE__ */ g("span", { children: t === "en" ? "Waypoints" : "途经点 (waypoint)" }), /* @__PURE__ */ g("strong", { children: $.waypoints })]
							}),
							$.hasDuplicates && /* @__PURE__ */ _("div", {
								className: "template-warning-box",
								children: [/* @__PURE__ */ g(Me, {}), /* @__PURE__ */ g("span", { children: t === "en" ? "Duplicate point names found! Please ensure all names are unique." : "检测到重名点位！请确保每个点名称唯一。" })]
							}),
							$.hasEmpty && /* @__PURE__ */ _("div", {
								className: "template-warning-box",
								children: [/* @__PURE__ */ g(Me, {}), /* @__PURE__ */ g("span", { children: t === "en" ? "Empty point names found! All points must have a name." : "存在未命名的点位！点位名称不能为空。" })]
							}),
							/* @__PURE__ */ g("div", {
								className: "template-guide-box",
								children: /* @__PURE__ */ g("p", { children: t === "en" ? "template.yaml defines the formal competition skeleton: official names, types, and sequence order. Points in formal odom_waypoints.yaml must match this template." : "template.yaml 规定正式比赛（formal）的标准航点名称、类型与执行顺序。在 formal 模式下录入或加载的航点文件必须完全符合此模板。" })
							})
						]
					})]
				})]
			}) : /* @__PURE__ */ _("div", {
				className: `waypoints-workspace ${at ? `mobile-tab-${R}` : ""}`,
				children: [
					/* @__PURE__ */ _("aside", {
						className: "waypoints-list",
						children: [
							/* @__PURE__ */ _("div", {
								className: "waypoints-section-title",
								children: [
									/* @__PURE__ */ g(_e, {}),
									" ",
									t === "en" ? "Points" : "航点列表"
								]
							}),
							P && /* @__PURE__ */ g("p", {
								className: "empty-hint",
								children: t === "en" ? "Loading..." : "加载中..."
							}),
							!P && _t.length === 0 && /* @__PURE__ */ g("p", {
								className: "empty-hint",
								children: t === "en" ? "No available points" : "暂无可用航点"
							}),
							_t.map((e) => {
								let n = e.point?.name ?? e.templateName ?? "", r = (e.point?.type ?? e.templateType) === "goal", i = e.missing;
								return /* @__PURE__ */ _(l, {
									className: `waypoint-row ${A === n ? "active" : ""} ${i ? "missing" : r ? "type-goal" : "type-waypoint"}`,
									onClick: () => {
										e.point && (j(e.point.name), at && B("map"));
									},
									disabled: !e.point,
									children: [/* @__PURE__ */ g("span", {
										className: `waypoint-badge ${i ? "badge-missing" : r ? "badge-goal" : "badge-waypoint"}`,
										children: i ? "!" : r ? "G" : "W"
									}), /* @__PURE__ */ _("div", {
										className: "waypoint-row-content",
										children: [/* @__PURE__ */ g("span", {
											className: "waypoint-row-name",
											title: n,
											children: n
										}), /* @__PURE__ */ g("span", {
											className: "waypoint-row-coords",
											children: e.point ? `x: ${e.point.x.toFixed(3)}, y: ${e.point.y.toFixed(3)}` : t === "en" ? "missing" : "缺失"
										})]
									})]
								}, n);
							})
						]
					}),
					/* @__PURE__ */ _("div", {
						className: "waypoints-map-wrap",
						ref: v,
						children: [
							/* @__PURE__ */ g("canvas", {
								ref: re,
								onPointerDown: Lt,
								onPointerMove: Rt,
								onPointerUp: zt,
								onPointerCancel: zt,
								style: { cursor: q ? "crosshair" : "default" },
								"aria-label": t === "en" ? "Waypoint map" : "航点地图"
							}),
							/* @__PURE__ */ _("div", {
								className: "waypoints-map-legend",
								children: [/* @__PURE__ */ _("span", { children: [
									/* @__PURE__ */ g("i", { className: "waypoint-legend-goal" }),
									" ",
									t === "en" ? "goal (G)" : "目标点 (G)"
								] }), /* @__PURE__ */ _("span", { children: [
									/* @__PURE__ */ g("i", { className: "waypoint-legend-waypoint" }),
									" ",
									t === "en" ? "waypoint (W)" : "途径点 (W)"
								] })]
							}),
							/* @__PURE__ */ _("div", {
								className: "waypoints-crowded-widget",
								children: [/* @__PURE__ */ _(l, {
									className: "crowded-toggle-btn",
									onClick: () => ze((e) => !e),
									title: t === "en" ? "View all labels list" : "查看全部标签清单",
									children: [
										/* @__PURE__ */ g(he, {}),
										" ",
										t === "en" ? "Labels" : "标签清单"
									]
								}), Le && /* @__PURE__ */ _("div", {
									className: "waypoints-crowded-panel",
									children: [/* @__PURE__ */ _("div", {
										className: "crowded-panel-header",
										children: [/* @__PURE__ */ g("span", { children: t === "en" ? "Point Labels" : "航点完整清单" }), /* @__PURE__ */ g(l, {
											className: "icon-action",
											"aria-label": t === "en" ? "Close labels" : "关闭标签清单",
											onClick: () => ze(!1),
											children: "×"
										})]
									}), /* @__PURE__ */ g("div", {
										className: "crowded-panel-body",
										children: O.map((e) => /* @__PURE__ */ _("div", {
											className: `crowded-item ${A === e.name ? "active" : ""}`,
											onClick: () => {
												j(e.name), y.current && N((t) => ({
													...t,
													centerX: e.x,
													centerY: e.y
												}));
											},
											children: [
												/* @__PURE__ */ _("span", {
													className: e.type === "goal" ? "text-goal" : "text-waypoint",
													children: [
														"[",
														e.type === "goal" ? "G" : "W",
														"]"
													]
												}),
												" ",
												e.name
											]
										}, e.name))
									})]
								})]
							})
						]
					}),
					/* @__PURE__ */ _("aside", {
						className: "waypoints-inspector",
						children: [
							/* @__PURE__ */ _("div", {
								className: "waypoints-section-title",
								children: [
									/* @__PURE__ */ g(Oe, {}),
									" ",
									t === "en" ? "Point data" : "航点属性"
								]
							}),
							(() => {
								let e = O.find((e) => e.name === A);
								return e ? /* @__PURE__ */ _("div", {
									className: "waypoint-form",
									children: [
										/* @__PURE__ */ _("label", { children: [/* @__PURE__ */ g("span", { children: t === "en" ? "Name" : "名称" }), /* @__PURE__ */ g(m, {
											value: e.name,
											readOnly: !0
										})] }),
										/* @__PURE__ */ _("label", { children: [/* @__PURE__ */ g("span", { children: t === "en" ? "Type" : "类型" }), /* @__PURE__ */ _(p, {
											value: e.type,
											disabled: E?.formal,
											onChange: (t) => Ot(e.name, { type: t.target.value }),
											children: [/* @__PURE__ */ g("option", {
												value: "waypoint",
												children: "waypoint"
											}), /* @__PURE__ */ g("option", {
												value: "goal",
												children: "goal"
											})]
										})] }),
										/* @__PURE__ */ _("label", { children: [/* @__PURE__ */ g("span", { children: "X (m)" }), /* @__PURE__ */ g(it, {
											value: e.x,
											onChange: (t) => Ot(e.name, { x: t })
										})] }),
										/* @__PURE__ */ _("label", { children: [/* @__PURE__ */ g("span", { children: "Y (m)" }), /* @__PURE__ */ g(it, {
											value: e.y,
											onChange: (t) => Ot(e.name, { y: t })
										})] }),
										/* @__PURE__ */ _("label", { children: [/* @__PURE__ */ g("span", { children: "Z (m)" }), /* @__PURE__ */ g(it, {
											value: e.z,
											onChange: (t) => Ot(e.name, { z: t })
										})] }),
										/* @__PURE__ */ _("label", { children: [/* @__PURE__ */ g("span", { children: "Yaw (deg)" }), /* @__PURE__ */ g(it, {
											value: e.yaw_deg,
											onChange: (t) => Ot(e.name, { yaw_deg: t })
										})] })
									]
								}, e.name) : /* @__PURE__ */ g("p", {
									className: "empty-hint",
									children: t === "en" ? "Select an available point" : "选择一个已有航点"
								});
							})(),
							E && !X && /* @__PURE__ */ _("div", {
								className: "bg-inspector-section",
								children: [
									/* @__PURE__ */ g("input", {
										type: "file",
										ref: ft,
										hidden: !0,
										accept: "image/png,image/jpeg,image/webp",
										onChange: St
									}),
									/* @__PURE__ */ _("div", {
										className: "bg-title-row",
										children: [/* @__PURE__ */ _("span", {
											style: {
												display: "inline-flex",
												alignItems: "center",
												gap: 5
											},
											children: [/* @__PURE__ */ g(pe, { style: {
												width: 14,
												height: 14
											} }), t === "en" ? "Background map" : "背景底图"]
										}), /* @__PURE__ */ g("div", {
											className: "bg-title-actions",
											children: U ? /* @__PURE__ */ _(ne, { children: [/* @__PURE__ */ g(l, {
												type: "button",
												onClick: () => ft.current?.click(),
												title: t === "en" ? "Replace image" : "替换图片",
												children: t === "en" ? "Replace" : "替换"
											}), /* @__PURE__ */ g(l, {
												type: "button",
												className: "delete",
												onClick: () => void Et(),
												title: t === "en" ? "Delete background" : "删除背景",
												children: /* @__PURE__ */ g(Ae, { style: {
													width: 12,
													height: 12
												} })
											})] }) : /* @__PURE__ */ _(l, {
												type: "button",
												onClick: () => ft.current?.click(),
												style: {
													display: "inline-flex",
													alignItems: "center",
													gap: 4
												},
												children: [/* @__PURE__ */ g(Ie, { style: {
													width: 12,
													height: 12
												} }), t === "en" ? "Upload" : "上传"]
											})
										})]
									}),
									U && /* @__PURE__ */ _(ne, { children: [
										/* @__PURE__ */ _("label", {
											className: "bg-row",
											children: [/* @__PURE__ */ g("span", { children: t === "en" ? "Visible" : "显示" }), /* @__PURE__ */ g("input", {
												type: "checkbox",
												checked: U.visible,
												onChange: (e) => W((t) => t && {
													...t,
													visible: e.target.checked
												})
											})]
										}),
										/* @__PURE__ */ _(l, {
											type: "button",
											className: "bg-pivot-btn",
											selected: q,
											onClick: () => lt(!q),
											title: t === "en" ? "Click to pick rotation & scaling pivot on the image" : "点击后在底图上选点作为旋转与缩放中心",
											children: [/* @__PURE__ */ g(le, {}), q ? t === "en" ? "Click image for pivot..." : "请在底图上点击选点..." : t === "en" ? "Set transform pivot" : "设置旋转缩放中心"]
										}),
										/* @__PURE__ */ _("div", {
											style: {
												fontSize: "11px",
												color: "var(--text-faint)",
												fontFamily: "var(--mono)"
											},
											children: [
												t === "en" ? "Pivot pixel" : "中心像素",
												": U ",
												Math.round(U.pivotU),
												", V",
												" ",
												Math.round(U.pivotV)
											]
										}),
										/* @__PURE__ */ _("div", {
											className: "bg-row",
											children: [
												/* @__PURE__ */ g("span", { children: "X (m)" }),
												/* @__PURE__ */ g(d, {
													value: U.centerX,
													onValueChange: (e) => Ct(e ?? 0, U.centerY)
												}),
												/* @__PURE__ */ g("div", {
													className: "bg-nudge-group",
													children: [
														-.1,
														-.01,
														.01,
														.1
													].map((e) => /* @__PURE__ */ g(l, {
														type: "button",
														className: "bg-nudge-btn",
														onClick: () => Ct(U.centerX + e, U.centerY),
														children: e > 0 ? `+${e}` : e
													}, e))
												})
											]
										}),
										/* @__PURE__ */ _("div", {
											className: "bg-row",
											children: [
												/* @__PURE__ */ g("span", { children: "Y (m)" }),
												/* @__PURE__ */ g(d, {
													value: U.centerY,
													onValueChange: (e) => Ct(U.centerX, e ?? 0)
												}),
												/* @__PURE__ */ g("div", {
													className: "bg-nudge-group",
													children: [
														-.1,
														-.01,
														.01,
														.1
													].map((e) => /* @__PURE__ */ g(l, {
														type: "button",
														className: "bg-nudge-btn",
														onClick: () => Ct(U.centerX, U.centerY + e),
														children: e > 0 ? `+${e}` : e
													}, e))
												})
											]
										}),
										/* @__PURE__ */ _("div", {
											className: "bg-row",
											children: [
												/* @__PURE__ */ g("span", {
													title: t === "en" ? "Scale: meters per pixel (m/px)" : "缩放单位: 米/像素 (m/px)",
													children: t === "en" ? "Scale (m/px)" : "缩放 (m/px)"
												}),
												/* @__PURE__ */ g(d, {
													value: U.metersPerPixel,
													onValueChange: (e) => wt(e && e > 0 ? e : 1, U.rotationDeg)
												}),
												/* @__PURE__ */ g("div", {
													className: "bg-nudge-group",
													children: [
														{
															label: "-0.1",
															delta: -.1
														},
														{
															label: "-1%",
															factor: -.01
														},
														{
															label: "+1%",
															factor: .01
														},
														{
															label: "+0.1",
															delta: .1
														}
													].map((e) => /* @__PURE__ */ g(l, {
														type: "button",
														className: "bg-nudge-btn",
														onClick: () => {
															let t = e.delta === void 0 ? Math.max(1e-4, U.metersPerPixel * (1 + (e.factor ?? 0))) : Math.max(1e-4, Math.round((U.metersPerPixel + e.delta) * 1e4) / 1e4);
															wt(t, U.rotationDeg);
														},
														children: e.label
													}, e.label))
												})
											]
										}),
										/* @__PURE__ */ _("div", {
											className: "bg-row",
											children: [
												/* @__PURE__ */ g("span", { children: t === "en" ? "Rot (°)" : "旋转 (°)" }),
												/* @__PURE__ */ g(d, {
													value: U.rotationDeg,
													onValueChange: (e) => wt(U.metersPerPixel, e ?? 0)
												}),
												/* @__PURE__ */ g("div", {
													className: "bg-nudge-group",
													children: [
														-5,
														-1,
														-.1,
														.1,
														1,
														5
													].map((e) => /* @__PURE__ */ _(l, {
														type: "button",
														className: "bg-nudge-btn",
														onClick: () => wt(U.metersPerPixel, Math.round((U.rotationDeg + e) * 10) / 10),
														children: [e > 0 ? `+${e}` : e, "°"]
													}, e))
												})
											]
										}),
										/* @__PURE__ */ _("div", {
											className: "bg-row",
											children: [/* @__PURE__ */ g("span", { children: t === "en" ? "Opacity" : "透明度" }), /* @__PURE__ */ g("input", {
												type: "range",
												min: "0",
												max: "1",
												step: "0.05",
												value: U.opacity,
												onChange: (e) => W((t) => t && {
													...t,
													opacity: parseFloat(e.target.value)
												})
											})]
										}),
										/* @__PURE__ */ _("div", {
											style: {
												fontSize: "11px",
												color: "var(--text-faint)",
												fontFamily: "var(--mono)"
											},
											children: [
												(U.width * U.metersPerPixel).toFixed(2),
												"m ×",
												" ",
												(U.height * U.metersPerPixel).toFixed(2),
												"m (",
												U.width,
												"×",
												U.height,
												"px)"
											]
										}),
										/* @__PURE__ */ _("div", {
											className: "bg-action-bar",
											children: [/* @__PURE__ */ _(l, {
												type: "button",
												onClick: () => void Tt(),
												disabled: !gt || ut,
												children: [/* @__PURE__ */ g(Ee, {}), ut ? t === "en" ? "Saving..." : "保存中..." : t === "en" ? "Save map" : "保存底图"]
											}), /* @__PURE__ */ _(l, {
												type: "button",
												onClick: Dt,
												title: t === "en" ? "Reset" : "恢复默认",
												children: [/* @__PURE__ */ g(we, {}), t === "en" ? "Reset" : "恢复默认"]
											})]
										}),
										/* @__PURE__ */ g("div", {
											className: `bg-status-text ${gt ? "dirty" : ""}`,
											children: gt ? t === "en" ? "Unsaved background edits" : "背景底图未保存" : t === "en" ? "Background saved" : "背景底图已保存"
										})
									] })
								]
							})
						]
					})
				]
			}),
			(ye || Se) && /* @__PURE__ */ g(u, {
				tone: ye ? "error" : "neutral",
				children: ye ?? Se
			})
		]
	});
}
// waypoints-editor/index.tsx
var ot = {
	id: "waypoints-editor",
	name: "航点编辑 (Waypoints Editor)",
	pages: [{
		id: "main",
		legacyMode: "waypoints",
		title: (e) => e.locale === "en" ? "Waypoints Editor" : "航点编辑",
		component: at
	}]
};
export { ot as default };
