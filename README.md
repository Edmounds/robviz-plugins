# RobViz 官方插件集 (robviz_plugins)

本仓库提供 RobViz 的官方通用插件源码、构建工具和可直接安装的分发产物。

## 包含插件

> 提示：基础调试插件 `image`（WebRTC 图像/设置）、`terminal`（远程终端）与 `plot`（实时曲线）已作为开箱即用默认插件内置于 RobViz Core 宿主仓库的 `plugins/` 中。

| 插件 ID | 名称 | 类型 | 说明 |
|---|---|---|---|
| `teleop` | 遥控 (Teleop) | 停靠区块 | 键盘 (WASD/方向键) 与按键底盘速度控制 |
| `nav-goals` | 导航位姿 (Nav Goals) | 视口工具与设置 | 3D 视口导航目标与初始位姿点选交互 |
| `map-editor` | 地图编辑 (Map Editor) | 顶栏页面 | 2D 栅格地图编辑、清除与 PGM/YAML 导入导出 |
| `waypoints-editor` | 航点编辑 (Waypoints Editor) | 顶栏页面 | 2D 航点路线规划、底图对齐与航点属性编辑 |
| `urdf-editor` | URDF 编辑 (URDF Editor) | 顶栏页面 | URDF 模型 3D 预览、关节控制与 XML 源码编辑 |
| `image-capture` | 图像采集 (Image Capture) | 顶栏页面 | 原始 RGB 预览与无损 PNG 截图采集 |
| `example-odom-hud` | 速度 HUD | 停靠区块 | 独立安装的示例，不再内置于 Core |

## 构建与测试

需要 Node.js 24 和 npm：

```bash
npm install
npm test          # 运行纯数学与协议单元测试 (Node.js 内置 test runner)
npm run build     # 编译全部插件并生成 catalog.json
```

编译产物直接输出在各个插件目录 `<id>/` 下，每个插件独立为一个完整目录：
- `manifest.json`：声明元数据、入口和文件列表
- `index.js`：ESM 模块入口，自身依赖已打入
- 可选 `style.css`：编译生成的作用域样式
- 源代码文件：`index.tsx`、`<id>.css` 及相关 TypeScript 源码

## 安装到 RobViz 宿主

将插件文件夹复制到 RobViz 宿主运行环境的 `plugins/` 目录：

```bash
cp -R <id> /path/to/robviz/plugins/<id>
cd /path/to/robviz && npm run plugins:scan
```

刷新网页即可加载并启用插件。

## 后端与 Release

图像与采集需要 `robviz_video_gateway`。图像设置、航点保存和底图需要 `robviz_web_server`。
终端需要独立的 Core `terminal/server.ts` 服务，不随插件安装自动启动。
其他工具使用浏览器本地文件或 Foxglove，不需要果蔬业务包。
启动参数、Host/Origin 保护及协议检查见 Core `docs/09-companion-services.md`。

构建还生成 `release-assets/catalog.json` 和内容寻址的 `<id>-<sha256>.bin` 资产。
在源码与 `plugins/`、`catalog.json` 同步提交后，授权的发布人员可上传这些文件到固定 tag 的 Release。
Core 在线安装可使用固定 commit 的目录，也可使用与该 commit 一致的 Release 资产。
当前任务不创建公开仓库、不上传 Release，不改写旧 Core 历史。
