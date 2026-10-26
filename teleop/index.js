import { useCallback as e, useEffect as t, useRef as n, useState as r } from "react";
import { ActionRow as i, Button as a, TextInput as o, validateInputs as s } from "@robviz/core";
import { Fragment as c, jsx as l, jsxs as u } from "react/jsx-runtime";
// teleop/state.ts
var d = {
	topic: "/cmd_vel",
	maxLin: .5,
	maxAng: 1
};
function f(e, t) {
	return e && t === "open";
}
function p(e) {
	if (!e || typeof e != "object") return { ...d };
	let t = e;
	return {
		topic: typeof t.topic == "string" && t.topic.trim() ? t.topic.trim() : d.topic,
		maxLin: typeof t.maxLin == "number" && Number.isFinite(t.maxLin) && t.maxLin >= .1 && t.maxLin <= 2 ? t.maxLin : d.maxLin,
		maxAng: typeof t.maxAng == "number" && Number.isFinite(t.maxAng) && t.maxAng >= .2 && t.maxAng <= 3 ? t.maxAng : d.maxAng
	};
}
// teleop/index.tsx
function m({ ctx: d }) {
	let { bridge: m, active: h, connectionState: g, locale: _ } = d, v = _ === "en", y = p(d.pluginStates.teleop), [b, x] = r(!1), [S, C] = r(y.topic), [w, T] = r(y.maxLin), [E, D] = r(y.maxAng), [O, k] = r({
		lin: 0,
		ang: 0
	}), A = n(null), j = S.trim() || y.topic, M = n({
		lin: 0,
		ang: 0
	}), N = n(/* @__PURE__ */ new Set()), P = n(h), F = n(g);
	P.current = h, F.current = g, t(() => C(y.topic), [y.topic]), t(() => T(y.maxLin), [y.maxLin]), t(() => D(y.maxAng), [y.maxAng]);
	let I = e((e) => {
		d.onPluginStateChange("teleop", {
			...p(d.pluginStates.teleop),
			...e
		});
	}, [d]), L = e(() => {
		N.current.clear(), M.current = {
			lin: 0,
			ang: 0
		}, k({
			lin: 0,
			ang: 0
		});
	}, []);
	t(() => {
		f(h, g) || b && (x(!1), L());
	}, [
		h,
		g,
		b,
		L
	]);
	let R = e(() => {
		let e = N.current, t = 0, n = 0;
		(e.has("w") || e.has("arrowup")) && (t += 1), (e.has("s") || e.has("arrowdown")) && --t, (e.has("a") || e.has("arrowleft")) && (n += 1), (e.has("d") || e.has("arrowright")) && --n, M.current = {
			lin: t,
			ang: n
		}, k({
			lin: t,
			ang: n
		});
	}, []), z = e(() => {
		if (!b) {
			if (!s(A.current) || !f(h, g)) return;
			x(!0);
		} else if (x(!1), L(), f(h, g)) try {
			m.publish(j, "geometry_msgs/msg/Twist", {
				linear: {
					x: 0,
					y: 0,
					z: 0
				},
				angular: {
					x: 0,
					y: 0,
					z: 0
				}
			});
		} catch {}
	}, [
		b,
		g,
		h,
		L,
		m,
		j
	]);
	t(() => {
		if (!b || !f(h, g)) {
			L();
			return;
		}
		let e = (e) => {
			if (!f(P.current, F.current)) return;
			let t = e.target.tagName;
			if (t === "INPUT" || t === "TEXTAREA" || t === "SELECT") return;
			let n = e.key.toLowerCase();
			[
				"w",
				"a",
				"s",
				"d",
				"arrowup",
				"arrowdown",
				"arrowleft",
				"arrowright"
			].includes(n) && (e.preventDefault(), N.current.add(n), R());
		}, t = (e) => {
			f(P.current, F.current) && (N.current.delete(e.key.toLowerCase()), R());
		}, n = () => {
			L();
		};
		window.addEventListener("keydown", e), window.addEventListener("keyup", t), window.addEventListener("blur", n);
		let r = setInterval(() => {
			if (!f(P.current, F.current)) return;
			let { lin: e, ang: t } = M.current;
			try {
				m.publish(j, "geometry_msgs/msg/Twist", {
					linear: {
						x: e * w,
						y: 0,
						z: 0
					},
					angular: {
						x: 0,
						y: 0,
						z: t * E
					}
				});
			} catch {}
		}, 100);
		return () => {
			window.removeEventListener("keydown", e), window.removeEventListener("keyup", t), window.removeEventListener("blur", n), clearInterval(r);
		};
	}, [
		b,
		h,
		g,
		j,
		w,
		E,
		m,
		R,
		L
	]);
	let B = (e, t) => ({
		onPointerDown: () => {
			b && P.current && F.current === "open" && (M.current = {
				lin: e,
				ang: t
			}, k({
				lin: e,
				ang: t
			}));
		},
		onPointerUp: () => {
			M.current = {
				lin: 0,
				ang: 0
			}, k({
				lin: 0,
				ang: 0
			});
		},
		onPointerLeave: () => {
			M.current = {
				lin: 0,
				ang: 0
			}, k({
				lin: 0,
				ang: 0
			});
		},
		onPointerCancel: () => {
			M.current = {
				lin: 0,
				ang: 0
			}, k({
				lin: 0,
				ang: 0
			});
		}
	});
	return /* @__PURE__ */ u("div", {
		className: "teleop",
		children: [/* @__PURE__ */ u(i, {
			ref: A,
			children: [/* @__PURE__ */ l(o, {
				className: "teleop-topic",
				"aria-label": v ? "Command topic" : "控制话题",
				value: S,
				onChange: (e) => {
					let t = e.target.value;
					C(t), t.trim() && I({ topic: t });
				},
				spellCheck: !1,
				required: !0
			}), /* @__PURE__ */ l(a, {
				selected: b,
				disabled: g !== "open",
				onClick: z,
				children: b ? v ? "Enabled" : "已启用" : v ? "Enable" : "启用"
			})]
		}), b && /* @__PURE__ */ u(c, { children: [
			/* @__PURE__ */ u("div", {
				className: "teleop-pad",
				children: [
					/* @__PURE__ */ l("span", {}),
					/* @__PURE__ */ l(a, {
						selected: O.lin > 0,
						...B(1, 0),
						"aria-label": v ? "Forward" : "前进",
						children: "▲"
					}),
					/* @__PURE__ */ l("span", {}),
					/* @__PURE__ */ l(a, {
						selected: O.ang > 0,
						...B(0, 1),
						"aria-label": v ? "Turn left" : "左转",
						children: "◀"
					}),
					/* @__PURE__ */ l(a, {
						selected: O.lin < 0,
						...B(-1, 0),
						"aria-label": v ? "Backward" : "后退",
						children: "▼"
					}),
					/* @__PURE__ */ l(a, {
						selected: O.ang < 0,
						...B(0, -1),
						"aria-label": v ? "Turn right" : "右转",
						children: "▶"
					})
				]
			}),
			/* @__PURE__ */ u(i, { children: [
				/* @__PURE__ */ l("span", { children: v ? "Linear speed" : "线速" }),
				/* @__PURE__ */ l("input", {
					type: "range",
					"aria-label": v ? "Linear speed" : "线速",
					min: .1,
					max: 2,
					step: .1,
					value: w,
					onChange: (e) => {
						let t = Number(e.target.value);
						T(t), I({ maxLin: t });
					}
				}),
				/* @__PURE__ */ u("span", {
					className: "teleop-value",
					children: [w.toFixed(1), " m/s"]
				})
			] }),
			/* @__PURE__ */ u(i, { children: [
				/* @__PURE__ */ l("span", { children: v ? "Angular speed" : "角速" }),
				/* @__PURE__ */ l("input", {
					type: "range",
					"aria-label": v ? "Angular speed" : "角速",
					min: .2,
					max: 3,
					step: .2,
					value: E,
					onChange: (e) => {
						let t = Number(e.target.value);
						D(t), I({ maxAng: t });
					}
				}),
				/* @__PURE__ */ u("span", {
					className: "teleop-value",
					children: [E.toFixed(1), " rad/s"]
				})
			] }),
			/* @__PURE__ */ l("div", {
				className: "teleop-hint",
				children: v ? "WASD / arrow keys, or hold a direction button" : "WASD / 方向键，或按住方向按钮"
			})
		] })]
	});
}
var h = {
	id: "teleop",
	name: "遥控 (Teleop)",
	sections: [{
		id: "teleop",
		title: "遥控 Teleop",
		component: m
	}]
};
export { m as TeleopSection, h as default };
