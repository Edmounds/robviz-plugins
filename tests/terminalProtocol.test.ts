import assert from "node:assert/strict";
import { describe, it } from "node:test";
import {
  parseTerminalTarget,
  terminalClientMessageSchema,
  validateTerminalUsername,
} from "../src/terminal/protocol.ts";

describe("terminal protocol", () => {
  it("extracts the SSH host from valid websocket URLs", () => {
    assert.equal(parseTerminalTarget("ws://192.168.1.42:8765"), "192.168.1.42");
    assert.equal(parseTerminalTarget("wss://robot.local/bridge"), "robot.local");
    assert.equal(parseTerminalTarget("ws://[2001:db8::42]:8765"), "[2001:db8::42]");
  });

  it("rejects non-WebSocket bridge URLs", () => {
    for (const url of ["http://robot.local", "not-a-url", "ftp://robot.local"]) {
      assert.throws(() => parseTerminalTarget(url), /Foxglove WebSocket URL/);
    }
  });

  it("accepts Linux SSH usernames and rejects argument-like values", () => {
    assert.equal(validateTerminalUsername("robot-user_1"), "robot-user_1");
    assert.throws(() => validateTerminalUsername("-oProxyCommand=sh"), /SSH username/);
    assert.throws(() => validateTerminalUsername("robot@example.com"), /SSH username/);
  });

  it("bounds terminal dimensions and input messages", () => {
    assert.equal(
      terminalClientMessageSchema.safeParse({
        type: "open",
        bridgeUrl: "ws://robot.local:8765",
        username: "robot",
        password: "secret",
        cols: 120,
        rows: 32,
      }).success,
      true,
    );
    assert.equal(
      terminalClientMessageSchema.safeParse({ type: "resize", cols: 10_000, rows: 32 }).success,
      false,
    );
    assert.equal(
      terminalClientMessageSchema.safeParse({ type: "input", data: "x".repeat(65_537) }).success,
      false,
    );
    assert.equal(
      terminalClientMessageSchema.safeParse({
        type: "open",
        bridgeUrl: "ws://robot.local:8765",
        username: "robot",
        password: "line\nbreak",
        cols: 80,
        rows: 24,
      }).success,
      false,
    );
  });
});
