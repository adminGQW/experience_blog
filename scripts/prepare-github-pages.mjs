import { mkdir, readFile, readdir, stat, writeFile } from "node:fs/promises"
import path from "node:path"

const root = path.resolve("public")
const contentIndex = JSON.parse(
  await readFile(path.join(root, "static", "contentIndex.json"), "utf8"),
)
const contentSlugs = new Set(Object.keys(contentIndex))

function routeForSlug(slug, basePath) {
  const pageSlug = slug === "index" ? "" : slug.replace(/\/index$/, "").replace(/\/+$/, "")
  const route = pageSlug
    .split("/")
    .filter(Boolean)
    .map((segment) => encodeURIComponent(segment))
    .join("/")
  return `${basePath}/${route}${route ? "/" : ""}`
}

function rewriteLinks(html, pageName) {
  const basePath = html.match(/<body\b[^>]*\bdata-basepath="([^"]*)"/)?.[1] ?? ""
  const routeName = encodeURIComponent(pageName)
  return html.replace(/<a\b[^>]*>/gi, (anchor) => {
    const hrefMatch = anchor.match(/\bhref=(["'])(.*?)\1/i)
    if (!hrefMatch) return anchor

    const slugMatch = anchor.match(/\bdata-slug=(["'])(.*?)\1/i)
    const slug = slugMatch?.[2]
      .replace(/&amp;/g, "&")
      .replace(/&quot;/g, '"')
      .replace(/&#39;/g, "'")
      .replace(/&lt;/g, "<")
      .replace(/&gt;/g, ">")

    let href = hrefMatch[2]
    if (slug && contentSlugs.has(slug)) {
      const parsedHref = new URL(href, "https://quartz.invalid")
      href = `${routeForSlug(slug, basePath)}${parsedHref.search}${parsedHref.hash}`
    } else if (href.startsWith("#")) {
      href = `${routeName}/${href}`
    } else {
      return anchor
    }

    return anchor.replace(hrefMatch[0], `href=${hrefMatch[1]}${href}${hrefMatch[1]}`)
  })
}

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
      const html = await readFile(fullPath, "utf8")
      const rebasedHtml = rewriteLinks(html, pageName).replace("<head>", '<head><base href="../">')
      await writeFile(indexPath, rebasedHtml, "utf8")
    }
  }
}

await walk(root)
