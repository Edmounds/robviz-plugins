import assert from "node:assert/strict";
import { describe, it } from "node:test";

import {
  canvasToWorld,
  centerFromPivotInvariant,
  fitViewToBounds,
  imagePixelToWorld,
  panView,
  placeWaypointLabels,
  rectsIntersect,
  worldToCanvas,
  worldToImagePixel,
  zoomViewAtAnchor,
  type View2DTransform,
} from "../waypoints-editor/view2d.ts";

describe("2D View transform utilities", () => {
  const baseView: View2DTransform = {
    centerX: 2.0,
    centerY: -1.0,
    scale: 100, // 1m = 100px
    width: 800,
    height: 600,
  };

  it("converts world to canvas and back reversibly", () => {
    const wx = 3.5;
    const wy = -0.5;
    const [px, py] = worldToCanvas(baseView, wx, wy);

    assert.equal(px, 800 / 2 + (3.5 - 2.0) * 100); // 400 + 150 = 550
    assert.equal(py, 600 / 2 - (-0.5 - (-1.0)) * 100); // 300 - 50 = 250

    const back = canvasToWorld(baseView, px, py);
    assert.ok(Math.abs((back.x) - (wx)) < 10 ** -(5));
    assert.ok(Math.abs((back.y) - (wy)) < 10 ** -(5));
  });

  it("pans view inversely to pixel movement", () => {
    const panned = panView(baseView, 100, -50);
    assert.ok(Math.abs((panned.centerX) - (2.0 - 100 / 100)) < 10 ** -(5)); // 1.0
    assert.ok(Math.abs((panned.centerY) - (-1.0 + (-50) / 100)) < 10 ** -(5)); // -1.5
  });

  it("keeps anchor world coordinate unchanged when zooming", () => {
    const anchorPxX = 600;
    const anchorPxY = 200;
    const beforeWorld = canvasToWorld(baseView, anchorPxX, anchorPxY);

    const zoomed = zoomViewAtAnchor(baseView, anchorPxX, anchorPxY, 1.5);
    assert.ok(Math.abs((zoomed.scale) - (150)) < 10 ** -(4));

    const afterWorld = canvasToWorld(zoomed, anchorPxX, anchorPxY);
    assert.ok(Math.abs((afterWorld.x) - (beforeWorld.x)) < 10 ** -(5));
    assert.ok(Math.abs((afterWorld.y) - (beforeWorld.y)) < 10 ** -(5));
  });

  it("fits view to bounding box with padding", () => {
    const fitted = fitViewToBounds(
      { minX: 0, maxX: 10, minY: -5, maxY: 5 },
      800,
      600,
      50,
    );
    assert.equal(fitted.centerX, 5);
    assert.equal(fitted.centerY, 0);
    // Avail width: 700, span: 10 -> scale <= 70
    // Avail height: 500, span: 10 -> scale <= 50
    assert.ok(Math.abs((fitted.scale) - (50)) < 10 ** -(1));
  });

  it("detects rectangle intersection correctly", () => {
    const r1 = { x: 10, y: 10, width: 40, height: 20 };
    const r2 = { x: 45, y: 15, width: 30, height: 20 }; // intersects r1
    const r3 = { x: 100, y: 100, width: 20, height: 20 }; // far away

    assert.equal(rectsIntersect(r1, r2), true);
    assert.equal(rectsIntersect(r1, r3), false);
  });

  it("places labels with collision avoidance for adjacent points", () => {
    const points = [
      { name: "Alpha", px: 200, py: 200 },
      { name: "Beta", px: 205, py: 202 }, // Very close to Alpha
    ];

    const measureText = (name: string) => ({ width: name.length * 8, height: 14 });
    const placed = placeWaypointLabels(points, measureText, 800, 600);

    assert.equal(placed.length, 2);
    // Alpha and Beta labels must not intersect
    assert.equal(rectsIntersect(placed[0].rect, placed[1].rect, 1), false);
  });

  it("handles super wide labels by safely falling back to compact placed label within bounds", () => {
    const points = [
      {
        name: "Super_Long_Waypoint_Name_That_Exceeds_Canvas_Viewport_Width_By_A_Huge_Margin_ABCDEFGHIJKLMN_1234567890",
        px: 400,
        py: 300,
      },
    ];
    // Super wide measurement: 1200px width inside an 800px viewport
    const measureText = () => ({ width: 1200, height: 16 });
    const placed = placeWaypointLabels(points, measureText, 800, 600);

    assert.equal(placed.length, 1);
    assert.equal(placed[0].crowded, true);
    // Placed rect must stay within viewport boundaries
    assert.ok(placed[0].rect.x >= 4);
    assert.ok(placed[0].rect.x + placed[0].rect.width <= 800 - 4);
    assert.ok(placed[0].rect.y >= 4);
    assert.ok(placed[0].rect.y + placed[0].rect.height <= 600 - 4);
  });

  it("safely handles multiple coincident points at boundary", () => {
    const points = [
      { name: "P1", px: 795, py: 10 },
      { name: "P2", px: 795, py: 10 },
      { name: "P3", px: 795, py: 10 },
    ];
    const measureText = (name: string) => ({ width: name.length * 10, height: 14 });
    const placed = placeWaypointLabels(points, measureText, 800, 600);

    assert.equal(placed.length, 3);
    for (const p of placed) {
      assert.ok(p.rect.x >= 4);
      assert.ok(p.rect.x + p.rect.width <= 800 - 4);
      assert.ok(p.rect.y >= 4);
      assert.ok(p.rect.y + p.rect.height <= 600 - 4);
    }
  });

  describe("Background image coordinate transforms", () => {
    const imgConfig = {
      centerX: 1.0,
      centerY: 2.0,
      metersPerPixel: 0.02,
      rotationDeg: 0,
    };
    const W = 1000;
    const H = 600;

    it("maps image center to world center", () => {
      const world = imagePixelToWorld(imgConfig, W, H, W / 2, H / 2);
      assert.ok(Math.abs((world.x) - (1.0)) < 10 ** -(5));
      assert.ok(Math.abs((world.y) - (2.0)) < 10 ** -(5));

      const pixel = worldToImagePixel(imgConfig, W, H, 1.0, 2.0);
      assert.ok(Math.abs((pixel.u) - (W / 2)) < 10 ** -(5));
      assert.ok(Math.abs((pixel.v) - (H / 2)) < 10 ** -(5));
    });

    it("round-trips imagePixelToWorld and worldToImagePixel with rotation", () => {
      const rotatedConfig = { ...imgConfig, rotationDeg: 37.5, metersPerPixel: 0.015 };
      const testU = 750;
      const testV = 200;

      const world = imagePixelToWorld(rotatedConfig, W, H, testU, testV);
      const pixel = worldToImagePixel(rotatedConfig, W, H, world.x, world.y);

      assert.ok(Math.abs((pixel.u) - (testU)) < 10 ** -(5));
      assert.ok(Math.abs((pixel.v) - (testV)) < 10 ** -(5));
    });

    it("preserves pivot world position when scale and rotation change", () => {
      const initialConfig = { ...imgConfig, rotationDeg: 10, metersPerPixel: 0.02 };
      const pivotPixel = { u: 700, v: 450 };

      // Current world position of this pivot point
      const pivotWorld = imagePixelToWorld(initialConfig, W, H, pivotPixel.u, pivotPixel.v);

      // Now change scale and rotation drastically
      const newScale = 0.035;
      const newRot = 65.0;

      const newCenter = centerFromPivotInvariant(
        pivotWorld,
        pivotPixel,
        W,
        H,
        newScale,
        newRot,
      );

      const transformedConfig = {
        centerX: newCenter.centerX,
        centerY: newCenter.centerY,
        metersPerPixel: newScale,
        rotationDeg: newRot,
      };

      // The pivot point MUST evaluate to the exact same world position!
      const afterWorld = imagePixelToWorld(transformedConfig, W, H, pivotPixel.u, pivotPixel.v);
      assert.ok(Math.abs((afterWorld.x) - (pivotWorld.x)) < 10 ** -(5));
      assert.ok(Math.abs((afterWorld.y) - (pivotWorld.y)) < 10 ** -(5));
    });
  });
});
