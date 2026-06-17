import type { QuartzEmitterPlugin } from "@quartz-community/types"
import type { FilePath, FullSlug, SimpleSlug } from "@quartz-community/types"

export interface ContentIndexOptions {
  enableSiteMap: boolean
  enableRSS: boolean
  rssLimit?: number
  rssSlug: string
  includeEmptyFiles: boolean
  rssIncludedSections: string[]
}

export type ContentIndexMap = Map<FullSlug, ContentDetails>

export interface ContentDetails {
  slug: FullSlug
  filePath: FilePath
  title: string
  links: SimpleSlug[]
  tags: string[]
  content: string
  date?: Date
  description?: string
}

export declare const ContentIndex: QuartzEmitterPlugin<Partial<ContentIndexOptions>>
export default ContentIndex
