import { useEffect as e, useState as t } from "react";
import { Select as n } from "@robviz/core";
import { Fragment as r, jsx as i, jsxs as a } from "react/jsx-runtime";
// example-odom-hud/index.tsx
function o({ ctx: o }) {
	let [s, c] = t("/odom"), [l, u] = t(), d = o.topics.filter((e) => e.schemaName === "nav_msgs/msg/Odometry");
	return e(() => {
		if (s && o.bridge) return u(void 0), o.bridge.subscribe(s, (e) => {
			if (e.kind !== "raw") return;
			let t = e.message;
			u({
				linear: Math.hypot(t.twist.twist.linear.x, t.twist.twist.linear.y),
				angular: t.twist.twist.angular.z
			});
		});
	}, [o.bridge, s]), /* @__PURE__ */ a(r, { children: [/* @__PURE__ */ i(n, {
		"aria-label": o.locale === "en" ? "Odometry topic" : "里程计话题",
		value: s,
		onChange: (e) => c(e.target.value),
		children: (d.length ? d.map((e) => e.topic) : [s]).map((e) => /* @__PURE__ */ i("option", { children: e }, e))
	}), /* @__PURE__ */ i("span", { children: l ? `${l.linear.toFixed(2)} m/s · ${(l.angular * 180 / Math.PI).toFixed(0)} °/s` : "Waiting for messages..." })] });
}
var s = {
	id: "example-odom-hud",
	name: "速度 HUD",
	sections: [{
		id: "hud",
		title: "速度 HUD（示例插件）",
		component: o
	}]
};
export { s as default };
