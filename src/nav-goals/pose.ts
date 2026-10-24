import type { PluginContext, ViewportPoseInteraction } from "@robviz/core";

export const DEFAULT_NAV_TOPICS = {
  goalTopic: "/goal_pose",
  initialPoseTopic: "/initialpose",
} as const;

export type NavPluginState = {
  goalTopic: string;
  initialPoseTopic: string;
};

export function readNavPluginState(raw: unknown): NavPluginState {
  if (!raw || typeof raw !== "object") return { ...DEFAULT_NAV_TOPICS };
  const value = raw as Partial<NavPluginState>;
  return {
    goalTopic: typeof value.goalTopic === "string" && value.goalTopic.trim() ? value.goalTopic.trim() : DEFAULT_NAV_TOPICS.goalTopic,
    initialPoseTopic: typeof value.initialPoseTopic === "string" && value.initialPoseTopic.trim() ? value.initialPoseTopic.trim() : DEFAULT_NAV_TOPICS.initialPoseTopic,
  };
}

export function yawQuat(yaw: number): { x: number; y: number; z: number; w: number } {
  const half = yaw / 2;
  return { x: 0, y: 0, z: Math.sin(half), w: Math.cos(half) };
}

export function handleGoalPose(ctx: PluginContext, interaction: ViewportPoseInteraction): void {
  if (!ctx.active || ctx.connectionState !== "open") return;
  const now = Date.now() / 1000;
  const header = {
    stamp: { sec: Math.floor(now), nanosec: Math.round((now % 1) * 1e9) },
    frame_id: ctx.fixedFrame,
  };
  const pose = {
    position: interaction.position,
    orientation: yawQuat(interaction.yaw),
  };
  try {
    ctx.bridge.publish(readNavPluginState(ctx.pluginStates["nav-goals"]).goalTopic, "geometry_msgs/msg/PoseStamped", { header, pose });
  } catch (err) {
    console.error("[nav-goals] publish goal failed:", err);
  }
}

export function handleInitialPose(ctx: PluginContext, interaction: ViewportPoseInteraction): void {
  if (!ctx.active || ctx.connectionState !== "open") return;
  const now = Date.now() / 1000;
  const header = {
    stamp: { sec: Math.floor(now), nanosec: Math.round((now % 1) * 1e9) },
    frame_id: ctx.fixedFrame,
  };
  const pose = {
    position: interaction.position,
    orientation: yawQuat(interaction.yaw),
  };
  const covariance = new Array<number>(36).fill(0);
  covariance[0] = 0.25;
  covariance[7] = 0.25;
  covariance[35] = 0.068;
  try {
    ctx.bridge.publish(readNavPluginState(ctx.pluginStates["nav-goals"]).initialPoseTopic, "geometry_msgs/msg/PoseWithCovarianceStamped", {
      header,
      pose: { pose, covariance },
    });
  } catch (err) {
    console.error("[nav-goals] publish initialpose failed:", err);
  }
}
