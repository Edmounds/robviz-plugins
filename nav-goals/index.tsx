/**
 * 随包插件：导航目标与初始位姿 (Nav Goals)。
 * 提供 3D 视口导航点选交互（Navigation Goal 与 Initial Pose），话题支持自定义配置。
 */
import { useEffect, useState } from "react";
import { Field, TextInput, type PluginSectionProps, type RobvizPlugin } from "@robviz/core";
import {
  DEFAULT_NAV_TOPICS,
  handleGoalPose,
  handleInitialPose,
  readNavPluginState,
} from "./pose";

function NavConfigSection({ ctx }: PluginSectionProps) {
  const isEn = ctx.locale === "en";
  const stored = readNavPluginState(ctx.pluginStates["nav-goals"]);
  const [goalTopic, setGoalTopic] = useState(stored.goalTopic);
  const [initialPoseTopic, setInitialPoseTopic] = useState(stored.initialPoseTopic);

  useEffect(() => setGoalTopic(stored.goalTopic), [stored.goalTopic]);
  useEffect(() => setInitialPoseTopic(stored.initialPoseTopic), [stored.initialPoseTopic]);

  const updateGoal = (val: string) => {
    setGoalTopic(val);
    if (!val.trim()) return;
    const next = { ...readNavPluginState(ctx.pluginStates["nav-goals"]), goalTopic: val.trim() || DEFAULT_NAV_TOPICS.goalTopic };
    ctx.onPluginStateChange("nav-goals", next);
  };

  const updateInitialPose = (val: string) => {
    setInitialPoseTopic(val);
    if (!val.trim()) return;
    const next = { ...readNavPluginState(ctx.pluginStates["nav-goals"]), initialPoseTopic: val.trim() || DEFAULT_NAV_TOPICS.initialPoseTopic };
    ctx.onPluginStateChange("nav-goals", next);
  };

  return (
    <>
      <Field label={isEn ? "Goal Topic" : "目标话题"}>
        <TextInput
          className="topic-input"
          aria-label={isEn ? "Goal Topic" : "目标话题"}
          value={goalTopic}
          onChange={(e) => updateGoal(e.target.value)}
          spellCheck={false}
          required
        />
      </Field>
      <Field label={isEn ? "Initial Pose Topic" : "初始位姿话题"}>
        <TextInput
          className="topic-input"
          aria-label={isEn ? "Initial Pose Topic" : "初始位姿话题"}
          value={initialPoseTopic}
          onChange={(e) => updateInitialPose(e.target.value)}
          spellCheck={false}
          required
        />
      </Field>
    </>
  );
}

const plugin: RobvizPlugin = {
  id: "nav-goals",
  name: "导航位姿工具 (Nav Goals)",
  sections: [
    {
      id: "config",
      title: "导航话题设置",
      component: NavConfigSection,
    },
  ],
  viewportTools: [
    {
      id: "goal",
      title: (ctx) => (ctx.locale === "en" ? "Navigation Goal" : "导航目标"),
      hint: (ctx) =>
        ctx.locale === "en"
          ? "Click to set position, drag to set heading"
          : "点击确定位置，拖拽确定航向",
      onPoseSelect: handleGoalPose,
    },
    {
      id: "initialpose",
      title: (ctx) => (ctx.locale === "en" ? "Initial Pose" : "初始位姿"),
      hint: (ctx) =>
        ctx.locale === "en"
          ? "Click to set position, drag to set heading"
          : "点击确定位置，拖拽确定航向",
      onPoseSelect: handleInitialPose,
    },
  ],
};

export default plugin;
