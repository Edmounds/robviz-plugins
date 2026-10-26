import { mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { createHash } from "node:crypto";
import { build } from "vite";

const external = ["@robviz/core", "react", "react-dom", "react-dom/client", "react/jsx-runtime", "react/jsx-dev-runtime", "three"];
const catalog = [];
await rm("release-assets", { recursive: true, force: true });
await mkdir("release-assets");

const pluginDirs = [
  "example-odom-hud",
  "image-capture",
  "map-editor",
  "nav-goals",
  "teleop",
  "urdf-editor",
  "waypoints-editor",
];

for (const id of pluginDirs) {
  const manifest = JSON.parse(await readFile(`${id}/manifest.json`, "utf8"));
  if (manifest.id !== id || !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(id)) throw new Error(`Invalid plugin id: ${id}`);

  // Clear previous build artifacts
  await rm(`${id}/index.js`, { force: true });
  await rm(`${id}/style.css`, { force: true });

  await build({
    configFile: false,
    build: {
      outDir: id,
      emptyOutDir: false,
      lib: { entry: `${id}/index.tsx`, formats: ["es"], fileName: () => "index.js", cssFileName: "style" },
      rolldownOptions: { external, output: { codeSplitting: false } },
    },
  });

  const distFiles = ["index.js"];
  try {
    await readFile(`${id}/style.css`);
    distFiles.push("style.css");
    manifest.style = "style.css";
  } catch {
    delete manifest.style;
  }
  manifest.entry = "index.js";
  manifest.files = [...distFiles].sort();
  await writeFile(`${id}/manifest.json`, JSON.stringify(manifest, null, 2) + "\n");

  const hashes = {};
  for (const file of ["manifest.json", ...manifest.files]) {
    hashes[file] = createHash("sha256").update(await readFile(`${id}/${file}`)).digest("hex");
    await writeFile(`release-assets/${id}-${hashes[file]}.bin`, await readFile(`${id}/${file}`));
  }
  catalog.push({ id, version: manifest.version, directory: id, sha256: hashes });
}

await writeFile("catalog.json", JSON.stringify({ sdkApiVersion: 1, plugins: catalog }, null, 2) + "\n");
await writeFile("release-assets/catalog.json", JSON.stringify({ sdkApiVersion: 1, plugins: catalog }, null, 2) + "\n");
