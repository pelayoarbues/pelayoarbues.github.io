import type { QuartzComponentConstructor } from "@quartz-community/types"

export interface FooterOptions {
  links?: Record<string, string>
}

declare const Footer: QuartzComponentConstructor<FooterOptions>
export default Footer
