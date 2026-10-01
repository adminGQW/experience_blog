import { mkdir, readdir, copyFile, stat } from "node:fs/promises"
import path from "node:path"

const root = path.resolve("public")

async function walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      await walk(fullPath)
      continue
    }
    if (!entry.name.endsWith(".html") || ["index.html", "404.html"].includes(entry.name)) continue

    const pageName = entry.name.slice(0, -".html".length)
    const indexPath = path.join(dir, pageName, "index.html")
    try {
      await stat(indexPath)
    } catch {
      await mkdir(path.dirname(indexPath), { recursive: true })
      await copyFile(fullPath, indexPath)
    }
  }
}

await walk(root)
