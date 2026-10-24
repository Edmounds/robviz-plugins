import type { RobvizPlugin } from "@robviz/core";
import { ImageCapturePage } from "./ImageCapturePage";

const plugin: RobvizPlugin = {
  id: "image-capture",
  name: "图像采集 (Image Capture)",
  pages: [
    {
      id: "main",
      legacyMode: "capture",
      title: (ctx) => (ctx.locale === "en" ? "Image Capture" : "图像采集"),
      component: ImageCapturePage,
    },
  ],
  services: [
    {
      id: "video",
      label: "WebRTC 视频网关",
      defaultPort: 8787,
      protocol: "ws",
      description: "实时视频流 (H.264) 与相机数据流",
    },
  ],
};

export default plugin;
