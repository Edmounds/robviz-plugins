import type { RobvizPlugin } from "@robviz/core";
import { UrdfEditorPage } from "./UrdfEditorPage";

const plugin: RobvizPlugin = {
  id: "urdf-editor",
  name: "URDF 编辑 (URDF Editor)",
  pages: [
    {
      id: "main",
      legacyMode: "urdf",
      title: (ctx) => (ctx.locale === "en" ? "URDF Editor" : "URDF 编辑"),
      component: UrdfEditorPage,
    },
  ],
};

export default plugin;
