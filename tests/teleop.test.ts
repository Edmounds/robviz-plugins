import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { canTeleopWrite, readTeleopState } from "../src/teleop/state.ts";

describe("Teleop plugin state", () => {
  it("permits control only for the active connected session", () => {
    assert.equal(canTeleopWrite(true, "open"), true);
    assert.equal(canTeleopWrite(false, "open"), false);
    assert.equal(canTeleopWrite(true, "connecting"), false);
    assert.equal(canTeleopWrite(true, "closed"), false);
  });

  it("validates imported topic and speed settings", () => {
    assert.deepEqual(readTeleopState({ topic: " /base/cmd_vel ", maxLin: 1.2, maxAng: 2.2 }), {
      topic: "/base/cmd_vel", maxLin: 1.2, maxAng: 2.2,
    });
    assert.deepEqual(readTeleopState({ topic: " ", maxLin: 200, maxAng: -1 }), {
      topic: "/cmd_vel", maxLin: 0.5, maxAng: 1,
    });
    assert.deepEqual(readTeleopState(null), { topic: "/cmd_vel", maxLin: 0.5, maxAng: 1 });
  });
});
