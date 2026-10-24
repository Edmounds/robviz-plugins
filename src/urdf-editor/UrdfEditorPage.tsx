import { basicSetup } from "codemirror";
import { redo, undo } from "@codemirror/commands";
import { xml } from "@codemirror/lang-xml";
import { openSearchPanel } from "@codemirror/search";
import { EditorState } from "@codemirror/state";
import { EditorView } from "@codemirror/view";
import {
  Box,
  Download,
  EyeOff,
  FileCode2,
  FileUp,
  FolderOpen,
  Grid3X3,
  Lightbulb,
  Maximize,
  Redo2,
  RefreshCcw,
  RotateCcw,
  Search,
  Trash2,
  Undo2,
} from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import {
  Button,
  Page,
  Toolbar,
  EmptyState,
  Checkbox,
  SplitGroup as Group,
  SplitPanel as Panel,
  SplitHandle,
  useSplitGroupRef as useGroupRef,
  NumberInput,
  useI18n,
  SceneManager,
  TfBuffer,
  type MessagePayload,
  type PluginPageProps,
} from "@robviz/core";
import "./style.css";

import type { UrdfDisplayOptions, UrdfJointInfo, UrdfModelInfo, UrdfTreeNode } from "./UrdfRenderer";
import { UrdfRenderer } from "./UrdfRenderer";

type Translate = (key: any, values?: any) => string;

const WORKSPACE_PANEL_MIN_SIZE = {
  urdfViewport: 320,
  urdfInspector: 220,
};

const URDF_DISPLAY_KEY = "__urdf_editor__";

type InspectorTab = "files" | "structure" | "joints" | "source";

interface ViewOptions extends UrdfDisplayOptions {
  grid: boolean;
  lighting: boolean;
}

const DEFAULT_VIEW_OPTIONS: ViewOptions = {
  visual: true,
  collision: false,
  modelAxes: true,
  jointAxes: false,
  centerOfMass: false,
  inertia: false,
  shadows: false,
  grid: true,
  lighting: true,
};

function validateUrdf(source: string, t: Translate): void {
  const document = new DOMParser().parseFromString(source, "application/xml");
  const parserError = document.querySelector("parsererror");
  if (parserError) throw new Error(parserError.textContent?.trim() || t("xmlFormatError"));
  if (document.documentElement.nodeName.toLowerCase() !== "robot") {
    throw new Error(t("urdfRootError"));
  }
}

function focusXmlError(view: EditorView | null, message: string): void {
  const match = message.match(/line\s+(\d+).*column\s+(\d+)/i);
  if (!view || !match) return;
  const lineNumber = Math.min(Number(match[1]), view.state.doc.lines);
  const line = view.state.doc.line(Math.max(1, lineNumber));
  const anchor = Math.min(line.to, line.from + Math.max(0, Number(match[2]) - 1));
  view.dispatch({ selection: { anchor }, scrollIntoView: true });
  view.focus();
}

function invalidatePendingLoad(generation: { current: number }): void {
  generation.current++;
}

function downloadText(text: string, name: string): void {
  const url = URL.createObjectURL(new Blob([text], { type: "application/xml" }));
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = name;
  anchor.click();
  URL.revokeObjectURL(url);
}

function XmlEditor({
  initialValue,
  theme,
  viewRef,
  onChange,
}: {
  initialValue: string;
  theme: "dark" | "light";
  viewRef: React.MutableRefObject<EditorView | null>;
  onChange: (value: string) => void;
}) {
  const hostRef = useRef<HTMLDivElement>(null);
  const initialValueRef = useRef(initialValue);
  const onChangeRef = useRef(onChange);
  onChangeRef.current = onChange;

  useEffect(() => {
    if (!hostRef.current) return;
    const editor = new EditorView({
      parent: hostRef.current,
      state: EditorState.create({
        doc: initialValueRef.current,
        extensions: [
          basicSetup,
          xml(),
          EditorView.lineWrapping,
          EditorView.theme({
            "&": { height: "100%", background: "transparent" },
            ".cm-scroller": { fontFamily: "var(--mono)", fontSize: "var(--fs-ui)" },
            ".cm-gutters": {
              background: "var(--surface-soft)",
              color: "var(--text-faint)",
              borderRight: "1px solid var(--border-soft)",
            },
            ".cm-content": { caretColor: "var(--foreground)" },
            ".cm-cursor": { borderLeftColor: "var(--foreground)" },
            ".cm-activeLine, .cm-activeLineGutter": { background: "var(--surface-soft)" },
          }, { dark: theme === "dark" }),
          EditorView.updateListener.of((update) => {
            if (update.docChanged) onChangeRef.current(update.state.doc.toString());
          }),
        ],
      }),
    });
    viewRef.current = editor;
    return () => {
      viewRef.current = null;
      editor.destroy();
    };
  }, [theme, viewRef]);

  return <div className="urdf-code-editor" ref={hostRef} />;
}

