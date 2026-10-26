import { useEffect as e, useState as t } from "react";
import { Field as n, TextInput as r } from "@robviz/core";
import { Fragment as i, jsx as a, jsxs as o } from "react/jsx-runtime";
// nav-goals/pose.ts
var s = {
	goalTopic: "/goal_pose",
	initialPoseTopic: "/initialpose"
};
function c(e) {
	if (!e || typeof e != "object") return { ...s };
	let t = e;
	return {
		goalTopic: typeof t.goalTopic == "string" && t.goalTopic.trim() ? t.goalTopic.trim() : s.goalTopic,
		initialPoseTopic: typeof t.initialPoseTopic == "string" && t.initialPoseTopic.trim() ? t.initialPoseTopic.trim() : s.initialPoseTopic
	};
}
function l(e) {
	let t = e / 2;
	return {
		x: 0,
		y: 0,
		z: Math.sin(t),
		w: Math.cos(t)
	};
}
function u(e, t) {
	if (!e.active || e.connectionState !== "open") return;
	let n = Date.now() / 1e3, r = {
		stamp: {
			sec: Math.floor(n),
			nanosec: Math.round(n % 1 * 1e9)
		},
		frame_id: e.fixedFrame
	}, i = {
		position: t.position,
		orientation: l(t.yaw)
	};
	try {
		e.bridge.publish(c(e.pluginStates["nav-goals"]).goalTopic, "geometry_msgs/msg/PoseStamped", {
			header: r,
			pose: i
		});
	} catch (e) {
		console.error("[nav-goals] publish goal failed:", e);
	}
}
function d(e, t) {
	if (!e.active || e.connectionState !== "open") return;
	let n = Date.now() / 1e3, r = {
		stamp: {
			sec: Math.floor(n),
			nanosec: Math.round(n % 1 * 1e9)
		},
		frame_id: e.fixedFrame
	}, i = {
		position: t.position,
		orientation: l(t.yaw)
	}, a = Array(36).fill(0);
	a[0] = .25, a[7] = .25, a[35] = .068;
	try {
		e.bridge.publish(c(e.pluginStates["nav-goals"]).initialPoseTopic, "geometry_msgs/msg/PoseWithCovarianceStamped", {
			header: r,
			pose: {
				pose: i,
				covariance: a
			}
		});
	} catch (e) {
		console.error("[nav-goals] publish initialpose failed:", e);
	}
}
// nav-goals/index.tsx
function f({ ctx: l }) {
	let u = l.locale === "en", d = c(l.pluginStates["nav-goals"]), [f, p] = t(d.goalTopic), [m, h] = t(d.initialPoseTopic);
	e(() => p(d.goalTopic), [d.goalTopic]), e(() => h(d.initialPoseTopic), [d.initialPoseTopic]);
	let g = (e) => {
		if (p(e), !e.trim()) return;
		let t = {
			...c(l.pluginStates["nav-goals"]),
			goalTopic: e.trim() || s.goalTopic
		};
		l.onPluginStateChange("nav-goals", t);
	}, _ = (e) => {
		if (h(e), !e.trim()) return;
		let t = {
			...c(l.pluginStates["nav-goals"]),
			initialPoseTopic: e.trim() || s.initialPoseTopic
		};
		l.onPluginStateChange("nav-goals", t);
	};
	return /* @__PURE__ */ o(i, { children: [/* @__PURE__ */ a(n, {
		label: u ? "Goal Topic" : "目标话题",
		children: /* @__PURE__ */ a(r, {
			className: "topic-input",
			"aria-label": u ? "Goal Topic" : "目标话题",
			value: f,
			onChange: (e) => g(e.target.value),
			spellCheck: !1,
			required: !0
		})
	}), /* @__PURE__ */ a(n, {
		label: u ? "Initial Pose Topic" : "初始位姿话题",
		children: /* @__PURE__ */ a(r, {
			className: "topic-input",
			"aria-label": u ? "Initial Pose Topic" : "初始位姿话题",
			value: m,
			onChange: (e) => _(e.target.value),
			spellCheck: !1,
			required: !0
		})
	})] });
}
var p = {
	id: "nav-goals",
	name: "导航位姿工具 (Nav Goals)",
	sections: [{
		id: "config",
		title: "导航话题设置",
		component: f
	}],
	viewportTools: [{
		id: "goal",
		title: (e) => e.locale === "en" ? "Navigation Goal" : "导航目标",
		hint: (e) => e.locale === "en" ? "Click to set position, drag to set heading" : "点击确定位置，拖拽确定航向",
		onPoseSelect: u
	}, {
		id: "initialpose",
		title: (e) => e.locale === "en" ? "Initial Pose" : "初始位姿",
		hint: (e) => e.locale === "en" ? "Click to set position, drag to set heading" : "点击确定位置，拖拽确定航向",
		onPoseSelect: d
	}]
};
export { p as default };
