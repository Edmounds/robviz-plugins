/**
 * 2D 栅格地图编辑器：加载 map_server 的 PGM+YAML（或从 /map 话题抓取），
 * 画笔/矩形修改占用值（清噪点、封门、抹掉动态障碍残影），导出回 PGM+YAML。
 */
import { useCallback, useEffect, useRef, useState, type PointerEvent } from "react";
import { Button, Page, Toolbar, type PluginPageProps, type RobvizPlugin } from "@robviz/core";
import { parseMapYaml, parsePgm, serializeMapYaml, serializePgm, type EditableMap } from "./mapio";
import "./style.css";

type Tool = "paint" | "rect";
type CellValue = 100 | 0 | -1;

interface Quaternion {
  x: number;
  y: number;
  z: number;
  w: number;
}

const MAX_UNDO = 10;

const COLORS: Record<string, [number, number, number]> = {
  free: [232, 232, 232],
  occupied: [20, 20, 20],
  unknown: [128, 128, 128],
};

function cellColor(v: number): [number, number, number] {
  return v === 100 ? COLORS.occupied : v === 0 ? COLORS.free : COLORS.unknown;
}

function yawFromQuat(q: Quaternion): number {
  return Math.atan2(2 * (q.w * q.z + q.x * q.y), 1 - 2 * (q.y * q.y + q.z * q.z));
}

