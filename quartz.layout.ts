import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"
import { SimpleSlug } from "./quartz/util/path"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [],
  footer: Component.Footer({
    links: {
      Bluesky: "https://bsky.app/profile/pelayoarbues.com",
      Linkedin: "https://www.linkedin.com/in/pelayoarbues",
      Mastodon: "https://sigmoid.social/@pelayoarbues",
      Twitter: "https://www.twitter.com/pelayoarbues",
      Unsplash: "https://unsplash.com/es/@pelayoarbues",
      GitHub: "https://github.com/pelayoarbues",
      RSS: "https://pelayoarbues.com/index.xml"
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.ConditionalRender({
      component: Component.Breadcrumbs(),
      condition: (page) => page.fileData.slug !== "index",
    }),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
      ],
    }),
    Component.DesktopOnly(
      Component.Explorer({
        filterFn: (node) => {
          // set containing names of everything you want to filter out
          const omit = new Set(["mocs", "tags", "attachments", "literature-notes", "conflict-files-obsidian-git"])
          
          // Check if the node's display name (converted to lowercase) is in the omit set
          // Also check slug if it exists as folders might be represented differently
          if (omit.has(node.displayName.toLowerCase())) {
            return false
          }
    
          // If node has a file with a slug, check if its base path is in the omit set
          if (node.slug) {
            const parts = node.slug.split('/')
            if (parts.length > 0 && omit.has(parts[0].toLowerCase())) {
              return false
            }
          }
    
          return true
        },
        sortFn: (a, b) => {
          const nameOrderMap: Record<string, number> = {
            "notes": 100,
            "research": 101,
            "appearances": 200,
            "photography": 300
          }
         
          let orderA = 999  // Default high value for items not in the map
          let orderB = 999
         
          // Get the first part of the slug (folder name) or use displayName
          const getOrderKey = (node: any) => {
            if (node.slug) {
              const parts = node.slug.split('/')
              return parts[0].toLowerCase()
            }
            return node.displayName.toLowerCase()
          }
        
          const keyA = getOrderKey(a)
          const keyB = getOrderKey(b)
        
          // Use the order from the map if available
          if (keyA in nameOrderMap) orderA = nameOrderMap[keyA]
          if (keyB in nameOrderMap) orderB = nameOrderMap[keyB]
         
          return orderA - orderB
        },
      })
    ),
    Component.DesktopOnly(
      Component.RecentNotes({
        title: "Recent Notes",
        limit: 3,
        filter: (f) =>
          f.slug!.startsWith("notes/") && f.slug! !== "notes/index" && !f.frontmatter?.noindex,
        sort: (f1, f2) =>
          (f2.dates?.created.getTime() ?? Number.MAX_SAFE_INTEGER) -
          (f1.dates?.created.getTime() ?? Number.MAX_SAFE_INTEGER),
        linkToMore: "notes/" as SimpleSlug,
      }),
    ),
  ],
  right: [
    Component.Graph(),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
    Component.DesktopOnly(
      Component.RecentNotes({
        title: "Now Reading",
        limit: 1,
        filter: (f) =>
          f.slug!.startsWith("literature-notes/Articles") && f.slug! !== "literature-notes/Articles/index" && !f.frontmatter?.noindex,
        sort: (f1, f2) =>
          (f2.dates?.created.getTime() ?? Number.MAX_SAFE_INTEGER) -
          (f1.dates?.created.getTime() ?? Number.MAX_SAFE_INTEGER),
        linkToMore: "literature-notes/Articles/" as SimpleSlug,
      }),
    ),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
      ],
    }),
    Component.Explorer(),
  ],
  right: [],
}
