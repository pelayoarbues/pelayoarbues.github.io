import fs from "node:fs/promises"
import path from "node:path"
import { joinSegments } from "@quartz-community/types"
import { escapeHTML, simplifySlug } from "@quartz-community/utils"
import { getDate } from "@quartz-community/utils/sort"

const defaultOptions = {
  enableSiteMap: true,
  enableRSS: true,
  rssLimit: 10,
  rssSlug: "index",
  includeEmptyFiles: true,
  rssIncludedSections: ["notes", "writing"],
}

const write = async ({ ctx, content, slug, ext }) => {
  const pathToPage = joinSegments(ctx.argv.output, slug + ext)
  const dir = path.dirname(pathToPage)
  await fs.mkdir(dir, { recursive: true })
  await fs.writeFile(pathToPage, content)
  return pathToPage
}

function generateSiteMap(cfg, idx) {
  const base = cfg.baseUrl ?? ""
  const createURLEntry = (slug, content) => `<url>
    <loc>https://${joinSegments(base, encodeURI(slug))}</loc>
    ${content.date ? `<lastmod>${content.date.toISOString()}</lastmod>` : ""}
  </url>`

  const urls = Array.from(idx)
    .map(([slug, content]) => createURLEntry(simplifySlug(slug), content))
    .join("")

  return `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">${urls}</urlset>`
}

function isSectionEntry(slug, title, sections) {
  return sections.some((section) => {
    if (!slug.startsWith(`${section}/`)) return false
    if (slug === section || slug === `${section}/index` || slug === `${section}/index.html`) {
      return false
    }

    return title.toLowerCase() !== section.toLowerCase()
  })
}

function compareByDateThenTitle([, f1], [, f2]) {
  if (f1.date && f2.date) return f2.date.getTime() - f1.date.getTime()
  if (f1.date && !f2.date) return -1
  if (!f1.date && f2.date) return 1
  return f1.title.localeCompare(f2.title)
}

function generateRSSFeed(cfg, idx, options) {
  const base = cfg.baseUrl ?? ""
  const sections = options.rssIncludedSections ?? []
  const limit = options.rssLimit

  const createURLEntry = (slug, content) => `<item>
    <title>${escapeHTML(content.title)}</title>
    <link>https://${joinSegments(base, encodeURI(slug))}</link>
    <guid>https://${joinSegments(base, encodeURI(slug))}</guid>
    <description><![CDATA[ ${content.description ?? ""} ]]></description>
    <pubDate>${content.date?.toUTCString()}</pubDate>
  </item>`

  const items = Array.from(idx)
    .filter(([slug, content]) => isSectionEntry(slug, content.title, sections))
    .sort(compareByDateThenTitle)
    .slice(0, limit ?? idx.size)
    .map(([slug, content]) => createURLEntry(simplifySlug(slug), content))
    .join("")

  return `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
    <channel>
      <title>${escapeHTML(cfg.pageTitle)}</title>
      <link>https://${base}</link>
      <description>${limit ? `Last ${limit} notes` : "Recent notes"} on ${escapeHTML(cfg.pageTitle)}</description>
      <generator>Quartz -- quartz.jzhao.xyz</generator>
      <atom:link href="https://${base}/index.xml" rel="self" type="application/rss+xml" />
      ${items}
    </channel>
  </rss>`
}

export const ContentIndex = (opts) => {
  const options = { ...defaultOptions, ...opts }

  const emitAll = async (ctx, content) => {
    const cfg = ctx.cfg.configuration
    const linkIndex = new Map()

    for (const [, file] of content) {
      const data = file.data ?? {}
      if (data.unlisted === true) continue

      const slug = data.slug
      const date = getDate(data) ?? new Date()
      const text = data.text

      if (options.includeEmptyFiles || (text && text !== "")) {
        const frontmatter = data.frontmatter ?? {}
        linkIndex.set(slug, {
          slug,
          filePath: data.relativePath,
          title: frontmatter.title ?? "",
          links: data.links ?? [],
          tags: frontmatter.tags ?? [],
          content: text ?? "",
          date,
          description: data.description ?? "",
        })
      }
    }

    const outputs = []
    if (options.enableSiteMap) {
      outputs.push(
        await write({
          ctx,
          content: generateSiteMap(cfg, linkIndex),
          slug: "sitemap",
          ext: ".xml",
        }),
      )
    }

    if (options.enableRSS) {
      outputs.push(
        await write({
          ctx,
          content: generateRSSFeed(cfg, linkIndex, options),
          slug: options.rssSlug ?? "index",
          ext: ".xml",
        }),
      )
    }

    const simplifiedIndex = Object.fromEntries(
      Array.from(linkIndex).map(([slug, content]) => {
        delete content.description
        delete content.date
        return [slug, content]
      }),
    )

    outputs.push(
      await write({
        ctx,
        content: JSON.stringify(simplifiedIndex),
        slug: joinSegments("static", "contentIndex"),
        ext: ".json",
      }),
    )

    return outputs
  }

  return {
    name: "ContentIndex",
    emit: (ctx, content) => emitAll(ctx, content),
    partialEmit: (ctx, content) => emitAll(ctx, content),
  }
}

export default ContentIndex
