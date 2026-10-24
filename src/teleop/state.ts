import type { PluginContext } from "@robviz/core";

export type TeleopPluginState = { topic: string; maxLin: number; maxAng: number };
const DEFAULT_TELEOP_STATE: TeleopPluginState = { topic: "/cmd_vel", maxLin: 0.5, maxAng: 1 };

export function canTeleopWrite(active: boolean, connectionState: PluginContext["connectionState"]): boolean {
  return active && connectionState === "open";
}

export function readTeleopState(raw: unknown): TeleopPluginState {
  if (!raw || typeof raw !== "object") return { ...DEFAULT_TELEOP_STATE };
  const value = raw as Partial<TeleopPluginState>;
  return {
    topic: typeof value.topic === "string" && value.topic.trim() ? value.topic.trim() : DEFAULT_TELEOP_STATE.topic,
    maxLin: typeof value.maxLin === "number" && Number.isFinite(value.maxLin) && value.maxLin >= 0.1 && value.maxLin <= 2 ? value.maxLin : DEFAULT_TELEOP_STATE.maxLin,
    maxAng: typeof value.maxAng === "number" && Number.isFinite(value.maxAng) && value.maxAng >= 0.2 && value.maxAng <= 3 ? value.maxAng : DEFAULT_TELEOP_STATE.maxAng,
  };
}