function download(data: ArrayBuffer | string, name: string): void {
  const blob = new Blob([data], { type: "application/octet-stream" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = name;
  a.click();
  URL.revokeObjectURL(url);
}

const TEXTS = {
  "zh-CN": {
    choosePgm: "请至少选择一个 .pgm 图像文件",
    parseFailed: "解析失败: ",
    waitingMap: "正在等待 /map 话题消息...",
    mapTimeout: "10 秒内未收到 /map 消息",
    openMapFiles: "打开 PGM / YAML",
    captureMap: "从 /map 抓取",
    value: "值",
    free: "自由",
    occupied: "占用",
    unknown: "未知",
    tools: "工具",
    brush: "画笔",
    rectangle: "矩形",
    brushSize: "笔刷 ",
    undoCount: "撤销",
    exportMap: "导出 PGM+YAML",
    mapEmpty: "打开 map.pgm + map.yaml 或从话题抓取",
  },
  en: {
    choosePgm: "Please select at least one .pgm image file",
    parseFailed: "Parse failed: ",
    waitingMap: "Waiting for /map topic message...",
    mapTimeout: "No /map message received within 10 seconds",
    openMapFiles: "Open PGM / YAML",
    captureMap: "Capture from /map",
    value: "Value",
    free: "Free",
    occupied: "Occupied",
    unknown: "Unknown",
    tools: "Tools",
    brush: "Brush",
    rectangle: "Rectangle",
    brushSize: "Brush ",
    undoCount: "Undo",
    exportMap: "Export PGM+YAML",
    mapEmpty: "Open map.pgm + map.yaml or capture from topic",
  },
};

export function MapEditorPage({ ctx }: PluginPageProps) {
  const { bridge, theme = "dark", locale = "zh-CN" } = ctx;
  const isEn = locale === "en";
  const t = (key: keyof typeof TEXTS["zh-CN"]) => (isEn ? TEXTS.en[key] : TEXTS["zh-CN"][key]);

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mapRef = useRef<EditableMap>(null);
  const offscreenRef = useRef<HTMLCanvasElement>(null);
  const undoRef = useRef<Int8Array[]>([]);
  const viewRef = useRef({ scale: 4, ox: 0, oy: 0 });
  const dragRef = useRef<
    | { kind: "paint"; lastImg: [number, number] }
    | { kind: "rect"; startImg: [number, number]; curImg: [number, number] }
    | { kind: "pan"; last: [number, number] }
    | null
  >(null);

  const [mapInfo, setMapInfo] = useState<{ width: number; height: number; name: string }>();
  const [tool, setTool] = useState<Tool>("paint");
  const [value, setValue] = useState<CellValue>(0);
  const [brush, setBrush] = useState(3);
  const [undoDepth, setUndoDepth] = useState(0);
  const [hint, setHint] = useState<string>();
  const fileRef = useRef<HTMLInputElement>(null);
  const baseNameRef = useRef("map");

  const redraw = useCallback(() => {
    const canvas = canvasRef.current;
    const off = offscreenRef.current;
    if (!canvas) return;
    const canvasContext = canvas.getContext("2d")!;
    const tokens = getComputedStyle(canvas);
    canvasContext.setTransform(1, 0, 0, 1, 0, 0);
    canvasContext.fillStyle = tokens.getPropertyValue("--canvas").trim() || "#000";
    canvasContext.fillRect(0, 0, canvas.width, canvas.height);
    if (!off) return;
    const { scale, ox, oy } = viewRef.current;
    canvasContext.setTransform(scale, 0, 0, scale, ox, oy);
    canvasContext.imageSmoothingEnabled = false;
    canvasContext.drawImage(off, 0, 0);
    const drag = dragRef.current;
    if (drag?.kind === "rect") {
      const [x0, y0] = drag.startImg;
      const [x1, y1] = drag.curImg;
      canvasContext.strokeStyle = tokens.getPropertyValue("--foreground").trim() || "#f5f5f5";
      canvasContext.lineWidth = 1 / scale;
      canvasContext.strokeRect(Math.min(x0, x1), Math.min(y0, y1), Math.abs(x1 - x0) + 1, Math.abs(y1 - y0) + 1);
    }
  }, []);

  useEffect(() => {
    redraw();
  }, [theme, redraw]);

  const blit = useCallback((imgX0: number, imgY0: number, imgX1: number, imgY1: number) => {
    const map = mapRef.current;
    const off = offscreenRef.current;
    if (!map || !off) return;
    const x0 = Math.max(0, imgX0);
    const y0 = Math.max(0, imgY0);
    const x1 = Math.min(map.width - 1, imgX1);
    const y1 = Math.min(map.height - 1, imgY1);
    if (x1 < x0 || y1 < y0) return;
    const w = x1 - x0 + 1;
    const h = y1 - y0 + 1;
    const img = off.getContext("2d")!.createImageData(w, h);
    for (let iy = 0; iy < h; iy++) {
      const gridRow = map.height - 1 - (y0 + iy);
      for (let ix = 0; ix < w; ix++) {
        const [r, g, b] = cellColor(map.data[gridRow * map.width + x0 + ix]);
        const d = (iy * w + ix) * 4;
        img.data[d] = r;
        img.data[d + 1] = g;
        img.data[d + 2] = b;
        img.data[d + 3] = 255;
      }
    }
    off.getContext("2d")!.putImageData(img, x0, y0);
  }, []);

  const setMap = useCallback(
    (map: EditableMap, name: string) => {
      mapRef.current = map;
      baseNameRef.current = name;
      undoRef.current = [];
      setUndoDepth(0);
      const off = document.createElement("canvas");
      off.width = map.width;
      off.height = map.height;
      offscreenRef.current = off;
      blit(0, 0, map.width - 1, map.height - 1);
      const canvas = canvasRef.current;
      if (canvas) {
        const scale = Math.min(canvas.width / map.width, canvas.height / map.height) * 0.92;
        viewRef.current = {
          scale,
          ox: (canvas.width - map.width * scale) / 2,
          oy: (canvas.height - map.height * scale) / 2,
        };
      }
      setMapInfo({ width: map.width, height: map.height, name });
      setHint(undefined);
      redraw();
    },
    [blit, redraw],
  );

  const pushUndo = useCallback(() => {
    const map = mapRef.current;
    if (!map) return;
    undoRef.current.push(new Int8Array(map.data));
    if (undoRef.current.length > MAX_UNDO) undoRef.current.shift();
    setUndoDepth(undoRef.current.length);
  }, []);

  const undo = useCallback(() => {
    const map = mapRef.current;
    const snapshot = undoRef.current.pop();
    if (!map || !snapshot) return;
    map.data.set(snapshot);
    setUndoDepth(undoRef.current.length);
    blit(0, 0, map.width - 1, map.height - 1);
    redraw();
  }, [blit, redraw]);

  const paintAt = useCallback(
    (imgX: number, imgY: number) => {
      const map = mapRef.current;
      if (!map) return;
      const r = brush;
      const gridRowC = map.height - 1 - imgY;
      for (let dy = -r + 1; dy < r; dy++) {
        for (let dx = -r + 1; dx < r; dx++) {
          if (dx * dx + dy * dy > (r - 0.5) * (r - 0.5)) continue;
          const col = imgX + dx;
          const row = gridRowC - dy;
          if (col < 0 || col >= map.width || row < 0 || row >= map.height) continue;
          map.data[row * map.width + col] = value;
        }
      }
      blit(imgX - r, imgY - r, imgX + r, imgY + r);
    },
    [brush, value, blit],
  );

  const fillRect = useCallback(
    (a: [number, number], b: [number, number]) => {
      const map = mapRef.current;
      if (!map) return;
      const x0 = Math.max(0, Math.min(a[0], b[0]));
      const x1 = Math.min(map.width - 1, Math.max(a[0], b[0]));
      const y0 = Math.max(0, Math.min(a[1], b[1]));
      const y1 = Math.min(map.height - 1, Math.max(a[1], b[1]));
      for (let iy = y0; iy <= y1; iy++) {
        const row = map.height - 1 - iy;
        map.data.fill(value, row * map.width + x0, row * map.width + x1 + 1);
      }
      blit(x0, y0, x1, y1);
    },
    [value, blit],
  );

  const toImg = useCallback((e: { clientX: number; clientY: number }): [number, number] => {
    const canvas = canvasRef.current!;
    const rect = canvas.getBoundingClientRect();
    const { scale, ox, oy } = viewRef.current;
    return [
      Math.floor((e.clientX - rect.left - ox) / scale),
      Math.floor((e.clientY - rect.top - oy) / scale),
    ];
  }, []);

  const onPointerDown = useCallback(
    (e: PointerEvent<HTMLCanvasElement>) => {
      e.currentTarget.setPointerCapture(e.pointerId);
      if (e.button === 2 || e.button === 1) {
        dragRef.current = { kind: "pan", last: [e.clientX, e.clientY] };
        return;
      }
      if (!mapRef.current) return;
      const img = toImg(e);
      if (tool === "paint") {
        pushUndo();
        dragRef.current = { kind: "paint", lastImg: img };
        paintAt(img[0], img[1]);
        redraw();
      } else {
        dragRef.current = { kind: "rect", startImg: img, curImg: img };
        redraw();
      }
    },
    [tool, toImg, pushUndo, paintAt, redraw],
  );

  const onPointerMove = useCallback(
    (e: PointerEvent<HTMLCanvasElement>) => {
      const drag = dragRef.current;
      if (!drag) return;
      if (drag.kind === "pan") {
        viewRef.current.ox += e.clientX - drag.last[0];
        viewRef.current.oy += e.clientY - drag.last[1];
        drag.last = [e.clientX, e.clientY];
      } else if (drag.kind === "paint") {
        const img = toImg(e);
        const [lx, ly] = drag.lastImg;
        const steps = Math.max(Math.abs(img[0] - lx), Math.abs(img[1] - ly), 1);
        for (let s = 1; s <= steps; s++) {
          paintAt(
            Math.round(lx + ((img[0] - lx) * s) / steps),
            Math.round(ly + ((img[1] - ly) * s) / steps),
          );
        }
        drag.lastImg = img;
      } else {
        drag.curImg = toImg(e);
      }
      redraw();
    },
    [toImg, paintAt, redraw],
  );

  const onPointerUp = useCallback(() => {
    const drag = dragRef.current;
    dragRef.current = null;
    if (drag?.kind === "rect") {
      pushUndo();
      fillRect(drag.startImg, drag.curImg);
    }
    redraw();
  }, [fillRect, pushUndo, redraw]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const handleNativeWheel = (e: WheelEvent) => {
      e.preventDefault();
      e.stopPropagation();

      const rect = canvas.getBoundingClientRect();
      const mx = e.clientX - rect.left;
      const my = e.clientY - rect.top;
      const v = viewRef.current;

      if (e.ctrlKey) {
        const factor = Math.exp(-e.deltaY * 0.01);
        const next = Math.min(64, Math.max(0.2, v.scale * factor));
        v.ox = mx - ((mx - v.ox) / v.scale) * next;
        v.oy = my - ((my - v.oy) / v.scale) * next;
        v.scale = next;
      } else if (e.deltaMode === 0) {
        v.ox -= e.deltaX;
        v.oy -= e.deltaY;
      } else {
        const factor = e.deltaY < 0 ? 1.15 : 1 / 1.15;
        const next = Math.min(64, Math.max(0.2, v.scale * factor));
        v.ox = mx - ((mx - v.ox) / v.scale) * next;
        v.oy = my - ((my - v.oy) / v.scale) * next;
        v.scale = next;
      }
      redraw();
    };

    canvas.addEventListener("wheel", handleNativeWheel, { passive: false });
    return () => canvas.removeEventListener("wheel", handleNativeWheel);
  }, [redraw]);

  const openFiles = useCallback(
    async (files: FileList) => {
      let meta;
      let pgmFile: File | undefined;
      let name = "map";
      for (const f of files) {
        if (f.name.endsWith(".yaml") || f.name.endsWith(".yml")) {
          meta = parseMapYaml(await f.text()).meta;
        } else if (f.name.endsWith(".pgm")) {
          pgmFile = f;
          name = f.name.replace(/\.pgm$/, "");
        }
      }
      if (!pgmFile) {
        setHint(t("choosePgm"));
        return;
      }
      meta ??= {
        resolution: 0.05,
        origin: [0, 0, 0] as [number, number, number],
        negate: 0,
        occupiedThresh: 0.65,
        freeThresh: 0.196,
      };
      try {
        setMap(parsePgm(await pgmFile.arrayBuffer(), meta), name);
      } catch (err) {
        setHint(t("parseFailed") + (err instanceof Error ? err.message : String(err)));
      }
    },
    [setMap, t],
  );

  const importFromTopic = useCallback(() => {
    const waiting = t("waitingMap");
    setHint(waiting);
    const unsub = bridge.subscribe("/map", (payload) => {
      if (payload.kind !== "grid") return;
      unsub();
      const { info, data } = payload;
      setMap(
        {
          width: info.width,
          height: info.height,
          data: new Int8Array(data),
          meta: {
            resolution: info.resolution,
            origin: [
              info.origin.position.x,
              info.origin.position.y,
              yawFromQuat(info.origin.orientation),
            ],
            negate: 0,
            occupiedThresh: 0.65,
            freeThresh: 0.196,
          },
        },
        "map",
      );
    });
    setTimeout(() => {
      unsub();
      setHint((h) => (h === waiting ? t("mapTimeout") : h));
    }, 10_000);
  }, [bridge, setMap, t]);

  const exportMap = useCallback(() => {
    const map = mapRef.current;
    if (!map) return;
    const base = baseNameRef.current;
    download(serializePgm(map), `${base}.pgm`);
    download(serializeMapYaml(`${base}.pgm`, map.meta), `${base}.yaml`);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const resize = () => {
      const el = canvas.parentElement!;
      if (el.clientWidth === 0) return;
      canvas.width = el.clientWidth;
      canvas.height = el.clientHeight;
      redraw();
    };
    resize();
    const ob = new ResizeObserver(resize);
    ob.observe(canvas.parentElement!);
    return () => ob.disconnect();
  }, [redraw]);

  return (
    <Page className="map-editor">
      <Toolbar className="map-toolbar">
        <Button onClick={() => fileRef.current?.click()}>{t("openMapFiles")}</Button>
        <input
          ref={fileRef}
          type="file"
          multiple
          accept=".pgm,.yaml,.yml"
          style={{ display: "none" }}
          onChange={(e) => e.target.files && openFiles(e.target.files)}
        />
        <Button onClick={importFromTopic}>{t("captureMap")}</Button>
        <span className="divider" />
        <span className="group-label">{t("value")}</span>
        {(
          [
            [0, t("free")],
            [100, t("occupied")],
            [-1, t("unknown")],
          ] as [CellValue, string][]
        ).map(([v, label]) => (
          <Button key={v} selected={value === v} onClick={() => setValue(v)}>
            {label}
          </Button>
        ))}
        <span className="divider" />
        <span className="group-label">{t("tools")}</span>
        <Button selected={tool === "paint"} onClick={() => setTool("paint")}>
          {t("brush")}
        </Button>
        <Button selected={tool === "rect"} onClick={() => setTool("rect")}>
          {t("rectangle")}
        </Button>
        <label className="brush-size">
          {t("brushSize")} {brush}
          <input
            type="range"
            min={1}
            max={20}
            value={brush}
            onChange={(e) => setBrush(Number(e.target.value))}
          />
        </label>
        <span className="divider" />
        <Button onClick={undo} disabled={undoDepth === 0}>
          {t("undoCount")} ({undoDepth})
        </Button>
        <Button onClick={exportMap} disabled={!mapInfo}>
          {t("exportMap")}
        </Button>
        <span className="spacer" />
        {mapInfo && (
          <span className="map-meta">
            {mapInfo.name} · {mapInfo.width}×{mapInfo.height}
          </span>
        )}
      </Toolbar>
      <div className="map-canvas-wrap">
        <canvas
          ref={canvasRef}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onContextMenu={(e) => e.preventDefault()}
        />
        {!mapInfo && (
          <div className="map-empty">
            {hint ?? t("mapEmpty")}
          </div>
        )}
        {mapInfo && hint && <div className="map-empty">{hint}</div>}
      </div>
    </Page>
  );
}

const plugin: RobvizPlugin = {
  id: "map-editor",
  name: "地图编辑 (Map Editor)",
  pages: [
    {
      id: "main",
      legacyMode: "map",
      title: (ctx) => (ctx.locale === "en" ? "Map Editor" : "地图编辑"),
      component: MapEditorPage,
    },
  ],
};

export default plugin;
