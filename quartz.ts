import { loadQuartzConfig, loadQuartzLayout } from "./quartz/plugins/loader/config-loader"
import * as ExternalPlugin from "./.quartz/plugins"
import { RecentNotes as RecentNotesComponent } from "./.quartz/plugins/recent-notes"
import ConditionalRender from "./quartz/components/ConditionalRender"
import { PageTypes } from "./quartz/plugins"
import { QuartzPluginData } from "./quartz/plugins/vfile"

type ExplorerNode = {
  slugSegment?: string
  slugSegments?: string[]
  displayName?: string
}

type RecentPage = QuartzPluginData & {
  slug?: string
  frontmatter?: {
    noindex?: boolean
  }
  dates?: {
    created?: Date
  }
}

ExternalPlugin.Explorer({
  filterFn: (node: ExplorerNode) => {
    const hiddenSections = new Set([
      "mocs",
      "tags",
      "attachments",
      "literature-notes",
      "conflict-files-obsidian-git",
    ])
    const section = (
      node.slugSegments?.[0] ??
      node.slugSegment ??
      node.displayName ??
      ""
    ).toLowerCase()

    return !hiddenSections.has(section)
  },
  sortFn: (a: ExplorerNode, b: ExplorerNode) => {
    const topLevelOrder: Record<string, number> = {
      notes: 100,
      research: 101,
      appearances: 200,
      photography: 300,
    }
    const sectionA = (a.slugSegments?.[0] ?? a.slugSegment ?? a.displayName ?? "").toLowerCase()
    const sectionB = (b.slugSegments?.[0] ?? b.slugSegment ?? b.displayName ?? "").toLowerCase()
    const orderA = topLevelOrder[sectionA] ?? 999
    const orderB = topLevelOrder[sectionB] ?? 999

    if (orderA !== orderB) return orderA - orderB
    return (a.displayName ?? sectionA).localeCompare(b.displayName ?? sectionB, undefined, {
      numeric: true,
      sensitivity: "base",
    })
  },
  mapFn: (node: ExplorerNode) => {
    if (node.slugSegments?.length !== 1) return node

    if (node.slugSegment === "notes") {
      node.displayName = "Permanent Notes"
    } else if (node.slugSegment === "appearances") {
      node.displayName = "Public Appearances"
    } else if (node.slugSegment === "research") {
      node.displayName = "Research"
    } else if (node.slugSegment === "photography") {
      node.displayName = "Photography"
    }

    return node
  },
})

const config = await loadQuartzConfig()
const generatedLayout = await loadQuartzLayout()

const recentNotes = RecentNotesComponent({
  title: "Recent Notes",
  limit: 3,
  showTags: false,
  linkToMore: "notes/",
  filter: (file: RecentPage) =>
    file.slug?.startsWith("notes/") === true &&
    file.slug !== "notes/index" &&
    !file.frontmatter?.noindex,
  sort: (fileA: RecentPage, fileB: RecentPage) =>
    (fileB.dates?.created?.getTime() ?? Number.MAX_SAFE_INTEGER) -
    (fileA.dates?.created?.getTime() ?? Number.MAX_SAFE_INTEGER),
})

const nowReading = ConditionalRender({
  component: RecentNotesComponent({
    title: "Now Reading",
    limit: 1,
    showTags: false,
    linkToMore: "literature-notes/articles/",
    filter: (file: RecentPage) =>
      file.slug?.startsWith("literature-notes/articles") === true &&
      file.slug !== "literature-notes/articles/index" &&
      !file.frontmatter?.noindex,
    sort: (fileA: RecentPage, fileB: RecentPage) =>
      (fileB.dates?.created?.getTime() ?? Number.MAX_SAFE_INTEGER) -
      (fileA.dates?.created?.getTime() ?? Number.MAX_SAFE_INTEGER),
  }),
  condition: (page) => page.fileData.slug === "index",
})

const contentLayout = generatedLayout.byPageType.content ?? {}
generatedLayout.byPageType.content = {
  ...contentLayout,
  left: [...(contentLayout.left ?? generatedLayout.defaults.left ?? []), recentNotes],
  right: [...(contentLayout.right ?? generatedLayout.defaults.right ?? []), nowReading],
}

config.plugins.emitters = config.plugins.emitters.filter(
  (plugin) => plugin.name !== "PageTypeDispatcher",
)
config.plugins.emitters.push(
  PageTypes.PageTypeDispatcher({
    defaults: generatedLayout.defaults,
    byPageType: generatedLayout.byPageType,
  }),
)

export default config
export const layout = generatedLayout