function TreeNode({ node, onSelect }: { node: UrdfTreeNode; onSelect: (node: UrdfTreeNode) => void }) {
  if (node.children.length === 0) {
    return (
      <Button className={`urdf-tree-node ${node.type}`} onClick={() => onSelect(node)}>
        <span>{node.type === "link" ? "L" : "J"}</span>{node.name}
      </Button>
    );
  }
  return (
    <details className="urdf-tree-branch" open>
      <summary>
        <Button className={`urdf-tree-node ${node.type}`} onClick={() => onSelect(node)}>
          <span>{node.type === "link" ? "L" : "J"}</span>{node.name}
        </Button>
      </summary>
      <div>{node.children.map((child) => <TreeNode key={child.id} node={child} onSelect={onSelect} />)}</div>
    </details>
  );
}

export function UrdfEditorPage({
  ctx,
  isMobile = false,
}: PluginPageProps) {
  const bridge = ctx.bridge;
  const theme = ctx.theme;
  const stored = ctx.pluginStates["urdf-editor"] as { inspectorPercent?: number } | undefined;
  const inspectorPercent = stored?.inspectorPercent ?? 35;
  const onInspectorPercentChange = useCallback(
    (percent: number) => {
      ctx.onPluginStateChange("urdf-editor", { ...stored, inspectorPercent: percent });
    },
    [ctx, stored],
  );
  const workspaceRef = useGroupRef();
  const { t } = useI18n();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sceneRef = useRef<SceneManager | null>(null);
  const rendererRef = useRef<UrdfRenderer | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);
  const folderRef = useRef<HTMLInputElement>(null);
  const editorViewRef = useRef<EditorView | null>(null);
  const appliedSourceRef = useRef("");
  const loadGenerationRef = useRef(0);

  const [files, setFiles] = useState<File[]>([]);
  const [model, setModel] = useState<UrdfModelInfo>();
  const [joints, setJoints] = useState<UrdfJointInfo[]>([]);
  const [source, setSource] = useState("");
  const [editorRevision, setEditorRevision] = useState(0);
  const [dirty, setDirty] = useState(false);
  const [tab, setTab] = useState<InspectorTab>("files");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string>();
  const [options, setOptions] = useState<ViewOptions>(DEFAULT_VIEW_OPTIONS);
  const [angleUnit, setAngleUnit] = useState<"rad" | "deg">("rad");
  const [ignoreLimits, setIgnoreLimits] = useState(false);
  const [followJointStates, setFollowJointStates] = useState(false);
  const [dragging, setDragging] = useState(false);

  useEffect(() => {
    workspaceRef.current?.setLayout({
      viewport: 100 - inspectorPercent,
      inspector: inspectorPercent,
    });
  }, [inspectorPercent, workspaceRef]);

  useEffect(() => {
    if (!canvasRef.current) return;
    const scene = new SceneManager(canvasRef.current, new TfBuffer());
    scene.fixedFrame = "model";
    sceneRef.current = scene;
    return () => {
      invalidatePendingLoad(loadGenerationRef);
      scene.dispose();
      sceneRef.current = null;
      rendererRef.current = null;
    };
  }, []);

  useEffect(() => {
    folderRef.current?.setAttribute("webkitdirectory", "");
    folderRef.current?.setAttribute("directory", "");
  }, []);

  useEffect(() => {
    const renderer = rendererRef.current;
    const scene = sceneRef.current;
    if (!renderer || !scene) return;
    const { grid, lighting, ...displayOptions } = options;
    renderer.applyDisplayOptions(displayOptions);
    scene.setGridVisible(grid);
    scene.setLightingVisible(lighting);
    scene.setShadowsEnabled(options.shadows);
    scene.invalidate();
  }, [options]);

  useEffect(() => {
    rendererRef.current?.setIgnoreLimits(ignoreLimits);
  }, [ignoreLimits]);

  useEffect(() => {
    if (!followJointStates) return;
    return bridge.subscribe("/joint_states", (payload: MessagePayload) => {
      if (payload.kind !== "raw") return;
      const message = payload.message as { name?: string[]; position?: Float64Array | number[] };
      if (!message.name || !message.position) return;
      const values: Record<string, number> = {};
      for (let index = 0; index < message.name.length; index++) {
        values[message.name[index]] = Number(message.position[index]);
      }
      rendererRef.current?.setJointValues(values);
      setJoints((current) => current.map((joint) =>
        values[joint.name] == null ? joint : { ...joint, value: values[joint.name] },
      ));
      sceneRef.current?.invalidate();
    });
  }, [bridge, followJointStates]);

  const loadCandidate = useCallback(async (nextFiles: File[], text?: string) => {
    const scene = sceneRef.current;
    if (!scene) return undefined;
    const generation = ++loadGenerationRef.current;
    const candidate = new UrdfRenderer();
    candidate.frameId = "model";
    setBusy(true);
    setError(undefined);
    try {
      const sourceFile = nextFiles.find((file) => /\.urdf$|\.xml$/i.test(file.name));
      const sourceText = text ?? await sourceFile?.text() ?? "";
      validateUrdf(sourceText, t);
      const info = await candidate.load(nextFiles, sourceText);
      if (generation !== loadGenerationRef.current || sceneRef.current !== scene) {
        candidate.dispose();
        return undefined;
      }
      const { grid: _grid, lighting: _lighting, ...displayOptions } = options;
      candidate.applyDisplayOptions(displayOptions);
      candidate.setIgnoreLimits(ignoreLimits);
      scene.addDisplay(URDF_DISPLAY_KEY, candidate);
      rendererRef.current = candidate;
      scene.flyToFit(info.bounds);
      scene.invalidate();
      setModel(info);
      setJoints(info.joints);
      return info;
    } catch (loadError) {
      candidate.dispose();
      if (generation === loadGenerationRef.current) {
        const message = loadError instanceof Error ? loadError.message : String(loadError);
        setError(message === "未找到 .urdf 或 .xml 文件" ? t("noUrdfFile") : message);
      }
      return undefined;
    } finally {
      if (generation === loadGenerationRef.current) setBusy(false);
    }
  }, [ignoreLimits, options, t]);

  const openFiles = useCallback(async (fileList: FileList | File[]) => {
    const nextFiles = [...fileList];
    const info = await loadCandidate(nextFiles);
    if (!info) return;
    setFiles(nextFiles);
    setSource(info.sourceText);
    appliedSourceRef.current = info.sourceText;
    setEditorRevision((value) => value + 1);
    setDirty(false);
    setTab("structure");
  }, [loadCandidate]);

  const applySource = useCallback(async () => {
    if (!model) return;
    try {
      validateUrdf(source, t);
    } catch (validationError) {
      const message = validationError instanceof Error ? validationError.message : String(validationError);
      setError(message);
      focusXmlError(editorViewRef.current, message);
      return;
    }
    const replacement = new File([source], model.sourceFile, { type: "application/xml" });
    const nextFiles = files.map((file) => file.name === model.sourceFile ? replacement : file);
    const info = await loadCandidate(nextFiles, source);
    if (!info) return;
    setFiles(nextFiles);
    appliedSourceRef.current = source;
    setDirty(false);
  }, [files, loadCandidate, model, source, t]);

  const unload = useCallback(() => {
    loadGenerationRef.current++;
    sceneRef.current?.removeDisplay(URDF_DISPLAY_KEY);
    rendererRef.current = null;
    setFiles([]);
    setModel(undefined);
    setJoints([]);
    setSource("");
    appliedSourceRef.current = "";
    setDirty(false);
    setError(undefined);
    setBusy(false);
    setFollowJointStates(false);
    setTab("files");
  }, []);

  const setJoint = useCallback((name: string, value: number) => {
    rendererRef.current?.setJoint(name, value);
    setJoints((current) => current.map((joint) => joint.name === name ? { ...joint, value } : joint));
    sceneRef.current?.invalidate();
  }, []);

  const resetJoints = useCallback(() => {
    rendererRef.current?.resetJoints();
    setJoints((current) => current.map((joint) => ({ ...joint, value: 0 })));
    sceneRef.current?.invalidate();
  }, []);

  const changeOption = (key: keyof ViewOptions) => {
    setOptions((current) => ({ ...current, [key]: !current[key] }));
  };

  const toDisplayValue = (value: number, type: string) =>
    angleUnit === "deg" && type !== "prismatic" ? value * 180 / Math.PI : value;
  const fromDisplayValue = (value: number, type: string) =>
    angleUnit === "deg" && type !== "prismatic" ? value * Math.PI / 180 : value;

  return (
    <Page
      className={`urdf-editor-page ${dragging ? "dragging" : ""}`}
      onDragEnter={(event) => { event.preventDefault(); setDragging(true); }}
      onDragOver={(event) => event.preventDefault()}
      onDragLeave={(event) => { if (event.currentTarget === event.target) setDragging(false); }}
      onDrop={(event) => {
        event.preventDefault();
        setDragging(false);
        if (event.dataTransfer.files.length) void openFiles(event.dataTransfer.files);
      }}
    >
      <Toolbar>
        <Button onClick={() => fileRef.current?.click()}><FileUp /> {t("openFile")}</Button>
        <Button onClick={() => folderRef.current?.click()}><FolderOpen /> {t("openFolder")}</Button>
        <input ref={fileRef} type="file" multiple accept=".urdf,.xml,.stl,.dae,.obj" hidden onChange={(event) => {
          if (event.target.files?.length) void openFiles(event.target.files);
          event.target.value = "";
        }} />
        <input ref={folderRef} type="file" multiple hidden onChange={(event) => {
          if (event.target.files?.length) void openFiles(event.target.files);
          event.target.value = "";
        }} />
        <span className="toolbar-divider" />
        <Button selected={options.visual} onClick={() => changeOption("visual")}>{t("visual")}</Button>
        <Button selected={options.collision} onClick={() => changeOption("collision")}>{t("collision")}</Button>
        <Button selected={options.centerOfMass} onClick={() => changeOption("centerOfMass")}>{t("centerOfMass")}</Button>
        <Button selected={options.inertia} onClick={() => changeOption("inertia")}>{t("inertia")}</Button>
        <Button selected={options.modelAxes} onClick={() => changeOption("modelAxes")}>{t("modelAxes")}</Button>
        <Button selected={options.jointAxes} onClick={() => changeOption("jointAxes")}>{t("jointAxes")}</Button>
        <Button selected={options.grid} onClick={() => changeOption("grid")} title={t("grid")} aria-label={t("grid")}><Grid3X3 /></Button>
        <Button selected={options.lighting} onClick={() => changeOption("lighting")} title={t("lighting")} aria-label={t("lighting")}><Lightbulb /></Button>
        <Button selected={options.shadows} onClick={() => changeOption("shadows")}>{t("shadows")}</Button>
        <span className="spacer" />
        <Button disabled={!model} onClick={() => model && sceneRef.current?.flyToFit(rendererRef.current?.bounds ?? model.bounds)} title={t("fitModel")} aria-label={t("fitModel")}><Maximize /></Button>
        <Button onClick={() => sceneRef.current?.resetView()} title={t("resetView")} aria-label={t("resetView")}><RefreshCcw /></Button>
        <Button disabled={!model} onClick={unload} title={t("unloadModel")} aria-label={t("unloadModel")}><Trash2 /></Button>
      </Toolbar>

      <Group
        id="urdf-workspace"
        groupRef={workspaceRef}
        className="urdf-workspace"
        disabled={isMobile}
        defaultLayout={{ viewport: 100 - inspectorPercent, inspector: inspectorPercent }}
        resizeTargetMinimumSize={{ fine: 6, coarse: 20 }}
        onLayoutChanged={(layout, meta) => {
          if (!meta.isUserInteraction) return;
          const total = Object.values(layout).reduce((sum, value) => sum + value, 0);
          if (total > 0) onInspectorPercentChange((layout.inspector / total) * 100);
        }}
      >
        <Panel id="viewport" minSize={isMobile ? 0 : WORKSPACE_PANEL_MIN_SIZE.urdfViewport}>
        <div className="urdf-viewport">
          <canvas ref={canvasRef} />
          {!model && !busy && (
            <div className="urdf-empty">
              <Box />
              <strong>{t("loadUrdfFiles")}</strong>
              <span>{t("dropFilesHint")}</span>
            </div>
          )}
          {busy && <div className="urdf-loading" role="status">{t("parsingModel")}</div>}
          {dragging && <div className="urdf-drop-target">{t("dropToLoad")}</div>}
          {error && <div className="urdf-error" role="alert">{error}</div>}
        </div>

        </Panel>
        <SplitHandle aria-label={t("structure")} />
        <Panel id="inspector" minSize={isMobile ? 0 : WORKSPACE_PANEL_MIN_SIZE.urdfInspector} maxSize="55%">

        <aside className="urdf-inspector">
          <nav className="inspector-tabs">
            {(["files", "structure", "joints", "source"] as const).map((item) => (
              <Button key={item} selected={tab === item} onClick={() => setTab(item)}>
                {item === "files" ? t("files") : item === "structure" ? t("structure") : item === "joints" ? t("joints") : t("source")}
              </Button>
            ))}
          </nav>
          <div className="inspector-body">
            {tab === "files" && (
              <div className="urdf-file-list">
                {files.length === 0 ? <EmptyState>{t("noModelFiles")}</EmptyState> : files.map((file) => (
                  <div key={`${file.name}-${file.size}`} className={file.name === model?.sourceFile ? "source" : ""}>
                    {file.name === model?.sourceFile ? <FileCode2 /> : <Box />}
                    <span>{(file as File & { webkitRelativePath?: string }).webkitRelativePath || file.name}</span>
                    <small>{Math.max(1, Math.round(file.size / 1024))} KB</small>
                  </div>
                ))}
                {model?.missingMeshes.map((path) => <div key={path} className="missing"><EyeOff /><span>{path}</span><small>{t("missing")}</small></div>)}
              </div>
            )}
            {tab === "structure" && (
              <div className="urdf-structure">
                {model?.tree ? <TreeNode node={model.tree} onSelect={(node) => {
                  const bounds = rendererRef.current?.selectNode(node.id);
                  if (bounds && !bounds.isEmpty()) sceneRef.current?.flyToFit(bounds);
                  sceneRef.current?.invalidate();
                }} /> : <EmptyState>{t("structureEmpty")}</EmptyState>}
              </div>
            )}
            {tab === "joints" && (
              <div className="urdf-joints">
                <Toolbar className="joint-toolbar">
                  <div className="segmented-control">
                    <Button selected={angleUnit === "rad"} onClick={() => setAngleUnit("rad")}>{t("radians")}</Button>
                    <Button selected={angleUnit === "deg"} onClick={() => setAngleUnit("deg")}>{t("degrees")}</Button>
                  </div>
                  <Button onClick={resetJoints} disabled={!joints.length}><RotateCcw /> {t("reset")}</Button>
                </Toolbar>
                <Checkbox checked={ignoreLimits} onChange={(event) => setIgnoreLimits(event.target.checked)}>{t("ignoreLimits")}</Checkbox>
                <Checkbox checked={followJointStates} onChange={(event) => setFollowJointStates(event.target.checked)}>{t("followJointStates")}</Checkbox>
                {joints.length === 0 ? <EmptyState>{t("noMovableJoints")}</EmptyState> : joints.map((joint) => {
                  const value = toDisplayValue(joint.value, joint.type);
                  const lower = toDisplayValue(joint.lower, joint.type);
                  const upper = toDisplayValue(joint.upper, joint.type);
                  return (
                    <label className="urdf-joint" key={joint.name}>
                      <span><strong>{joint.name}</strong><small>{joint.type}</small></span>
                      <div>
                        <input type="range" min={lower} max={upper} step={(upper - lower) / 500 || 0.001} value={Math.min(upper, Math.max(lower, value))} disabled={followJointStates} onChange={(event) => setJoint(joint.name, fromDisplayValue(Number(event.target.value), joint.type))} />
                        <NumberInput key={angleUnit} step="any" aria-label={joint.name} value={Number(value.toFixed(5))} disabled={followJointStates}
                          onValueChange={(value) => { if (value !== undefined) setJoint(joint.name, fromDisplayValue(value, joint.type)); }} />
                      </div>
                    </label>
                  );
                })}
              </div>
            )}
            {tab === "source" && (
              <div className="urdf-source-panel">
                <Toolbar className="source-toolbar">
                  <Button onClick={() => editorViewRef.current && undo(editorViewRef.current)} aria-label={t("undo")} title={t("undo")}><Undo2 /></Button>
                  <Button onClick={() => editorViewRef.current && redo(editorViewRef.current)} aria-label={t("redo")} title={t("redo")}><Redo2 /></Button>
                  <Button onClick={() => editorViewRef.current && openSearchPanel(editorViewRef.current)} aria-label={t("search")} title={t("search")}><Search /></Button>
                  <span className="source-name">{model?.sourceFile ?? t("notLoaded")}{dirty ? " *" : ""}</span>
                  <span className="spacer" />
                  <Button disabled={!model || !dirty || busy} onClick={() => void applySource()}><RefreshCcw /> {t("applyPreview")}</Button>
                  <Button disabled={!model} onClick={() => model && downloadText(source, model.sourceFile)}><Download /> {t("download")}</Button>
                </Toolbar>
                {model ? (
                  <XmlEditor key={`${editorRevision}-${theme}`} initialValue={source} theme={theme} viewRef={editorViewRef} onChange={(value) => { setSource(value); setDirty(value !== appliedSourceRef.current); setError(undefined); }} />
                ) : <EmptyState>{t("sourceEmpty")}</EmptyState>}
              </div>
            )}
          </div>
        </aside>
        </Panel>
      </Group>
    </Page>
  );
}
