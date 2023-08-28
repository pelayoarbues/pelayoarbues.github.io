import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"
import { SimpleSlug } from "./quartz/util/path"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  footer: Component.Footer({
    links: {
      Twitter: "https://www.twitter.com/pelayoarbues",
      Linkedin: "https://www.linkedin.com/in/pelayoarbues",
      Mastodon: "https://sigmoid.social/@pelayoarbues",
      Unsplash: "https://unsplash.com/es/@pelayoarbues",
      GitHub: "https://github.com/pelayoarbues"
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [Component.ArticleTitle(), Component.ContentMeta(), Component.TagList()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.DesktopOnly(
      Component.RecentNotes({
        title: "Recent Writing",
        limit: 3,
        filter: (f) =>
          f.slug!.startsWith("writing/") && f.slug! !== "writing/index" && !f.frontmatter?.noindex,
        sort: (f1, f2) =>
          (f2.dates?.created.getTime() ?? Number.MAX_SAFE_INTEGER) -
          (f1.dates?.created.getTime() ?? Number.MAX_SAFE_INTEGER),
        linkToMore: "writing/" as SimpleSlug,
      }),
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
    Component.DesktopOnly(
      Component.RecentNotes({
        title: "Recent Reading",
        limit: 3,
        filter: (f) =>
          f.slug!.startsWith("literature-notes/Articles") && f.slug! !== "literature-notes/Articles/index" && !f.frontmatter?.noindex,
        sort: (f1, f2) =>
          (f2.dates?.created.getTime() ?? Number.MAX_SAFE_INTEGER) -
          (f1.dates?.created.getTime() ?? Number.MAX_SAFE_INTEGER),
        linkToMore: "literature-notes/Articles/" as SimpleSlug,
      }),
    ),
  ],
  right: [Component.Graph(), Component.Backlinks()],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.ArticleTitle()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
  ],
  right: [],
}
