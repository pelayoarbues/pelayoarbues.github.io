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
          
          // Get folder name from various possible properties
          const folderName = 
            (node.slug?.split('/')[0] || 
             node.displayName || 
             "").toLowerCase()
          
          // Check if folder name is in the omit set
          return !omit.has(folderName)
        },
        sortFn: (a, b) => {
          const nameOrderMap: Record<string, number> = {
            "notes": 100,
            "research": 101, 
            "appearances": 200,
            "photography": 300
          }
          
          // Try to get the folder name (first part of slug or displayName)
          const folderA = 
            (a.slug?.split('/')[0] || 
             a.displayName || 
             "").toLowerCase()
          
          const folderB = 
            (b.slug?.split('/')[0] || 
             b.displayName || 
             "").toLowerCase()
          
          // Get order values, default to high number if not found
          const orderA = nameOrderMap[folderA] ?? 999
          const orderB = nameOrderMap[folderB] ?? 999
          
          return orderA - orderB
        }
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
    Component.Explorer({
      filterFn: (node) => {
        // set containing names of everything you want to filter out
        const omit = new Set(["mocs", "tags", "attachments", "literature-notes", "conflict-files-obsidian-git"])
        
        // Get folder name from various possible properties
        const folderName = 
          (node.slug?.split('/')[0] || 
           node.displayName || 
           "").toLowerCase()
        
        // Check if folder name is in the omit set
        return !omit.has(folderName)
      },
      sortFn: (a, b) => {
        const nameOrderMap: Record<string, number> = {
          "notes": 100,
          "research": 101, 
          "appearances": 200,
          "photography": 300
        }
        
        // Try to get the folder name (first part of slug or displayName)
        const folderA = 
          (a.slug?.split('/')[0] || 
           a.displayName || 
           "").toLowerCase()
        
        const folderB = 
          (b.slug?.split('/')[0] || 
           b.displayName || 
           "").toLowerCase()
        
        // Get order values, default to high number if not found
        const orderA = nameOrderMap[folderA] ?? 999
        const orderB = nameOrderMap[folderB] ?? 999
        
        return orderA - orderB
      }
    }),
  ],
  right: [],
}
