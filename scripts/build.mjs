import { mkdir, readdir, readFile, rm, writeFile } from "node:fs/promises";
import { createHash } from "node:crypto";
import { join, relative } from "node:path";
import { build } from "vite";

const external = ["@robviz/core", "react", "react-dom", "react-dom/client", "react/jsx-runtime", "react/jsx-dev-runtime", "three"];
const catalog = [];
await rm("release-assets", { recursive: true, force: true });
await mkdir("release-assets");
for (const entry of await readdir("src", { withFileTypes: true })) {
  if (!entry.isDirectory()) continue;
  const id = entry.name;
  const manifest = JSON.parse(await readFile(`src/${id}/manifest.json`, "utf8"));
  if (manifest.id !== id || !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(id)) throw new Error(`Invalid plugin id: ${id}`);
  await build({
    configFile: false,
    build: {
      outDir: `plugins/${id}`,
      emptyOutDir: true,
      lib: { entry: `src/${id}/index.tsx`, formats: ["es"], fileName: "index", cssFileName: "style" },
      rolldownOptions: { external, output: { codeSplitting: false } },
    },
  });
  const files = (await readdir(`plugins/${id}`, { recursive: true, withFileTypes: true }))
    .filter((file) => file.isFile())
    .map((file) => relative(`plugins/${id}`, join(file.parentPath, file.name)).replaceAll("\\", "/")).sort();
  manifest.files = files;
  await writeFile(`plugins/${id}/manifest.json`, JSON.stringify(manifest, null, 2) + "\n");
  const hashes = {};
  for (const file of ["manifest.json", ...files]) {
    hashes[file] = createHash("sha256").update(await readFile(`plugins/${id}/${file}`)).digest("hex");
    await writeFile(`release-assets/${id}-${hashes[file]}.bin`, await readFile(`plugins/${id}/${file}`));
  }
  catalog.push({ id, version: manifest.version, directory: `plugins/${id}`, sha256: hashes });
}
await writeFile("catalog.json", JSON.stringify({ sdkApiVersion: 1, plugins: catalog }, null, 2) + "\n");
await writeFile("release-assets/catalog.json", JSON.stringify({ sdkApiVersion: 1, plugins: catalog }, null, 2) + "\n");
