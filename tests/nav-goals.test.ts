import assert from "node:assert/strict";
import { describe, it } from "node:test";
import type { PluginContext } from "@robviz/core";
import {
  handleGoalPose,
  handleInitialPose,
  readNavPluginState,
} from "../src/nav-goals/pose.ts";

function createMockContext(overrides: Partial<PluginContext> = {}) {
  const published: Array<{ topic: string; schema: string; message: unknown }> = [];
  const ctx = {
    active: true,
    connectionState: "open",
    fixedFrame: "map",
    pluginStates: { "nav-goals": { goalTopic: "/navigate", initialPoseTopic: "/localize" } },
    bridge: {
      publish: (topic: string, schema: string, message: unknown) => {
        published.push({ topic, schema, message });
      },
    },
    ...overrides,
  } as unknown as PluginContext;
  return { ctx, published };
}

describe("Nav Goals plugin pose publishing", () => {
  it("publishes selected goal coordinates, yaw, fixed frame, and configured topic", () => {
    const { ctx, published } = createMockContext();
    handleGoalPose(ctx, { position: { x: 1, y: 2, z: 0 }, yaw: Math.PI });
    assert.equal(published.length, 1);
    assert.equal(published[0].topic, "/navigate");
    assert.equal(published[0].schema, "geometry_msgs/msg/PoseStamped");
    const msg = published[0].message as { header: { frame_id: string }; pose: { position: { x: number; y: number }; orientation: { z: number } } };
    assert.equal(msg.header.frame_id, "map");
    assert.equal(msg.pose.position.x, 1);
    assert.equal(msg.pose.position.y, 2);
    assert.ok(Math.abs(msg.pose.orientation.z - 1) < 1e-4);
  });

  it("publishes initial-pose covariance to its configured topic", () => {
    const { ctx, published } = createMockContext();
    handleInitialPose(ctx, { position: { x: 3, y: 4, z: 0 }, yaw: 0 });
    assert.equal(published.length, 1);
    assert.equal(published[0].topic, "/localize");
    assert.equal(published[0].schema, "geometry_msgs/msg/PoseWithCovarianceStamped");
    const msg = published[0].message as { pose: { covariance: number[] } };
    assert.equal(msg.pose.covariance[0], 0.25);
    assert.equal(msg.pose.covariance[7], 0.25);
    assert.equal(msg.pose.covariance[35], 0.068);
  });

  it("does not publish while inactive or disconnected and validates imported settings", () => {
    const inactive = createMockContext({ active: false });
    handleGoalPose(inactive.ctx, { position: { x: 0, y: 0, z: 0 }, yaw: 0 });
    assert.equal(inactive.published.length, 0);

    const disconnected = createMockContext({ connectionState: "closed" });
    handleInitialPose(disconnected.ctx, { position: { x: 0, y: 0, z: 0 }, yaw: 0 });
    assert.equal(disconnected.published.length, 0);

    assert.deepEqual(readNavPluginState({ goalTopic: "  /custom  ", initialPoseTopic: 7 }), {
      goalTopic: "/custom",
      initialPoseTopic: "/initialpose",
    });
  });
});
