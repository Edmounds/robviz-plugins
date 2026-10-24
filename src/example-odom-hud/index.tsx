import { useEffect, useState } from "react";
import { Select, type PluginSectionProps, type RobvizPlugin } from "@robviz/core";

function OdomHud({ ctx }: PluginSectionProps) {
  const [topic, setTopic] = useState("/odom");
  const [speed, setSpeed] = useState<{ linear: number; angular: number }>();
  const topics = ctx.topics.filter((value) => value.schemaName === "nav_msgs/msg/Odometry");
  useEffect(() => {
    if (!topic || !ctx.bridge) return;
    setSpeed(undefined);
    return ctx.bridge.subscribe(topic, (payload) => {
      if (payload.kind !== "raw") return;
      const odom = payload.message as { twist: { twist: { linear: { x: number; y: number }; angular: { z: number } } } };
      setSpeed({ linear: Math.hypot(odom.twist.twist.linear.x, odom.twist.twist.linear.y), angular: odom.twist.twist.angular.z });
    });
  }, [ctx.bridge, topic]);
  return <>
    <Select aria-label={ctx.locale === "en" ? "Odometry topic" : "里程计话题"} value={topic} onChange={(event) => setTopic(event.target.value)}>
      {(topics.length ? topics.map((value) => value.topic) : [topic]).map((value) => <option key={value}>{value}</option>)}
    </Select>
    <span>{speed ? `${speed.linear.toFixed(2)} m/s · ${(speed.angular * 180 / Math.PI).toFixed(0)} °/s` : "Waiting for messages..."}</span>
  </>;
}
export default { id: "example-odom-hud", name: "速度 HUD", sections: [{ id: "hud", title: "速度 HUD（示例插件）", component: OdomHud }] } satisfies RobvizPlugin;
