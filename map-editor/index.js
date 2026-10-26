import { useCallback as e, useEffect as t, useRef as n, useState as r } from "react";
import { Button as i, Page as a, Toolbar as o } from "@robviz/core";
import { jsx as s, jsxs as c } from "react/jsx-runtime";
// map-editor/mapio.ts
var l = {
	resolution: .05,
	origin: [
		0,
		0,
		0
	],
	negate: 0,
	occupiedThresh: .65,
	freeThresh: .196
}, u = 254, d = 0, f = 205;
function p(e) {
	let t = { ...l }, n = "";
	for (let r of e.split("\n")) {
		let e = r.match(/^\s*([a-z_]+)\s*:\s*(.+?)\s*$/);
		if (!e) continue;
		let [, i, a] = e;
		switch (i) {
			case "image":
				n = a;
				break;
			case "resolution":
				t.resolution = Number(a);
				break;
			case "origin": {
				let e = a.replace(/[[\]]/g, "").split(",").map(Number);
				t.origin = [
					e[0] ?? 0,
					e[1] ?? 0,
					e[2] ?? 0
				];
				break;
			}
			case "negate":
				t.negate = Number(a);
				break;
			case "occupied_thresh":
				t.occupiedThresh = Number(a);
				break;
			case "free_thresh": t.freeThresh = Number(a);
		}
	}
	return {
		image: n,
		meta: t
	};
}
function m(e, t) {
	return `image: ${e}\nresolution: ${t.resolution}\norigin: [${t.origin[0]}, ${t.origin[1]}, ${t.origin[2]}]\nnegate: ${t.negate}\noccupied_thresh: ${t.occupiedThresh}\nfree_thresh: ${t.freeThresh}\n`;
}
function h(e, t) {
	let n = new Uint8Array(e), r = 0, i = () => {
		for (;;) {
			for (; r < n.length && /\s/.test(String.fromCharCode(n[r]));) r++;
			if (n[r] === 35) for (; r < n.length && n[r] !== 10;) r++;
			else break;
		}
		let e = r;
		for (; r < n.length && !/\s/.test(String.fromCharCode(n[r]));) r++;
		return new TextDecoder("ascii").decode(n.subarray(e, r));
	}, a = i();
	if (a !== "P5" && a !== "P2") throw Error(`not a PGM file (${a})`);
	let o = Number(i()), s = Number(i()), c = Number(i());
	r++;
	let l = new Int8Array(o * s), u = (e) => {
		let n = (t.negate ? e : c - e) / c;
		return n > t.occupiedThresh ? 100 : n < t.freeThresh ? 0 : -1;
	};
	if (a === "P5") for (let e = 0; e < s; e++) {
		let t = s - 1 - e;
		for (let e = 0; e < o; e++) l[t * o + e] = u(n[r++]);
	}
	else for (let e = 0; e < s; e++) {
		let t = s - 1 - e;
		for (let e = 0; e < o; e++) l[t * o + e] = u(Number(i()));
	}
	return {
		width: o,
		height: s,
		data: l,
		meta: t
	};
}
function g(e) {
	let { width: t, height: n, data: r, meta: i } = e, a = `P5\n${t} ${n}\n255\n`, o = new TextEncoder().encode(a), s = new Uint8Array(t * n);
	for (let e = 0; e < n; e++) {
		let a = n - 1 - e;
		for (let n = 0; n < t; n++) {
			let o = r[a * t + n], c = o === 0 ? u : o === 100 ? d : f;
			i.negate && (c = 255 - c), s[e * t + n] = c;
		}
	}
	let c = new Uint8Array(o.length + s.length);
	return c.set(o, 0), c.set(s, o.length), c.buffer;
}
// map-editor/index.tsx
var _ = 10, v = {
	free: [
		232,
		232,
		232
	],
	occupied: [
		20,
		20,
		20
	],
	unknown: [
		128,
		128,
		128
	]
};
function y(e) {
	return e === 100 ? v.occupied : e === 0 ? v.free : v.unknown;
}
function b(e) {
	return Math.atan2(2 * (e.w * e.z + e.x * e.y), 1 - 2 * (e.y * e.y + e.z * e.z));
}
function x(e, t) {
	let n = new Blob([e], { type: "application/octet-stream" }), r = URL.createObjectURL(n), i = document.createElement("a");
	i.href = r, i.download = t, i.click(), URL.revokeObjectURL(r);
}
var S = {
	"zh-CN": {
		choosePgm: "请至少选择一个 .pgm 图像文件",
		parseFailed: "解析失败: ",
		waitingMap: "正在等待 /map 话题消息...",
		mapTimeout: "10 秒内未收到 /map 消息",
		openMapFiles: "打开 PGM / YAML",
		captureMap: "从 /map 抓取",
		value: "值",
		free: "自由",
		occupied: "占用",
		unknown: "未知",
		tools: "工具",
		brush: "画笔",
		rectangle: "矩形",
		brushSize: "笔刷 ",
		undoCount: "撤销",
		exportMap: "导出 PGM+YAML",
		mapEmpty: "打开 map.pgm + map.yaml 或从话题抓取"
	},
	en: {
		choosePgm: "Please select at least one .pgm image file",
		parseFailed: "Parse failed: ",
		waitingMap: "Waiting for /map topic message...",
		mapTimeout: "No /map message received within 10 seconds",
		openMapFiles: "Open PGM / YAML",
		captureMap: "Capture from /map",
		value: "Value",
		free: "Free",
		occupied: "Occupied",
		unknown: "Unknown",
		tools: "Tools",
		brush: "Brush",
		rectangle: "Rectangle",
		brushSize: "Brush ",
		undoCount: "Undo",
		exportMap: "Export PGM+YAML",
		mapEmpty: "Open map.pgm + map.yaml or capture from topic"
	}
};
function C({ ctx: l }) {
	let { bridge: u, theme: d = "dark", locale: f = "zh-CN" } = l, v = f === "en", C = (e) => v ? S.en[e] : S["zh-CN"][e], w = n(null), T = n(null), E = n(null), D = n([]), O = n({
		scale: 4,
		ox: 0,
		oy: 0
	}), k = n(null), [A, j] = r(), [M, N] = r("paint"), [P, F] = r(0), [I, L] = r(3), [R, z] = r(0), [B, V] = r(), H = n(null), U = n("map"), W = e(() => {
		let e = w.current, t = E.current;
		if (!e) return;
		let n = e.getContext("2d"), r = getComputedStyle(e);
		if (n.setTransform(1, 0, 0, 1, 0, 0), n.fillStyle = r.getPropertyValue("--canvas").trim() || "#000", n.fillRect(0, 0, e.width, e.height), !t) return;
		let { scale: i, ox: a, oy: o } = O.current;
		n.setTransform(i, 0, 0, i, a, o), n.imageSmoothingEnabled = !1, n.drawImage(t, 0, 0);
		let s = k.current;
		if (s?.kind === "rect") {
			let [e, t] = s.startImg, [a, o] = s.curImg;
			n.strokeStyle = r.getPropertyValue("--foreground").trim() || "#f5f5f5", n.lineWidth = 1 / i, n.strokeRect(Math.min(e, a), Math.min(t, o), Math.abs(a - e) + 1, Math.abs(o - t) + 1);
		}
	}, []);
	t(() => {
		W();
	}, [d, W]);
	let G = e((e, t, n, r) => {
		let i = T.current, a = E.current;
		if (!i || !a) return;
		let o = Math.max(0, e), s = Math.max(0, t), c = Math.min(i.width - 1, n), l = Math.min(i.height - 1, r);
		if (c < o || l < s) return;
		let u = c - o + 1, d = l - s + 1, f = a.getContext("2d").createImageData(u, d);
		for (let e = 0; e < d; e++) {
			let t = i.height - 1 - (s + e);
			for (let n = 0; n < u; n++) {
				let [r, a, s] = y(i.data[t * i.width + o + n]), c = (e * u + n) * 4;
				f.data[c] = r, f.data[c + 1] = a, f.data[c + 2] = s, f.data[c + 3] = 255;
			}
		}
		a.getContext("2d").putImageData(f, o, s);
	}, []), K = e((e, t) => {
		T.current = e, U.current = t, D.current = [], z(0);
		let n = document.createElement("canvas");
		n.width = e.width, n.height = e.height, E.current = n, G(0, 0, e.width - 1, e.height - 1);
		let r = w.current;
		if (r) {
			let t = Math.min(r.width / e.width, r.height / e.height) * .92;
			O.current = {
				scale: t,
				ox: (r.width - e.width * t) / 2,
				oy: (r.height - e.height * t) / 2
			};
		}
		j({
			width: e.width,
			height: e.height,
			name: t
		}), V(void 0), W();
	}, [G, W]), q = e(() => {
		let e = T.current;
		e && (D.current.push(new Int8Array(e.data)), D.current.length > _ && D.current.shift(), z(D.current.length));
	}, []), J = e(() => {
		let e = T.current, t = D.current.pop();
		e && t && (e.data.set(t), z(D.current.length), G(0, 0, e.width - 1, e.height - 1), W());
	}, [G, W]), Y = e((e, t) => {
		let n = T.current;
		if (!n) return;
		let r = I, i = n.height - 1 - t;
		for (let t = -r + 1; t < r; t++) for (let a = -r + 1; a < r; a++) {
			if (a * a + t * t > (r - .5) * (r - .5)) continue;
			let o = e + a, s = i - t;
			o < 0 || o >= n.width || s < 0 || s >= n.height || (n.data[s * n.width + o] = P);
		}
		G(e - r, t - r, e + r, t + r);
	}, [
		I,
		P,
		G
	]), X = e((e, t) => {
		let n = T.current;
		if (!n) return;
		let r = Math.max(0, Math.min(e[0], t[0])), i = Math.min(n.width - 1, Math.max(e[0], t[0])), a = Math.max(0, Math.min(e[1], t[1])), o = Math.min(n.height - 1, Math.max(e[1], t[1]));
		for (let e = a; e <= o; e++) {
			let t = n.height - 1 - e;
			n.data.fill(P, t * n.width + r, t * n.width + i + 1);
		}
		G(r, a, i, o);
	}, [P, G]), Z = e((e) => {
		let t = w.current.getBoundingClientRect(), { scale: n, ox: r, oy: i } = O.current;
		return [Math.floor((e.clientX - t.left - r) / n), Math.floor((e.clientY - t.top - i) / n)];
	}, []), Q = e((e) => {
		if (e.currentTarget.setPointerCapture(e.pointerId), e.button === 2 || e.button === 1) {
			k.current = {
				kind: "pan",
				last: [e.clientX, e.clientY]
			};
			return;
		}
		if (!T.current) return;
		let t = Z(e);
		M === "paint" ? (q(), k.current = {
			kind: "paint",
			lastImg: t
		}, Y(t[0], t[1]), W()) : (k.current = {
			kind: "rect",
			startImg: t,
			curImg: t
		}, W());
	}, [
		M,
		Z,
		q,
		Y,
		W
	]), $ = e((e) => {
		let t = k.current;
		if (t) {
			if (t.kind === "pan") O.current.ox += e.clientX - t.last[0], O.current.oy += e.clientY - t.last[1], t.last = [e.clientX, e.clientY];
			else if (t.kind === "paint") {
				let n = Z(e), [r, i] = t.lastImg, a = Math.max(Math.abs(n[0] - r), Math.abs(n[1] - i), 1);
				for (let e = 1; e <= a; e++) Y(Math.round(r + (n[0] - r) * e / a), Math.round(i + (n[1] - i) * e / a));
				t.lastImg = n;
			} else t.curImg = Z(e);
			W();
		}
	}, [
		Z,
		Y,
		W
	]), ee = e(() => {
		let e = k.current;
		k.current = null, e?.kind === "rect" && (q(), X(e.startImg, e.curImg)), W();
	}, [
		X,
		q,
		W
	]);
	t(() => {
		let e = w.current;
		if (!e) return;
		let t = (t) => {
			t.preventDefault(), t.stopPropagation();
			let n = e.getBoundingClientRect(), r = t.clientX - n.left, i = t.clientY - n.top, a = O.current;
			if (t.ctrlKey) {
				let e = Math.exp(-t.deltaY * .01), n = Math.min(64, Math.max(.2, a.scale * e));
				a.ox = r - (r - a.ox) / a.scale * n, a.oy = i - (i - a.oy) / a.scale * n, a.scale = n;
			} else if (t.deltaMode === 0) a.ox -= t.deltaX, a.oy -= t.deltaY;
			else {
				let e = t.deltaY < 0 ? 1.15 : 1 / 1.15, n = Math.min(64, Math.max(.2, a.scale * e));
				a.ox = r - (r - a.ox) / a.scale * n, a.oy = i - (i - a.oy) / a.scale * n, a.scale = n;
			}
			W();
		};
		return e.addEventListener("wheel", t, { passive: !1 }), () => e.removeEventListener("wheel", t);
	}, [W]);
	let te = e(async (e) => {
		let t, n, r = "map";
		for (let i of e) i.name.endsWith(".yaml") || i.name.endsWith(".yml") ? t = p(await i.text()).meta : i.name.endsWith(".pgm") && (n = i, r = i.name.replace(/\.pgm$/, ""));
		if (!n) V(C("choosePgm"));
		else {
			t ??= {
				resolution: .05,
				origin: [
					0,
					0,
					0
				],
				negate: 0,
				occupiedThresh: .65,
				freeThresh: .196
			};
			try {
				K(h(await n.arrayBuffer(), t), r);
			} catch (e) {
				V(C("parseFailed") + (e instanceof Error ? e.message : String(e)));
			}
		}
	}, [K, C]), ne = e(() => {
		let e = C("waitingMap");
		V(e);
		let t = u.subscribe("/map", (e) => {
			if (e.kind !== "grid") return;
			t();
			let { info: n, data: r } = e;
			K({
				width: n.width,
				height: n.height,
				data: new Int8Array(r),
				meta: {
					resolution: n.resolution,
					origin: [
						n.origin.position.x,
						n.origin.position.y,
						b(n.origin.orientation)
					],
					negate: 0,
					occupiedThresh: .65,
					freeThresh: .196
				}
			}, "map");
		});
		setTimeout(() => {
			t(), V((t) => t === e ? C("mapTimeout") : t);
		}, 1e4);
	}, [
		u,
		K,
		C
	]), re = e(() => {
		let e = T.current;
		if (!e) return;
		let t = U.current;
		x(g(e), `${t}.pgm`), x(m(`${t}.pgm`, e.meta), `${t}.yaml`);
	}, []);
	return t(() => {
		let e = w.current, t = () => {
			let t = e.parentElement;
			t.clientWidth !== 0 && (e.width = t.clientWidth, e.height = t.clientHeight, W());
		};
		t();
		let n = new ResizeObserver(t);
		return n.observe(e.parentElement), () => n.disconnect();
	}, [W]), /* @__PURE__ */ c(a, {
		className: "map-editor",
		children: [/* @__PURE__ */ c(o, {
			className: "map-toolbar",
			children: [
				/* @__PURE__ */ s(i, {
					onClick: () => H.current?.click(),
					children: C("openMapFiles")
				}),
				/* @__PURE__ */ s("input", {
					ref: H,
					type: "file",
					multiple: !0,
					accept: ".pgm,.yaml,.yml",
					style: { display: "none" },
					onChange: (e) => e.target.files && te(e.target.files)
				}),
				/* @__PURE__ */ s(i, {
					onClick: ne,
					children: C("captureMap")
				}),
				/* @__PURE__ */ s("span", { className: "divider" }),
				/* @__PURE__ */ s("span", {
					className: "group-label",
					children: C("value")
				}),
				[
					[0, C("free")],
					[100, C("occupied")],
					[-1, C("unknown")]
				].map(([e, t]) => /* @__PURE__ */ s(i, {
					selected: P === e,
					onClick: () => F(e),
					children: t
				}, e)),
				/* @__PURE__ */ s("span", { className: "divider" }),
				/* @__PURE__ */ s("span", {
					className: "group-label",
					children: C("tools")
				}),
				/* @__PURE__ */ s(i, {
					selected: M === "paint",
					onClick: () => N("paint"),
					children: C("brush")
				}),
				/* @__PURE__ */ s(i, {
					selected: M === "rect",
					onClick: () => N("rect"),
					children: C("rectangle")
				}),
				/* @__PURE__ */ c("label", {
					className: "brush-size",
					children: [
						C("brushSize"),
						" ",
						I,
						/* @__PURE__ */ s("input", {
							type: "range",
							min: 1,
							max: 20,
							value: I,
							onChange: (e) => L(Number(e.target.value))
						})
					]
				}),
				/* @__PURE__ */ s("span", { className: "divider" }),
				/* @__PURE__ */ c(i, {
					onClick: J,
					disabled: R === 0,
					children: [
						C("undoCount"),
						" (",
						R,
						")"
					]
				}),
				/* @__PURE__ */ s(i, {
					onClick: re,
					disabled: !A,
					children: C("exportMap")
				}),
				/* @__PURE__ */ s("span", { className: "spacer" }),
				A && /* @__PURE__ */ c("span", {
					className: "map-meta",
					children: [
						A.name,
						" · ",
						A.width,
						"×",
						A.height
					]
				})
			]
		}), /* @__PURE__ */ c("div", {
			className: "map-canvas-wrap",
			children: [
				/* @__PURE__ */ s("canvas", {
					ref: w,
					onPointerDown: Q,
					onPointerMove: $,
					onPointerUp: ee,
					onContextMenu: (e) => e.preventDefault()
				}),
				!A && /* @__PURE__ */ s("div", {
					className: "map-empty",
					children: B ?? C("mapEmpty")
				}),
				A && B && /* @__PURE__ */ s("div", {
					className: "map-empty",
					children: B
				})
			]
		})]
	});
}
var w = {
	id: "map-editor",
	name: "地图编辑 (Map Editor)",
	pages: [{
		id: "main",
		legacyMode: "map",
		title: (e) => e.locale === "en" ? "Map Editor" : "地图编辑",
		component: C
	}]
};
export { C as MapEditorPage, w as default };
