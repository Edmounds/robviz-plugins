import type { RobvizPlugin } from "@robviz/core";
import { WaypointsEditorPage } from "./WaypointsEditorPage";

const plugin: RobvizPlugin = {
  id: "waypoints-editor",
  name: "航点编辑 (Waypoints Editor)",
  pages: [
    {
      id: "main",
      legacyMode: "waypoints",
      title: (ctx) => (ctx.locale === "en" ? "Waypoints Editor" : "航点编辑"),
      component: WaypointsEditorPage,
    },
  ],
};

export default plugin;
