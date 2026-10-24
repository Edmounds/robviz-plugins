import { createContext as e, createElement as t, forwardRef as n, useCallback as r, useContext as i, useEffect as a, useRef as o, useState as s } from "react";
import { Button as c, ImageViewer as l, Notice as u, Page as d, Select as f, Toolbar as p, useI18n as m, webRtcManager as h } from "@robviz/core";
import { jsx as g, jsxs as _ } from "react/jsx-runtime";
// node_modules/lucide-react/dist/esm/shared/src/utils/toKebabCase.mjs
var v = (e) => e?.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
// node_modules/lucide-react/dist/esm/shared/src/utils/toLucideIconData.mjs
function y(e, t, n = []) {
	if (t == null) throw Error("[lucide]: iconNode is required when icon name is used");
	return {
		name: v(e),
		size: 24,
		node: t,
		...n.length > 0 ? { aliases: n } : {}
	};
}
// node_modules/lucide-react/dist/esm/shared/src/utils/toCamelCase.mjs
var b = (e) => {
	let t = "", n = !1;
	for (let r of e) r === "-" || r === "_" || r <= " " ? n = t.length > 0 : (t.length === 0 ? t += r.toLowerCase() : t += n ? r.toUpperCase() : r, n = !1);
	return t;
}, x = (e) => {
	let t = b(e);
	return t.charAt(0).toUpperCase() + t.slice(1);
}, S = (...e) => e.filter((e, t, n) => !!e && e.trim() !== "" && n.indexOf(e) === t).join(" ").trim(), C = {
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
function w(e) {
	return e != null;
}
function T(e, t = {}) {
	let n = t.attributeNames ?? {}, r = (e) => n[e] ?? e, i = e.size ?? e.width ?? C.width, a = e.size ?? e.height ?? C.height, o = e.aliases?.filter((e) => typeof e == "string" && e.trim() !== "").map((e) => `lucide-${e}`) ?? [], s = [...e.name ? [`lucide-${e.name}`] : [], ...o], c = t.className?.split(" ").filter(Boolean) ?? [], l = t.includeDefaultClasses === !1 ? S(...c) : S("lucide", ...s, ...c), u = t.absoluteStrokeWidth ? Number(t.strokeWidth ?? C["stroke-width"]) * Number(e.size ?? e.width ?? C.width) / Number(t.size ?? t.width ?? C.width) : t.strokeWidth ?? C["stroke-width"];
	return [
		"svg",
		{
			...Object.entries(C).reduce((e, [t, n]) => (e[r(t)] = n, e), {}),
			..."color" in t && t.color && { [r("stroke")]: t.color },
			..."size" in t && w(t.size) && {
				[r("width")]: t.size,
				[r("height")]: t.size
			},
			..."width" in t && w(t.width) && { [r("width")]: t.width },
			..."height" in t && w(t.height) && { [r("height")]: t.height },
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
function E(e, t = {}) {
	return T(e, {
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
var D = (e) => {
	for (let t in e) if (t.startsWith("aria-") || t === "role" || t === "title") return !0;
	return !1;
}, O = e({}), k = () => i(O), A = n(({ color: e, size: n, width: r, height: i, strokeWidth: a, absoluteStrokeWidth: o, nonScalingStroke: s, className: c = "", children: l, iconNode: u = [], icon: d = {
	node: u,
	aliases: [],
	size: 24
}, ...f }, p) => {
	let { size: m = 24, strokeWidth: h = 2, absoluteStrokeWidth: g = !1, nonScalingStroke: _ = !1, color: v = "currentColor", className: y = "" } = k() ?? {}, b = !!l || D(f), [x, C, w = []] = E(d, {
		color: e ?? v,
		width: r ?? n ?? m,
		height: i ?? n ?? m,
		strokeWidth: a ?? h,
		absoluteStrokeWidth: o ?? g,
		nonScalingStroke: s ?? _,
		className: S(y, c),
		hasA11yProp: b,
		attributes: f
	});
	return t(x, {
		ref: p,
		...C
	}, [...w.map(([e, n]) => t(e, n)), ...Array.isArray(l) ? l : [l]]);
});
// node_modules/lucide-react/dist/esm/createLucideIcon.mjs
function j(e, r = [], i = []) {
	let a = typeof e == "string" ? y(e, r, i) : e, o = n(({ className: e, ...n }, r) => t(A, {
		ref: r,
		icon: a,
		className: e,
		...n
	}));
	return a.name && (o.displayName = x(a.name)), o;
}
// node_modules/lucide-react/dist/esm/icons/camera.mjs
var M = {
	name: "camera",
	size: 24,
	node: [["path", {
		d: "M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z",
		key: "18u6gg"
	}], ["circle", {
		cx: "12",
		cy: "13",
		r: "3",
		key: "1vg3eu"
	}]]
};
M.node;
var N = j(M), P = {
	name: "circle-alert",
	size: 24,
	node: [
		["circle", {
			cx: "12",
			cy: "12",
			r: "10",
			key: "1mglay"
		}],
		["line", {
			x1: "12",
			x2: "12",
			y1: "8",
			y2: "12",
			key: "1pkeuh"
		}],
		["line", {
			x1: "12",
			x2: "12.01",
			y1: "16",
			y2: "16",
			key: "4dfq90"
		}]
	],
	aliases: ["alert-circle"]
};
P.node;
var F = j(P), I = {
	name: "circle-check",
	size: 24,
	node: [["circle", {
		cx: "12",
		cy: "12",
		r: "10",
		key: "1mglay"
	}], ["path", {
		d: "m16 9-5.5 5.5L8 12",
		key: "xofnsj"
	}]],
	aliases: ["check-circle-2"]
};
I.node;
var L = j(I), R = {
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
R.node;
var z = j(R), B = class extends Error {
	unconfirmed = !0;
	constructor(e) {
		super(e), this.name = "CaptureUnconfirmedError";
	}
}, V = class {
	ws = null;
	wsUrl;
	callbacks;
	pendingRequests = /* @__PURE__ */ new Map();
	pollTimer = null;
	reconnectTimer = null;
	isDisposed = !1;
	requestCounter = 0;
	pendingTopicRequests = /* @__PURE__ */ new Map();
	constructor(e, t = {}) {
		this.wsUrl = e, this.callbacks = t;
	}
	connect() {
		if (!(this.isDisposed || this.ws)) {
			try {
				this.ws = new WebSocket(this.wsUrl);
			} catch (e) {
				this.callbacks.onError?.(e instanceof Error ? e.message : String(e)), this.scheduleReconnect();
				return;
			}
			this.ws.onopen = () => {
				this.isDisposed ? this.close() : (this.callbacks.onConnectionChange?.(!0), this.fetchInfo(), this.pollTimer = setInterval(() => {
					!this.isDisposed && this.ws?.readyState === WebSocket.OPEN && this.fetchInfo();
				}, 2e3));
			}, this.ws.onmessage = (e) => {
				if (!this.isDisposed) try {
					let t = JSON.parse(e.data);
					if (typeof t != "object" || !t) return;
					let n = t.type;
					if (n === "captureInfo") {
						let e = {
							topic: String(t.topic ?? ""),
							availableTopics: Array.isArray(t.availableTopics) ? t.availableTopics.filter((e) => typeof e == "string") : [],
							outputDir: String(t.outputDir ?? ""),
							totalCount: Number(t.totalCount ?? 0),
							lastFileName: t.lastFileName ? String(t.lastFileName) : null,
							hasFrame: !!t.hasFrame,
							frameAgeSec: t.frameAgeSec == null ? null : Number(t.frameAgeSec),
							width: Number(t.width ?? 0),
							height: Number(t.height ?? 0)
						};
						this.callbacks.onInfo?.(e);
					} else if (n === "captureTopicResult") {
						let e = String(t.requestId ?? ""), n = this.pendingTopicRequests.get(e);
						if (!n) return;
						clearTimeout(n.timer), this.pendingTopicRequests.delete(e), t.success === !0 ? n.resolve() : n.reject(Error(String(t.error ?? "Capture topic rejected")));
					} else if (n === "captureResult") {
						let e = String(t.requestId ?? ""), n = this.pendingRequests.get(e);
						if (n) {
							clearTimeout(n.timer), this.pendingRequests.delete(e);
							let r = {
								requestId: e,
								success: !!t.success,
								filePath: t.filePath ? String(t.filePath) : void 0,
								fileName: t.fileName ? String(t.fileName) : void 0,
								totalCount: t.totalCount == null ? void 0 : Number(t.totalCount),
								width: t.width == null ? void 0 : Number(t.width),
								height: t.height == null ? void 0 : Number(t.height),
								stampSec: t.stampSec == null ? void 0 : Number(t.stampSec),
								stampNsec: t.stampNsec == null ? void 0 : Number(t.stampNsec),
								error: t.error ? String(t.error) : void 0
							};
							n.resolve(r);
						}
					}
				} catch {}
			}, this.ws.onerror = () => {
				this.callbacks.onError?.("WebSocket connection error");
			}, this.ws.onclose = () => {
				this.cleanupWs(), this.callbacks.onConnectionChange?.(!1), this.scheduleReconnect();
			};
		}
	}
	scheduleReconnect() {
		this.isDisposed || this.reconnectTimer || (this.reconnectTimer = setTimeout(() => {
			this.reconnectTimer = null, this.connect();
		}, 1e3));
	}
	fetchInfo() {
		if (this.ws?.readyState !== WebSocket.OPEN) return;
		let e = `info_${Date.now()}_${++this.requestCounter}`;
		this.ws.send(JSON.stringify({
			type: "getCaptureInfo",
			requestId: e
		}));
	}
	setCaptureTopic(e) {
		if (!this.ws || this.ws.readyState !== WebSocket.OPEN) return Promise.reject(/* @__PURE__ */ Error("Video gateway not connected"));
		let t = `topic_${Date.now()}_${++this.requestCounter}`;
		return new Promise((n, r) => {
			let i = setTimeout(() => {
				this.pendingTopicRequests.delete(t), r(/* @__PURE__ */ Error("Capture topic request timed out"));
			}, 5e3);
			this.pendingTopicRequests.set(t, {
				resolve: n,
				reject: r,
				timer: i
			});
			try {
				this.ws.send(JSON.stringify({
					type: "setCaptureTopic",
					requestId: t,
					topic: e
				}));
			} catch (e) {
				clearTimeout(i), this.pendingTopicRequests.delete(t), r(e instanceof Error ? e : Error(String(e)));
			}
		});
	}
	captureFrame() {
		if (!this.ws || this.ws.readyState !== WebSocket.OPEN) return Promise.reject(/* @__PURE__ */ Error("Video gateway not connected"));
		let e = `cap_${Date.now()}_${++this.requestCounter}`;
		return new Promise((t, n) => {
			let r = setTimeout(() => {
				this.pendingRequests.delete(e), n(new B("Capture request timed out (10s)"));
			}, 1e4);
			this.pendingRequests.set(e, {
				resolve: t,
				reject: n,
				timer: r,
				sent: !1
			});
			try {
				this.ws.send(JSON.stringify({
					type: "captureFrame",
					requestId: e
				}));
				let t = this.pendingRequests.get(e);
				t && (t.sent = !0);
			} catch (t) {
				clearTimeout(r), this.pendingRequests.delete(e), n(t instanceof Error ? t : Error(String(t)));
			}
		});
	}
	cleanupWs() {
		this.pollTimer &&= (clearInterval(this.pollTimer), null);
		for (let [, e] of this.pendingRequests) clearTimeout(e.timer), e.sent ? e.reject(new B("Connection closed before response")) : e.reject(/* @__PURE__ */ Error("Connection closed before request sent"));
		this.pendingRequests.clear();
		for (let [, e] of this.pendingTopicRequests) clearTimeout(e.timer), e.reject(/* @__PURE__ */ Error("Connection closed before capture topic response"));
		this.pendingTopicRequests.clear(), this.ws = null;
	}
	close() {
		if (this.isDisposed = !0, this.reconnectTimer &&= (clearTimeout(this.reconnectTimer), null), this.ws) {
			if (this.ws.readyState === WebSocket.OPEN) try {
				this.ws.send(JSON.stringify({ type: "unwatchCapture" }));
			} catch {}
			this.ws.close();
		}
		this.cleanupWs();
	}
};
// src/image-capture/ImageCapturePage.tsx
function H({ ctx: e, bridgeUrl: t, mediaUrl: n }) {
	let { t: i } = m(), v = e.bridge, y = e.topics, b = e.active, x = e.connectionState, S = t ?? e.bridge?.url ?? "ws://localhost:8765", C = n ?? e.getServiceUrl("video"), [w, T] = s(null), [E, D] = s(!1), [O, k] = s(!1), [A, j] = s(!1), [M, P] = s(null), [I, R] = s(null), [H, U] = s(null), W = o(null), G = h.deriveMediaUrl(S || "ws://localhost:8765", C);
	a(() => {
		if (T(null), D(!1), k(!1), j(!1), P(null), R(null), U(null), !b || x !== "open") {
			W.current &&= (W.current.close(), null);
			return;
		}
		let e = new V(G, {
			onInfo: (t) => {
				W.current === e && T(t);
			},
			onConnectionChange: (t) => {
				W.current === e && (D(t), t && R(null));
			},
			onError: (t) => {
				W.current === e && R(t);
			}
		});
		return W.current = e, e.connect(), () => {
			e.close(), W.current === e && (W.current = null);
		};
	}, [
		b,
		x,
		G
	]);
	let K = r(async () => {
		let e = W.current;
		if (e && !O && E && w?.hasFrame && b && x === "open") {
			k(!0), P(null), R(null), U(null);
			try {
				let t = await e.captureFrame();
				if (W.current !== e) return;
				t.success ? (P(t.fileName ?? "image.png"), T((e) => e ? {
					...e,
					totalCount: t.totalCount ?? e.totalCount + 1,
					lastFileName: t.fileName ?? e.lastFileName
				} : null)) : R(t.error ?? "Save failed");
			} catch (t) {
				if (W.current !== e) return;
				t instanceof B || typeof t == "object" && t && "unconfirmed" in t ? U(t instanceof Error ? t.message : String(t)) : R(t instanceof Error ? t.message : String(t));
			} finally {
				W.current === e && k(!1);
			}
		}
	}, [
		b,
		w?.hasFrame,
		x,
		E,
		O
	]), q = r(async (e) => {
		let t = W.current;
		if (t && e !== w?.topic) {
			j(!0), R(null);
			try {
				await t.setCaptureTopic(e), t.fetchInfo();
			} catch (e) {
				R(e instanceof Error ? e.message : String(e));
			} finally {
				j(!1);
			}
		}
	}, [w?.topic]);
	a(() => {
		if (!b) return;
		let e = (e) => {
			if (e.code !== "Space" && e.key !== " " || e.repeat || e.altKey || e.ctrlKey || e.metaKey || e.shiftKey) return;
			let t = e.target;
			if (t) {
				let e = t.tagName.toLowerCase();
				if (e === "input" || e === "textarea" || e === "select" || e === "button" || t.isContentEditable || t.closest(".terminal-drawer")) return;
			}
			e.preventDefault(), K();
		};
		return window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e);
	}, [b, K]);
	let J = w?.topic || "/camera/color/image_raw", Y = Array.from(new Set(w?.availableTopics ?? [])), X = !O && !A && E && !!w?.hasFrame;
	return /* @__PURE__ */ _(d, {
		className: "capture-page",
		children: [
			/* @__PURE__ */ _(p, { children: [
				/* @__PURE__ */ _(c, {
					type: "button",
					variant: "primary",
					disabled: !X,
					onClick: () => void K(),
					title: i("captureSavePng"),
					children: [/* @__PURE__ */ g(N, {}), /* @__PURE__ */ g("span", { children: i(O ? "captureSaving" : "captureSavePng") })]
				}),
				/* @__PURE__ */ _("label", {
					className: "capture-topic-select",
					children: [/* @__PURE__ */ _("strong", { children: [i("captureSource"), ":"] }), /* @__PURE__ */ _(f, {
						value: J,
						disabled: !E || A,
						onChange: (e) => void q(e.target.value),
						children: [!Y.includes(J) && /* @__PURE__ */ _("option", {
							value: J,
							disabled: !0,
							children: [
								J,
								" · ",
								i("webrtcUnavailable")
							]
						}), Y.map((e) => /* @__PURE__ */ g("option", {
							value: e,
							children: e
						}, e))]
					})]
				}),
				/* @__PURE__ */ _("div", {
					className: "capture-meta-group",
					children: [
						/* @__PURE__ */ _("span", {
							className: "capture-stat-item",
							children: [
								/* @__PURE__ */ _("strong", { children: [i("captureCount"), ":"] }),
								" ",
								w?.totalCount ?? 0
							]
						}),
						/* @__PURE__ */ _("span", {
							className: "capture-stat-item",
							children: [
								/* @__PURE__ */ _("strong", { children: [i("captureResolution"), ":"] }),
								" ",
								w?.width && w?.height ? `${w.width}×${w.height}` : "-"
							]
						}),
						/* @__PURE__ */ _("span", {
							className: "capture-stat-item capture-dir-item",
							title: w?.outputDir ?? "",
							children: [
								/* @__PURE__ */ _("strong", { children: [i("captureDir"), ":"] }),
								" ",
								/* @__PURE__ */ g("code", { children: w?.outputDir || "-" })
							]
						}),
						w?.lastFileName && /* @__PURE__ */ _("span", {
							className: "capture-stat-item",
							title: w.lastFileName,
							children: [
								/* @__PURE__ */ _("strong", { children: [i("captureLastFile"), ":"] }),
								" ",
								w.lastFileName
							]
						})
					]
				}),
				/* @__PURE__ */ _("div", {
					className: "capture-feedback-area",
					"aria-live": "polite",
					children: [
						O && /* @__PURE__ */ g("span", {
							className: "feedback-saving",
							children: i("captureSaving")
						}),
						!O && M && /* @__PURE__ */ _("span", {
							className: "feedback-success",
							children: [/* @__PURE__ */ g(L, {}), /* @__PURE__ */ g("span", { children: i("captureSuccess", {
								file: M,
								width: w?.width ?? 0,
								height: w?.height ?? 0
							}) })]
						}),
						!O && H && /* @__PURE__ */ _("span", {
							className: "feedback-warning",
							role: "alert",
							children: [/* @__PURE__ */ g(z, {}), /* @__PURE__ */ g("span", { children: i("captureUnconfirmed", { error: H }) })]
						}),
						!O && I && /* @__PURE__ */ _("span", {
							className: "feedback-error",
							role: "alert",
							children: [/* @__PURE__ */ g(F, {}), /* @__PURE__ */ g("span", { children: i("captureError", { error: I }) })]
						})
					]
				})
			] }),
			E && w && !w.hasFrame && /* @__PURE__ */ _(u, {
				tone: "warning",
				children: [/* @__PURE__ */ g(z, {}), /* @__PURE__ */ g("span", { children: i("captureCameraOffline") })]
			}),
			/* @__PURE__ */ g("div", {
				className: "capture-viewport-container",
				children: /* @__PURE__ */ g(l, {
					bridge: v,
					topics: y,
					fixedTopic: J,
					active: b,
					mediaUrl: C,
					embedded: !0,
					onClose: () => {}
				})
			})
		]
	});
}
// src/image-capture/index.tsx
var U = {
	id: "image-capture",
	name: "图像采集 (Image Capture)",
	pages: [{
		id: "main",
		legacyMode: "capture",
		title: (e) => e.locale === "en" ? "Image Capture" : "图像采集",
		component: H
	}],
	services: [{
		id: "video",
		label: "WebRTC 视频网关",
		defaultPort: 8787,
		protocol: "ws",
		description: "实时视频流 (H.264) 与相机数据流"
	}]
};
export { U as default };
