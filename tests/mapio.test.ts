import assert from "node:assert/strict";
import { describe, it } from "node:test";
import {
  parseMapYaml,
  parsePgm,
  serializeMapYaml,
  serializePgm,
  type EditableMap,
} from "../map-editor/mapio.ts";

function makeMap(): EditableMap {
  const width = 8;
  const height = 6;
  const data = new Int8Array(width * height).fill(-1);
  data[0] = 100;
  data[width * height - 1] = 0;
  return {
    width,
    height,
    data,
    meta: {
      resolution: 0.05,
      origin: [-1, -2, 0],
      negate: 0,
      occupiedThresh: 0.65,
      freeThresh: 0.196,
    },
  };
}

describe("Map Editor PGM and YAML IO", () => {
  it("PGM round-trip with vertical flip", () => {
    const map = makeMap();
    const pgm = serializePgm(map);
    const parsed = parsePgm(pgm, map.meta);
    assert.equal(parsed.width, 8);
    assert.equal(parsed.height, 6);
    assert.deepEqual([...parsed.data], [...map.data]);
  });

  it("PGM pixel row 0 is top of image (max map y)", () => {
    const map = makeMap();
    const bytes = new Uint8Array(serializePgm(map));
    const headerLen = new TextEncoder().encode("P5\n8 6\n255\n").length;
    assert.equal(bytes[headerLen + 5 * 8], 0);
    assert.equal(bytes[headerLen + 7], 254);
  });

  it("YAML round-trip", () => {
    const meta = makeMap().meta;
    const yaml = serializeMapYaml("mymap.pgm", meta);
    const parsed = parseMapYaml(yaml);
    assert.equal(parsed.image, "mymap.pgm");
    assert.ok(Math.abs(parsed.meta.resolution - 0.05) < 1e-4);
    assert.deepEqual(parsed.meta.origin, [-1, -2, 0]);
    assert.ok(Math.abs(parsed.meta.occupiedThresh - 0.65) < 1e-4);
  });

  it("parses PGM with comments", () => {
    const text = "P2\n# a comment\n2 2\n255\n0 254\n205 0\n";
    const meta = makeMap().meta;
    const parsed = parsePgm(new TextEncoder().encode(text).buffer as ArrayBuffer, meta);
    assert.equal(parsed.data[parsed.width * 1 + 0], 100);
    assert.equal(parsed.data[parsed.width * 1 + 1], 0);
    assert.equal(parsed.data[0], -1);
    assert.equal(parsed.data[1], 100);
  });
});
