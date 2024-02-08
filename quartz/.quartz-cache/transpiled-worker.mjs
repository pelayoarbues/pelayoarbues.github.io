var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

// quartz/worker.ts
import sourceMapSupport from "source-map-support";

// quartz/plugins/transformers/frontmatter.ts
import matter from "gray-matter";
import remarkFrontmatter from "remark-frontmatter";
import yaml from "js-yaml";
import toml from "toml";

// quartz/util/path.ts
import { slug as slugAnchor } from "github-slugger";
import rfdc from "rfdc";
var clone = rfdc();
var QUARTZ = "quartz";
function isRelativeURL(s) {
  const validStart = /^\.{1,2}/.test(s);
  const validEnding = !(s.endsWith("/index") || s === "index");
  return validStart && validEnding && ![".md", ".html"].includes(_getFileExtension(s) ?? "");
}
__name(isRelativeURL, "isRelativeURL");
function sluggify(s) {
  return s.split("/").map((segment) => segment.replace(/\s/g, "-").replace(/%/g, "-percent").replace(/\?/g, "-q")).join("/").replace(/\/$/, "");
}
__name(sluggify, "sluggify");
function slugifyFilePath(fp, excludeExt) {
  fp = _stripSlashes(fp);
  let ext = _getFileExtension(fp);
  const withoutFileExt = fp.replace(new RegExp(ext + "$"), "");
  if (excludeExt || [".md", ".html", void 0].includes(ext)) {
    ext = "";
  }
  let slug = sluggify(withoutFileExt);
  if (_endsWith(slug, "_index")) {
    slug = slug.replace(/_index$/, "index");
  }
  return slug + ext;
}
__name(slugifyFilePath, "slugifyFilePath");
function simplifySlug(fp) {
  const res = _stripSlashes(_trimSuffix(fp, "index"), true);
  return res.length === 0 ? "/" : res;
}
__name(simplifySlug, "simplifySlug");
function transformInternalLink(link) {
  let [fplike, anchor] = splitAnchor(decodeURI(link));
  const folderPath = _isFolderPath(fplike);
  let segments = fplike.split("/").filter((x) => x.length > 0);
  let prefix = segments.filter(_isRelativeSegment).join("/");
  let fp = segments.filter((seg) => !_isRelativeSegment(seg) && seg !== "").join("/");
  const simpleSlug = simplifySlug(slugifyFilePath(fp));
  const joined = joinSegments(_stripSlashes(prefix), _stripSlashes(simpleSlug));
  const trail = folderPath ? "/" : "";
  const res = _addRelativeToStart(joined) + trail + anchor;
  return res;
}
__name(transformInternalLink, "transformInternalLink");
var _rebaseHastElement = /* @__PURE__ */ __name((el, attr, curBase, newBase) => {
  if (el.properties?.[attr]) {
    if (!isRelativeURL(String(el.properties[attr]))) {
      return;
    }
    const rel = joinSegments(resolveRelative(curBase, newBase), "..", el.properties[attr]);
    el.properties[attr] = rel;
  }
}, "_rebaseHastElement");
function normalizeHastElement(rawEl, curBase, newBase) {
  const el = clone(rawEl);
  _rebaseHastElement(el, "src", curBase, newBase);
  _rebaseHastElement(el, "href", curBase, newBase);
  if (el.children) {
    el.children = el.children.map(
      (child) => normalizeHastElement(child, curBase, newBase)
    );
  }
  return el;
}
__name(normalizeHastElement, "normalizeHastElement");
function pathToRoot(slug) {
  let rootPath = slug.split("/").filter((x) => x !== "").slice(0, -1).map((_) => "..").join("/");
  if (rootPath.length === 0) {
    rootPath = ".";
  }
  return rootPath;
}
__name(pathToRoot, "pathToRoot");
function resolveRelative(current, target) {
  const res = joinSegments(pathToRoot(current), simplifySlug(target));
  return res;
}
__name(resolveRelative, "resolveRelative");
function splitAnchor(link) {
  let [fp, anchor] = link.split("#", 2);
  anchor = anchor === void 0 ? "" : "#" + slugAnchor(anchor);
  return [fp, anchor];
}
__name(splitAnchor, "splitAnchor");
function slugTag(tag) {
  return tag.split("/").map((tagSegment) => sluggify(tagSegment)).join("/");
}
__name(slugTag, "slugTag");
function joinSegments(...args) {
  return args.filter((segment) => segment !== "").join("/").replace(/\/\/+/g, "/");
}
__name(joinSegments, "joinSegments");
function getAllSegmentPrefixes(tags) {
  const segments = tags.split("/");
  const results = [];
  for (let i = 0; i < segments.length; i++) {
    results.push(segments.slice(0, i + 1).join("/"));
  }
  return results;
}
__name(getAllSegmentPrefixes, "getAllSegmentPrefixes");
function transformLink(src, target, opts) {
  let targetSlug = transformInternalLink(target);
  if (opts.strategy === "relative") {
    return targetSlug;
  } else {
    const folderTail = _isFolderPath(targetSlug) ? "/" : "";
    const canonicalSlug = _stripSlashes(targetSlug.slice(".".length));
    let [targetCanonical, targetAnchor] = splitAnchor(canonicalSlug);
    if (opts.strategy === "shortest") {
      const matchingFileNames = opts.allSlugs.filter((slug) => {
        const parts = slug.split("/");
        const fileName = parts.at(-1);
        return targetCanonical === fileName;
      });
      if (matchingFileNames.length === 1) {
        const targetSlug2 = matchingFileNames[0];
        return resolveRelative(src, targetSlug2) + targetAnchor;
      }
    }
    return joinSegments(pathToRoot(src), canonicalSlug) + folderTail;
  }
}
__name(transformLink, "transformLink");
function _isFolderPath(fplike) {
  return fplike.endsWith("/") || _endsWith(fplike, "index") || _endsWith(fplike, "index.md") || _endsWith(fplike, "index.html");
}
__name(_isFolderPath, "_isFolderPath");
function _endsWith(s, suffix) {
  return s === suffix || s.endsWith("/" + suffix);
}
__name(_endsWith, "_endsWith");
function _trimSuffix(s, suffix) {
  if (_endsWith(s, suffix)) {
    s = s.slice(0, -suffix.length);
  }
  return s;
}
__name(_trimSuffix, "_trimSuffix");
function _getFileExtension(s) {
  return s.match(/\.[A-Za-z0-9]+$/)?.[0];
}
__name(_getFileExtension, "_getFileExtension");
function _isRelativeSegment(s) {
  return /^\.{0,2}$/.test(s);
}
__name(_isRelativeSegment, "_isRelativeSegment");
function _stripSlashes(s, onlyStripPrefix) {
  if (s.startsWith("/")) {
    s = s.substring(1);
  }
  if (!onlyStripPrefix && s.endsWith("/")) {
    s = s.slice(0, -1);
  }
  return s;
}
__name(_stripSlashes, "_stripSlashes");
function _addRelativeToStart(s) {
  if (s === "") {
    s = ".";
  }
  if (!s.startsWith(".")) {
    s = joinSegments(".", s);
  }
  return s;
}
__name(_addRelativeToStart, "_addRelativeToStart");

// quartz/plugins/transformers/frontmatter.ts
var defaultOptions = {
  delims: "---",
  language: "yaml",
  oneLineTagDelim: ","
};
var FrontMatter = /* @__PURE__ */ __name((userOpts) => {
  const opts = { ...defaultOptions, ...userOpts };
  return {
    name: "FrontMatter",
    markdownPlugins() {
      const { oneLineTagDelim } = opts;
      return [
        [remarkFrontmatter, ["yaml", "toml"]],
        () => {
          return (_, file) => {
            const { data } = matter(Buffer.from(file.value), {
              ...opts,
              engines: {
                yaml: (s) => yaml.load(s, { schema: yaml.JSON_SCHEMA }),
                toml: (s) => toml.parse(s)
              }
            });
            if (data.tag) {
              data.tags = data.tag;
            }
            if (data.title) {
              data.title = data.title.toString();
            } else if (data.title === null || data.title === void 0) {
              data.title = file.stem ?? "Untitled";
            }
            if (data.tags) {
              if (!Array.isArray(data.tags)) {
                data.tags = data.tags.toString().split(oneLineTagDelim).map((tag) => tag.trim());
              }
              data.tags = data.tags.filter((tag) => typeof tag === "string" || typeof tag === "number").map((tag) => tag.toString());
            }
            data.tags = [...new Set(data.tags?.map((tag) => slugTag(tag)))];
            file.data.frontmatter = data;
          };
        }
      ];
    }
  };
}, "FrontMatter");

// quartz/plugins/transformers/gfm.ts
import remarkGfm from "remark-gfm";
import smartypants from "remark-smartypants";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
var defaultOptions2 = {
  enableSmartyPants: true,
  linkHeadings: true
};
var GitHubFlavoredMarkdown = /* @__PURE__ */ __name((userOpts) => {
  const opts = { ...defaultOptions2, ...userOpts };
  return {
    name: "GitHubFlavoredMarkdown",
    markdownPlugins() {
      return opts.enableSmartyPants ? [remarkGfm, smartypants] : [remarkGfm];
    },
    htmlPlugins() {
      if (opts.linkHeadings) {
        return [
          rehypeSlug,
          [
            rehypeAutolinkHeadings,
            {
              behavior: "append",
              properties: {
                ariaHidden: true,
                tabIndex: -1,
                "data-no-popover": true
              },
              content: {
                type: "text",
                value: " \xA7"
              }
            }
          ]
        ];
      } else {
        return [];
      }
    }
  };
}, "GitHubFlavoredMarkdown");

// quartz/plugins/transformers/lastmod.ts
import fs from "fs";
import path from "path";
import { Repository } from "@napi-rs/simple-git";
import chalk from "chalk";
var defaultOptions3 = {
  priority: ["frontmatter", "git", "filesystem"]
};
function coerceDate(fp, d) {
  const dt = new Date(d);
  const invalidDate = isNaN(dt.getTime()) || dt.getTime() === 0;
  if (invalidDate && d !== void 0) {
    console.log(
      chalk.yellow(
        `
Warning: found invalid date "${d}" in \`${fp}\`. Supported formats: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date#date_time_string_format`
      )
    );
  }
  return invalidDate ? /* @__PURE__ */ new Date() : dt;
}
__name(coerceDate, "coerceDate");
var CreatedModifiedDate = /* @__PURE__ */ __name((userOpts) => {
  const opts = { ...defaultOptions3, ...userOpts };
  return {
    name: "CreatedModifiedDate",
    markdownPlugins() {
      return [
        () => {
          let repo = void 0;
          return async (_tree, file) => {
            let created = void 0;
            let modified = void 0;
            let published = void 0;
            const fp = file.data.filePath;
            const fullFp = path.posix.join(file.cwd, fp);
            for (const source of opts.priority) {
              if (source === "filesystem") {
                const st = await fs.promises.stat(fullFp);
                created ||= st.birthtimeMs;
                modified ||= st.mtimeMs;
              } else if (source === "frontmatter" && file.data.frontmatter) {
                created ||= file.data.frontmatter.date;
                modified ||= file.data.frontmatter.lastmod;
                modified ||= file.data.frontmatter.updated;
                modified ||= file.data.frontmatter["last-modified"];
                published ||= file.data.frontmatter.publishDate;
              } else if (source === "git") {
                if (!repo) {
                  repo = Repository.discover(file.cwd);
                }
                try {
                  modified ||= await repo.getFileLatestModifiedDateAsync(file.data.filePath);
                } catch {
                  console.log(
                    chalk.yellow(
                      `
Warning: ${file.data.filePath} isn't yet tracked by git, last modification date is not available for this file`
                    )
                  );
                }
              }
            }
            file.data.dates = {
              created: coerceDate(fp, created),
              modified: coerceDate(fp, modified),
              published: coerceDate(fp, published)
            };
          };
        }
      ];
    }
  };
}, "CreatedModifiedDate");

// quartz/plugins/transformers/latex.ts
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import rehypeMathjax from "rehype-mathjax/svg";
var Latex = /* @__PURE__ */ __name((opts) => {
  const engine = opts?.renderEngine ?? "katex";
  return {
    name: "Latex",
    markdownPlugins() {
      return [remarkMath];
    },
    htmlPlugins() {
      if (engine === "katex") {
        return [[rehypeKatex, { output: "html" }]];
      } else {
        return [rehypeMathjax];
      }
    },
    externalResources() {
      if (engine === "katex") {
        return {
          css: [
            // base css
            "https://cdn.jsdelivr.net/npm/katex@0.16.0/dist/katex.min.css"
          ],
          js: [
            {
              // fix copy behaviour: https://github.com/KaTeX/KaTeX/blob/main/contrib/copy-tex/README.md
              src: "https://cdn.jsdelivr.net/npm/katex@0.16.7/dist/contrib/copy-tex.min.js",
              loadTime: "afterDOMReady",
              contentType: "external"
            }
          ]
        };
      } else {
        return {};
      }
    }
  };
}, "Latex");

// quartz/plugins/transformers/description.ts
import { toString } from "hast-util-to-string";

// quartz/util/escape.ts
var escapeHTML = /* @__PURE__ */ __name((unsafe) => {
  return unsafe.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&#039;");
}, "escapeHTML");

// quartz/plugins/transformers/description.ts
var defaultOptions4 = {
  descriptionLength: 150
};
var Description = /* @__PURE__ */ __name((userOpts) => {
  const opts = { ...defaultOptions4, ...userOpts };
  return {
    name: "Description",
    htmlPlugins() {
      return [
        () => {
          return async (tree, file) => {
            const frontMatterDescription = file.data.frontmatter?.description;
            const text = escapeHTML(toString(tree));
            const desc = frontMatterDescription ?? text;
            const sentences = desc.replace(/\s+/g, " ").split(".");
            let finalDesc = "";
            let sentenceIdx = 0;
            const len = opts.descriptionLength;
            while (finalDesc.length < len) {
              const sentence = sentences[sentenceIdx];
              if (!sentence)
                break;
              finalDesc += sentence + ".";
              sentenceIdx++;
            }
            file.data.description = finalDesc;
            file.data.text = text;
          };
        }
      ];
    }
  };
}, "Description");

// quartz/plugins/transformers/links.ts
import path2 from "path";
import { visit } from "unist-util-visit";
import isAbsoluteUrl from "is-absolute-url";
var defaultOptions5 = {
  markdownLinkResolution: "absolute",
  prettyLinks: true,
  openLinksInNewTab: false,
  lazyLoad: false
};
var CrawlLinks = /* @__PURE__ */ __name((userOpts) => {
  const opts = { ...defaultOptions5, ...userOpts };
  return {
    name: "LinkProcessing",
    htmlPlugins(ctx) {
      return [
        () => {
          return (tree, file) => {
            const curSlug = simplifySlug(file.data.slug);
            const outgoing = /* @__PURE__ */ new Set();
            const transformOptions = {
              strategy: opts.markdownLinkResolution,
              allSlugs: ctx.allSlugs
            };
            visit(tree, "element", (node, _index, _parent) => {
              if (node.tagName === "a" && node.properties && typeof node.properties.href === "string") {
                let dest = node.properties.href;
                const classes = node.properties.className ?? [];
                classes.push(isAbsoluteUrl(dest) ? "external" : "internal");
                if (node.children.length === 1 && node.children[0].type === "text" && node.children[0].value !== dest) {
                  classes.push("alias");
                }
                node.properties.className = classes;
                if (opts.openLinksInNewTab) {
                  node.properties.target = "_blank";
                }
                const isInternal = !(isAbsoluteUrl(dest) || dest.startsWith("#"));
                if (isInternal) {
                  dest = node.properties.href = transformLink(
                    file.data.slug,
                    dest,
                    transformOptions
                  );
                  const url = new URL(dest, `https://base.com/${curSlug}`);
                  const canonicalDest = url.pathname;
                  let [destCanonical, _destAnchor] = splitAnchor(canonicalDest);
                  if (destCanonical.endsWith("/")) {
                    destCanonical += "index";
                  }
                  const full = decodeURIComponent(_stripSlashes(destCanonical, true));
                  const simple = simplifySlug(full);
                  outgoing.add(simple);
                  node.properties["data-slug"] = full;
                }
                if (opts.prettyLinks && isInternal && node.children.length === 1 && node.children[0].type === "text" && !node.children[0].value.startsWith("#")) {
                  node.children[0].value = path2.basename(node.children[0].value);
                }
              }
              if (["img", "video", "audio", "iframe"].includes(node.tagName) && node.properties && typeof node.properties.src === "string") {
                if (opts.lazyLoad) {
                  node.properties.loading = "lazy";
                }
                if (!isAbsoluteUrl(node.properties.src)) {
                  let dest = node.properties.src;
                  dest = node.properties.src = transformLink(
                    file.data.slug,
                    dest,
                    transformOptions
                  );
                  node.properties.src = dest;
                }
              }
            });
            file.data.links = [...outgoing];
          };
        }
      ];
    }
  };
}, "CrawlLinks");

// quartz/plugins/transformers/ofm.ts
import { findAndReplace as mdastFindReplace } from "mdast-util-find-and-replace";
import { slug as slugAnchor2 } from "github-slugger";
import rehypeRaw from "rehype-raw";
import { visit as visit2 } from "unist-util-visit";
import path3 from "path";

// quartz/components/scripts/callout.inline.ts
var callout_inline_default = "";

// quartz/plugins/transformers/ofm.ts
import { toHast } from "mdast-util-to-hast";
import { toHtml } from "hast-util-to-html";

// quartz/util/lang.ts
function pluralize(count, s) {
  if (count === 1) {
    return `1 ${s}`;
  } else {
    return `${count} ${s}s`;
  }
}
__name(pluralize, "pluralize");
function capitalize(s) {
  return s.substring(0, 1).toUpperCase() + s.substring(1);
}
__name(capitalize, "capitalize");

// quartz/plugins/transformers/ofm.ts
var defaultOptions6 = {
  comments: true,
  highlight: true,
  wikilinks: true,
  callouts: true,
  mermaid: true,
  parseTags: true,
  parseBlockReferences: true,
  enableInHtmlEmbed: false,
  enableYouTubeEmbed: false
};
var icons = {
  infoIcon: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>`,
  pencilIcon: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="2" x2="22" y2="6"></line><path d="M7.5 20.5 19 9l-4-4L3.5 16.5 2 22z"></path></svg>`,
  clipboardListIcon: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><path d="M12 11h4"></path><path d="M12 16h4"></path><path d="M8 11h.01"></path><path d="M8 16h.01"></path></svg>`,
  checkCircleIcon: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path><path d="m9 12 2 2 4-4"></path></svg>`,
  flameIcon: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"></path></svg>`,
  checkIcon: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>`,
  helpCircleIcon: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>`,
  alertTriangleIcon: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>`,
  xIcon: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`,
  zapIcon: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>`,
  bugIcon: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="8" height="14" x="8" y="6" rx="4"></rect><path d="m19 7-3 2"></path><path d="m5 7 3 2"></path><path d="m19 19-3-2"></path><path d="m5 19 3-2"></path><path d="M20 13h-4"></path><path d="M4 13h4"></path><path d="m10 4 1 2"></path><path d="m14 4-1 2"></path></svg>`,
  listIcon: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line></svg>`,
  quoteIcon: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path><path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"></path></svg>`
};
var callouts = {
  note: icons.pencilIcon,
  abstract: icons.clipboardListIcon,
  info: icons.infoIcon,
  todo: icons.checkCircleIcon,
  tip: icons.flameIcon,
  success: icons.checkIcon,
  question: icons.helpCircleIcon,
  warning: icons.alertTriangleIcon,
  failure: icons.xIcon,
  danger: icons.zapIcon,
  bug: icons.bugIcon,
  example: icons.listIcon,
  quote: icons.quoteIcon
};
var calloutMapping = {
  note: "note",
  abstract: "abstract",
  summary: "abstract",
  tldr: "abstract",
  info: "info",
  todo: "todo",
  tip: "tip",
  hint: "tip",
  important: "tip",
  success: "success",
  check: "success",
  done: "success",
  question: "question",
  help: "question",
  faq: "question",
  warning: "warning",
  attention: "warning",
  caution: "warning",
  failure: "failure",
  missing: "failure",
  fail: "failure",
  danger: "danger",
  error: "danger",
  bug: "bug",
  example: "example",
  quote: "quote",
  cite: "quote"
};
function canonicalizeCallout(calloutName) {
  let callout = calloutName.toLowerCase();
  return calloutMapping[callout] ?? "note";
}
__name(canonicalizeCallout, "canonicalizeCallout");
var externalLinkRegex = /^https?:\/\//i;
var wikilinkRegex = new RegExp(
  /!?\[\[([^\[\]\|\#]+)?(#+[^\[\]\|\#]+)?(\|[^\[\]\|\#]+)?\]\]/,
  "g"
);
var highlightRegex = new RegExp(/==([^=]+)==/, "g");
var commentRegex = new RegExp(/%%(.+)%%/, "g");
var calloutRegex = new RegExp(/^\[\!(\w+)\]([+-]?)/);
var calloutLineRegex = new RegExp(/^> *\[\!\w+\][+-]?.*$/, "gm");
var tagRegex = new RegExp(/(?:^| )#((?:[-_\p{L}\p{Emoji}\d])+(?:\/[-_\p{L}\p{Emoji}\d]+)*)/, "gu");
var blockReferenceRegex = new RegExp(/\^([A-Za-z0-9]+)$/, "g");
var ytLinkRegex = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
var ObsidianFlavoredMarkdown = /* @__PURE__ */ __name((userOpts) => {
  const opts = { ...defaultOptions6, ...userOpts };
  const mdastToHtml = /* @__PURE__ */ __name((ast) => {
    const hast = toHast(ast, { allowDangerousHtml: true });
    return toHtml(hast, { allowDangerousHtml: true });
  }, "mdastToHtml");
  return {
    name: "ObsidianFlavoredMarkdown",
    textTransform(_ctx, src) {
      if (opts.callouts) {
        if (src instanceof Buffer) {
          src = src.toString();
        }
        src = src.replaceAll(calloutLineRegex, (value) => {
          return value + "\n> ";
        });
      }
      if (opts.wikilinks) {
        if (src instanceof Buffer) {
          src = src.toString();
        }
        src = src.replaceAll(wikilinkRegex, (value, ...capture) => {
          const [rawFp, rawHeader, rawAlias] = capture;
          const fp = rawFp ?? "";
          const anchor = rawHeader?.trim().replace(/^#+/, "");
          const blockRef = Boolean(anchor?.startsWith("^")) ? "^" : "";
          const displayAnchor = anchor ? `#${blockRef}${slugAnchor2(anchor)}` : "";
          const displayAlias = rawAlias ?? rawHeader?.replace("#", "|") ?? "";
          const embedDisplay = value.startsWith("!") ? "!" : "";
          if (rawFp?.match(externalLinkRegex)) {
            return `${embedDisplay}[${displayAlias.replace(/^\|/, "")}](${rawFp})`;
          }
          return `${embedDisplay}[[${fp}${displayAnchor}${displayAlias}]]`;
        });
      }
      return src;
    },
    markdownPlugins() {
      const plugins = [];
      plugins.push(() => {
        return (tree, file) => {
          const replacements = [];
          const base = pathToRoot(file.data.slug);
          if (opts.wikilinks) {
            replacements.push([
              wikilinkRegex,
              (value, ...capture) => {
                let [rawFp, rawHeader, rawAlias] = capture;
                const fp = rawFp?.trim() ?? "";
                const anchor = rawHeader?.trim() ?? "";
                const alias = rawAlias?.slice(1).trim();
                if (value.startsWith("!")) {
                  const ext = path3.extname(fp).toLowerCase();
                  const url2 = slugifyFilePath(fp);
                  if ([".png", ".jpg", ".jpeg", ".gif", ".bmp", ".svg", ".webp"].includes(ext)) {
                    const dims = alias ?? "";
                    let [width, height] = dims.split("x", 2);
                    width ||= "auto";
                    height ||= "auto";
                    return {
                      type: "image",
                      url: url2,
                      data: {
                        hProperties: {
                          width,
                          height
                        }
                      }
                    };
                  } else if ([".mp4", ".webm", ".ogv", ".mov", ".mkv"].includes(ext)) {
                    return {
                      type: "html",
                      value: `<video src="${url2}" controls></video>`
                    };
                  } else if ([".mp3", ".webm", ".wav", ".m4a", ".ogg", ".3gp", ".flac"].includes(ext)) {
                    return {
                      type: "html",
                      value: `<audio src="${url2}" controls></audio>`
                    };
                  } else if ([".pdf"].includes(ext)) {
                    return {
                      type: "html",
                      value: `<iframe src="${url2}"></iframe>`
                    };
                  } else if (ext === "") {
                    const block = anchor;
                    return {
                      type: "html",
                      data: { hProperties: { transclude: true } },
                      value: `<blockquote class="transclude" data-url="${url2}" data-block="${block}"><a href="${url2 + anchor}" class="transclude-inner">Transclude of ${url2}${block}</a></blockquote>`
                    };
                  }
                }
                const url = fp + anchor;
                return {
                  type: "link",
                  url,
                  children: [
                    {
                      type: "text",
                      value: alias ?? fp
                    }
                  ]
                };
              }
            ]);
          }
          if (opts.highlight) {
            replacements.push([
              highlightRegex,
              (_value, ...capture) => {
                const [inner] = capture;
                return {
                  type: "html",
                  value: `<span class="text-highlight">${inner}</span>`
                };
              }
            ]);
          }
          if (opts.comments) {
            replacements.push([
              commentRegex,
              (_value, ..._capture) => {
                return {
                  type: "text",
                  value: ""
                };
              }
            ]);
          }
          if (opts.parseTags) {
            replacements.push([
              tagRegex,
              (_value, tag) => {
                if (/^\d+$/.test(tag)) {
                  return false;
                }
                tag = slugTag(tag);
                if (file.data.frontmatter && !file.data.frontmatter.tags.includes(tag)) {
                  file.data.frontmatter.tags.push(tag);
                }
                return {
                  type: "link",
                  url: base + `/tags/${tag}`,
                  data: {
                    hProperties: {
                      className: ["tag-link"]
                    }
                  },
                  children: [
                    {
                      type: "text",
                      value: `#${tag}`
                    }
                  ]
                };
              }
            ]);
          }
          if (opts.enableInHtmlEmbed) {
            visit2(tree, "html", (node) => {
              for (const [regex, replace] of replacements) {
                if (typeof replace === "string") {
                  node.value = node.value.replace(regex, replace);
                } else {
                  node.value = node.value.replaceAll(regex, (substring, ...args) => {
                    const replaceValue = replace(substring, ...args);
                    if (typeof replaceValue === "string") {
                      return replaceValue;
                    } else if (Array.isArray(replaceValue)) {
                      return replaceValue.map(mdastToHtml).join("");
                    } else if (typeof replaceValue === "object" && replaceValue !== null) {
                      return mdastToHtml(replaceValue);
                    } else {
                      return substring;
                    }
                  });
                }
              }
            });
          }
          mdastFindReplace(tree, replacements);
        };
      });
      if (opts.callouts) {
        plugins.push(() => {
          return (tree, _file) => {
            visit2(tree, "blockquote", (node) => {
              if (node.children.length === 0) {
                return;
              }
              const firstChild = node.children[0];
              if (firstChild.type !== "paragraph" || firstChild.children[0]?.type !== "text") {
                return;
              }
              const text = firstChild.children[0].value;
              const restChildren = firstChild.children.slice(1);
              const [firstLine, ...remainingLines] = text.split("\n");
              const remainingText = remainingLines.join("\n");
              const match = firstLine.match(calloutRegex);
              if (match && match.input) {
                const [calloutDirective, typeString, collapseChar] = match;
                const calloutType = canonicalizeCallout(
                  typeString.toLowerCase()
                );
                const collapse = collapseChar === "+" || collapseChar === "-";
                const defaultState = collapseChar === "-" ? "collapsed" : "expanded";
                const titleContent = match.input.slice(calloutDirective.length).trim() || capitalize(calloutType);
                const titleNode = {
                  type: "paragraph",
                  children: [{ type: "text", value: titleContent + " " }, ...restChildren]
                };
                const title = mdastToHtml(titleNode);
                const toggleIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="fold">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>`;
                const titleHtml = {
                  type: "html",
                  value: `<div
                  class="callout-title"
                >
                  <div class="callout-icon">${callouts[calloutType]}</div>
                  <div class="callout-title-inner">${title}</div>
                  ${collapse ? toggleIcon : ""}
                </div>`
                };
                const blockquoteContent = [titleHtml];
                if (remainingText.length > 0) {
                  blockquoteContent.push({
                    type: "paragraph",
                    children: [
                      {
                        type: "text",
                        value: remainingText
                      }
                    ]
                  });
                }
                node.children.splice(0, 1, ...blockquoteContent);
                node.data = {
                  hProperties: {
                    ...node.data?.hProperties ?? {},
                    className: `callout ${collapse ? "is-collapsible" : ""} ${defaultState === "collapsed" ? "is-collapsed" : ""}`,
                    "data-callout": calloutType,
                    "data-callout-fold": collapse
                  }
                };
              }
            });
          };
        });
      }
      if (opts.mermaid) {
        plugins.push(() => {
          return (tree, _file) => {
            visit2(tree, "code", (node) => {
              if (node.lang === "mermaid") {
                node.data = {
                  hProperties: {
                    className: ["mermaid"]
                  }
                };
              }
            });
          };
        });
      }
      return plugins;
    },
    htmlPlugins() {
      const plugins = [rehypeRaw];
      if (opts.parseBlockReferences) {
        plugins.push(() => {
          const inlineTagTypes = /* @__PURE__ */ new Set(["p", "li"]);
          const blockTagTypes = /* @__PURE__ */ new Set(["blockquote"]);
          return (tree, file) => {
            file.data.blocks = {};
            visit2(tree, "element", (node, index, parent) => {
              if (blockTagTypes.has(node.tagName)) {
                const nextChild = parent?.children.at(index + 2);
                if (nextChild && nextChild.tagName === "p") {
                  const text = nextChild.children.at(0);
                  if (text && text.value && text.type === "text") {
                    const matches = text.value.match(blockReferenceRegex);
                    if (matches && matches.length >= 1) {
                      parent.children.splice(index + 2, 1);
                      const block = matches[0].slice(1);
                      if (!Object.keys(file.data.blocks).includes(block)) {
                        node.properties = {
                          ...node.properties,
                          id: block
                        };
                        file.data.blocks[block] = node;
                      }
                    }
                  }
                }
              } else if (inlineTagTypes.has(node.tagName)) {
                const last = node.children.at(-1);
                if (last && last.value && typeof last.value === "string") {
                  const matches = last.value.match(blockReferenceRegex);
                  if (matches && matches.length >= 1) {
                    last.value = last.value.slice(0, -matches[0].length);
                    const block = matches[0].slice(1);
                    if (!Object.keys(file.data.blocks).includes(block)) {
                      node.properties = {
                        ...node.properties,
                        id: block
                      };
                      file.data.blocks[block] = node;
                    }
                  }
                }
              }
            });
            file.data.htmlAst = tree;
          };
        });
      }
      if (opts.enableYouTubeEmbed) {
        plugins.push(() => {
          return (tree) => {
            visit2(tree, "element", (node) => {
              if (node.tagName === "img" && typeof node.properties.src === "string") {
                const match = node.properties.src.match(ytLinkRegex);
                const videoId = match && match[2].length == 11 ? match[2] : null;
                if (videoId) {
                  node.tagName = "iframe";
                  node.properties = {
                    class: "external-embed",
                    allow: "fullscreen",
                    frameborder: 0,
                    width: "600px",
                    height: "350px",
                    src: `https://www.youtube.com/embed/${videoId}`
                  };
                }
              }
            });
          };
        });
      }
      return plugins;
    },
    externalResources() {
      const js = [];
      if (opts.callouts) {
        js.push({
          script: callout_inline_default,
          loadTime: "afterDOMReady",
          contentType: "inline"
        });
      }
      if (opts.mermaid) {
        js.push({
          script: `
          import mermaid from 'https://cdn.jsdelivr.net/npm/mermaid/dist/mermaid.esm.min.mjs';
          const darkMode = document.documentElement.getAttribute('saved-theme') === 'dark'
          mermaid.initialize({
            startOnLoad: false,
            securityLevel: 'loose',
            theme: darkMode ? 'dark' : 'default'
          });
          document.addEventListener('nav', async () => {
            await mermaid.run({
              querySelector: '.mermaid'
            })
          });
          `,
          loadTime: "afterDOMReady",
          moduleType: "module",
          contentType: "inline"
        });
      }
      return { js };
    }
  };
}, "ObsidianFlavoredMarkdown");

// quartz/plugins/transformers/oxhugofm.ts
var relrefRegex = new RegExp(/\[([^\]]+)\]\(\{\{< relref "([^"]+)" >\}\}\)/, "g");
var predefinedHeadingIdRegex = new RegExp(/(.*) {#(?:.*)}/, "g");
var hugoShortcodeRegex = new RegExp(/{{(.*)}}/, "g");
var figureTagRegex = new RegExp(/< ?figure src="(.*)" ?>/, "g");
var inlineLatexRegex = new RegExp(/\\\\\((.+?)\\\\\)/, "g");
var blockLatexRegex = new RegExp(
  /(?:\\begin{equation}|\\\\\(|\\\\\[)([\s\S]*?)(?:\\\\\]|\\\\\)|\\end{equation})/,
  "g"
);
var quartzLatexRegex = new RegExp(/\$\$[\s\S]*?\$\$|\$.*?\$/, "g");

// quartz/plugins/transformers/syntax.ts
import rehypePrettyCode from "rehype-pretty-code";
var SyntaxHighlighting = /* @__PURE__ */ __name(() => ({
  name: "SyntaxHighlighting",
  htmlPlugins() {
    return [
      [
        rehypePrettyCode,
        {
          keepBackground: false,
          theme: {
            dark: "github-dark",
            light: "github-light"
          }
        }
      ]
    ];
  }
}), "SyntaxHighlighting");

// quartz/plugins/transformers/toc.ts
import { visit as visit3 } from "unist-util-visit";
import { toString as toString2 } from "mdast-util-to-string";
import Slugger from "github-slugger";
var defaultOptions7 = {
  maxDepth: 3,
  minEntries: 1,
  showByDefault: true,
  collapseByDefault: false
};
var regexMdLinks = new RegExp(/\[([^\[]+)\](\(.*\))/, "g");
var TableOfContents = /* @__PURE__ */ __name((userOpts) => {
  const opts = { ...defaultOptions7, ...userOpts };
  return {
    name: "TableOfContents",
    markdownPlugins() {
      return [
        () => {
          return async (tree, file) => {
            const display = file.data.frontmatter?.enableToc ?? opts.showByDefault;
            if (display) {
              const slugAnchor3 = new Slugger();
              const toc = [];
              let highestDepth = opts.maxDepth;
              visit3(tree, "heading", (node) => {
                if (node.depth <= opts.maxDepth) {
                  let text = toString2(node);
                  text = text.replace(wikilinkRegex, (_, rawFp, __, rawAlias) => {
                    const fp = rawFp?.trim() ?? "";
                    const alias = rawAlias?.slice(1).trim();
                    return alias ?? fp;
                  });
                  text = text.replace(regexMdLinks, "$1");
                  highestDepth = Math.min(highestDepth, node.depth);
                  toc.push({
                    depth: node.depth,
                    text,
                    slug: slugAnchor3.slug(text)
                  });
                }
              });
              if (toc.length > opts.minEntries) {
                file.data.toc = toc.map((entry) => ({
                  ...entry,
                  depth: entry.depth - highestDepth
                }));
                file.data.collapseToc = opts.collapseByDefault;
              }
            }
          };
        }
      ];
    }
  };
}, "TableOfContents");

// quartz/plugins/transformers/linebreaks.ts
import remarkBreaks from "remark-breaks";

// quartz/plugins/filters/draft.ts
var RemoveDrafts = /* @__PURE__ */ __name(() => ({
  name: "RemoveDrafts",
  shouldPublish(_ctx, [_tree, vfile]) {
    const draftFlag = vfile.data?.frontmatter?.draft ?? false;
    return !draftFlag;
  }
}), "RemoveDrafts");

// quartz/components/Header.tsx
import { jsx } from "preact/jsx-runtime";
function Header({ children }) {
  return children.length > 0 ? /* @__PURE__ */ jsx("header", { children }) : null;
}
__name(Header, "Header");
Header.css = `
header {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 2rem 0;
  gap: 1.5rem;
}

header h1 {
  margin: 0;
  flex: auto;
}
`;
var Header_default = /* @__PURE__ */ __name(() => Header, "default");

// quartz/components/scripts/clipboard.inline.ts
var clipboard_inline_default = "";

// quartz/components/styles/clipboard.scss
var clipboard_default = "";

// quartz/components/Body.tsx
import { jsx as jsx2 } from "preact/jsx-runtime";
function Body({ children }) {
  return /* @__PURE__ */ jsx2("div", { id: "quartz-body", children });
}
__name(Body, "Body");
Body.afterDOMLoaded = clipboard_inline_default;
Body.css = clipboard_default;
var Body_default = /* @__PURE__ */ __name(() => Body, "default");

// quartz/components/renderPage.tsx
import { render } from "preact-render-to-string";

// quartz/util/resources.tsx
import { randomUUID } from "crypto";
import { jsx as jsx3 } from "preact/jsx-runtime";
function JSResourceToScriptElement(resource, preserve) {
  const scriptType = resource.moduleType ?? "application/javascript";
  const spaPreserve = preserve ?? resource.spaPreserve;
  if (resource.contentType === "external") {
    return /* @__PURE__ */ jsx3("script", { src: resource.src, type: scriptType, "spa-preserve": spaPreserve }, resource.src);
  } else {
    const content = resource.script;
    return /* @__PURE__ */ jsx3(
      "script",
      {
        type: scriptType,
        "spa-preserve": spaPreserve,
        dangerouslySetInnerHTML: { __html: content }
      },
      randomUUID()
    );
  }
}
__name(JSResourceToScriptElement, "JSResourceToScriptElement");

// quartz/components/renderPage.tsx
import { visit as visit4 } from "unist-util-visit";
import { jsx as jsx4, jsxs } from "preact/jsx-runtime";
function pageResources(baseDir, staticResources) {
  const contentIndexPath = joinSegments(baseDir, "static/contentIndex.json");
  const contentIndexScript = `const fetchData = fetch("${contentIndexPath}").then(data => data.json())`;
  return {
    css: [joinSegments(baseDir, "index.css"), ...staticResources.css],
    js: [
      {
        src: joinSegments(baseDir, "prescript.js"),
        loadTime: "beforeDOMReady",
        contentType: "external"
      },
      {
        loadTime: "beforeDOMReady",
        contentType: "inline",
        spaPreserve: true,
        script: contentIndexScript
      },
      ...staticResources.js,
      {
        src: joinSegments(baseDir, "postscript.js"),
        loadTime: "afterDOMReady",
        moduleType: "module",
        contentType: "external"
      }
    ]
  };
}
__name(pageResources, "pageResources");
var pageIndex = void 0;
function getOrComputeFileIndex(allFiles) {
  if (!pageIndex) {
    pageIndex = /* @__PURE__ */ new Map();
    for (const file of allFiles) {
      pageIndex.set(file.slug, file);
    }
  }
  return pageIndex;
}
__name(getOrComputeFileIndex, "getOrComputeFileIndex");
function renderPage(slug, componentData, components, pageResources2) {
  visit4(componentData.tree, "element", (node, _index, _parent) => {
    if (node.tagName === "blockquote") {
      const classNames = node.properties?.className ?? [];
      if (classNames.includes("transclude")) {
        const inner = node.children[0];
        const transcludeTarget = inner.properties["data-slug"];
        const page = getOrComputeFileIndex(componentData.allFiles).get(transcludeTarget);
        if (!page) {
          return;
        }
        let blockRef = node.properties.dataBlock;
        if (blockRef?.startsWith("#^")) {
          blockRef = blockRef.slice("#^".length);
          let blockNode = page.blocks?.[blockRef];
          if (blockNode) {
            if (blockNode.tagName === "li") {
              blockNode = {
                type: "element",
                tagName: "ul",
                properties: {},
                children: [blockNode]
              };
            }
            node.children = [
              normalizeHastElement(blockNode, slug, transcludeTarget),
              {
                type: "element",
                tagName: "a",
                properties: { href: inner.properties?.href, class: ["internal"] },
                children: [{ type: "text", value: `Link to original` }]
              }
            ];
          }
        } else if (blockRef?.startsWith("#") && page.htmlAst) {
          blockRef = blockRef.slice(1);
          let startIdx = void 0;
          let endIdx = void 0;
          for (const [i, el] of page.htmlAst.children.entries()) {
            if (el.type === "element" && el.tagName.match(/h[1-6]/)) {
              if (endIdx) {
                break;
              }
              if (startIdx !== void 0) {
                endIdx = i;
              } else if (el.properties?.id === blockRef) {
                startIdx = i;
              }
            }
          }
          if (startIdx === void 0) {
            return;
          }
          node.children = [
            ...page.htmlAst.children.slice(startIdx, endIdx).map(
              (child) => normalizeHastElement(child, slug, transcludeTarget)
            ),
            {
              type: "element",
              tagName: "a",
              properties: { href: inner.properties?.href, class: ["internal"] },
              children: [{ type: "text", value: `Link to original` }]
            }
          ];
        } else if (page.htmlAst) {
          node.children = [
            {
              type: "element",
              tagName: "h1",
              properties: {},
              children: [
                { type: "text", value: page.frontmatter?.title ?? `Transclude of ${page.slug}` }
              ]
            },
            ...page.htmlAst.children.map(
              (child) => normalizeHastElement(child, slug, transcludeTarget)
            ),
            {
              type: "element",
              tagName: "a",
              properties: { href: inner.properties?.href, class: ["internal"] },
              children: [{ type: "text", value: `Link to original` }]
            }
          ];
        }
      }
    }
  });
  const {
    head: Head,
    header,
    beforeBody,
    pageBody: Content2,
    left,
    right,
    footer: Footer
  } = components;
  const Header2 = Header_default();
  const Body2 = Body_default();
  const LeftComponent = /* @__PURE__ */ jsx4("div", { class: "left sidebar", children: left.map((BodyComponent) => /* @__PURE__ */ jsx4(BodyComponent, { ...componentData })) });
  const RightComponent = /* @__PURE__ */ jsx4("div", { class: "right sidebar", children: right.map((BodyComponent) => /* @__PURE__ */ jsx4(BodyComponent, { ...componentData })) });
  const doc = /* @__PURE__ */ jsxs("html", { children: [
    /* @__PURE__ */ jsx4(Head, { ...componentData }),
    /* @__PURE__ */ jsx4("body", { "data-slug": slug, children: /* @__PURE__ */ jsxs("div", { id: "quartz-root", class: "page", children: [
      /* @__PURE__ */ jsxs(Body2, { ...componentData, children: [
        LeftComponent,
        /* @__PURE__ */ jsxs("div", { class: "center", children: [
          /* @__PURE__ */ jsxs("div", { class: "page-header", children: [
            /* @__PURE__ */ jsx4(Header2, { ...componentData, children: header.map((HeaderComponent) => /* @__PURE__ */ jsx4(HeaderComponent, { ...componentData })) }),
            /* @__PURE__ */ jsx4("div", { class: "popover-hint", children: slug !== "index" && beforeBody.map((BodyComponent) => /* @__PURE__ */ jsx4(BodyComponent, { ...componentData })) })
          ] }),
          /* @__PURE__ */ jsx4(Content2, { ...componentData })
        ] }),
        RightComponent
      ] }),
      /* @__PURE__ */ jsx4(Footer, { ...componentData })
    ] }) }),
    pageResources2.js.filter((resource) => resource.loadTime === "afterDOMReady").map((res) => JSResourceToScriptElement(res))
  ] });
  return "<!DOCTYPE html>\n" + render(doc);
}
__name(renderPage, "renderPage");

// quartz/util/jsx.tsx
import { toJsxRuntime } from "hast-util-to-jsx-runtime";
import { Fragment, jsx as jsx5, jsxs as jsxs2 } from "preact/jsx-runtime";

// quartz/util/trace.ts
import chalk2 from "chalk";
import process2 from "process";
import { isMainThread } from "workerpool";
var rootFile = /.*at file:/;
function trace(msg, err) {
  let stack = err.stack ?? "";
  const lines = [];
  lines.push("");
  lines.push(
    "\n" + chalk2.bgRed.black.bold(" ERROR ") + "\n\n" + chalk2.red(` ${msg}`) + (err.message.length > 0 ? `: ${err.message}` : "")
  );
  let reachedEndOfLegibleTrace = false;
  for (const line of stack.split("\n").slice(1)) {
    if (reachedEndOfLegibleTrace) {
      break;
    }
    if (!line.includes("node_modules")) {
      lines.push(` ${line}`);
      if (rootFile.test(line)) {
        reachedEndOfLegibleTrace = true;
      }
    }
  }
  const traceMsg = lines.join("\n");
  if (!isMainThread) {
    throw new Error(traceMsg);
  } else {
    console.error(traceMsg);
    process2.exit(1);
  }
}
__name(trace, "trace");

// quartz/util/jsx.tsx
import { jsx as jsx6 } from "preact/jsx-runtime";
var customComponents = {
  table: (props) => /* @__PURE__ */ jsx6("div", { class: "table-container", children: /* @__PURE__ */ jsx6("table", { ...props }) })
};
function htmlToJsx(fp, tree) {
  try {
    return toJsxRuntime(tree, {
      Fragment,
      jsx: jsx5,
      jsxs: jsxs2,
      elementAttributeNameCase: "html",
      components: customComponents
    });
  } catch (e) {
    trace(`Failed to parse Markdown in \`${fp}\` into JSX`, e);
  }
}
__name(htmlToJsx, "htmlToJsx");

// quartz/components/pages/Content.tsx
import { jsx as jsx7 } from "preact/jsx-runtime";
function Content({ fileData, tree }) {
  const content = htmlToJsx(fileData.filePath, tree);
  return /* @__PURE__ */ jsx7("article", { class: "popover-hint", children: content });
}
__name(Content, "Content");
var Content_default = /* @__PURE__ */ __name(() => Content, "default");

// quartz/components/styles/listPage.scss
var listPage_default = "";

// quartz/components/Date.tsx
import { Fragment as Fragment2, jsx as jsx8 } from "preact/jsx-runtime";
function getDate(cfg, data) {
  if (!cfg.defaultDateType) {
    throw new Error(
      `Field 'defaultDateType' was not set in the configuration object of quartz.config.ts. See https://quartz.jzhao.xyz/configuration#general-configuration for more details.`
    );
  }
  return data.dates?.[cfg.defaultDateType];
}
__name(getDate, "getDate");
function formatDate(d) {
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "2-digit"
  });
}
__name(formatDate, "formatDate");
function Date2({ date }) {
  return /* @__PURE__ */ jsx8(Fragment2, { children: formatDate(date) });
}
__name(Date2, "Date");

// quartz/components/PageList.tsx
import { jsx as jsx9, jsxs as jsxs3 } from "preact/jsx-runtime";
function byDateAndAlphabetical(cfg) {
  return (f1, f2) => {
    if (f1.dates && f2.dates) {
      return getDate(cfg, f2).getTime() - getDate(cfg, f1).getTime();
    } else if (f1.dates && !f2.dates) {
      return -1;
    } else if (!f1.dates && f2.dates) {
      return 1;
    }
    const f1Title = f1.frontmatter?.title.toLowerCase() ?? "";
    const f2Title = f2.frontmatter?.title.toLowerCase() ?? "";
    return f1Title.localeCompare(f2Title);
  };
}
__name(byDateAndAlphabetical, "byDateAndAlphabetical");
function PageList({ cfg, fileData, allFiles, limit }) {
  let list = allFiles.sort(byDateAndAlphabetical(cfg));
  if (limit) {
    list = list.slice(0, limit);
  }
  return /* @__PURE__ */ jsx9("ul", { class: "section-ul", children: list.map((page) => {
    const title = page.frontmatter?.title;
    const tags = page.frontmatter?.tags ?? [];
    return /* @__PURE__ */ jsx9("li", { class: "section-li", children: /* @__PURE__ */ jsxs3("div", { class: "section", children: [
      page.dates && /* @__PURE__ */ jsx9("p", { class: "meta", children: /* @__PURE__ */ jsx9(Date2, { date: getDate(cfg, page) }) }),
      /* @__PURE__ */ jsx9("div", { class: "desc", children: /* @__PURE__ */ jsx9("h3", { children: /* @__PURE__ */ jsx9("a", { href: resolveRelative(fileData.slug, page.slug), class: "internal", children: title }) }) }),
      /* @__PURE__ */ jsx9("ul", { class: "tags", children: tags.map((tag) => /* @__PURE__ */ jsx9("li", { children: /* @__PURE__ */ jsxs3(
        "a",
        {
          class: "internal tag-link",
          href: resolveRelative(fileData.slug, `tags/${tag}`),
          children: [
            "#",
            tag
          ]
        }
      ) })) })
    ] }) });
  }) });
}
__name(PageList, "PageList");
PageList.css = `
.section h3 {
  margin: 0;
}

.section > .tags {
  margin: 0;
}
`;

// quartz/components/pages/TagContent.tsx
import { jsx as jsx10, jsxs as jsxs4 } from "preact/jsx-runtime";
var numPages = 10;
function TagContent(props) {
  const { tree, fileData, allFiles } = props;
  const slug = fileData.slug;
  if (!(slug?.startsWith("tags/") || slug === "tags")) {
    throw new Error(`Component "TagContent" tried to render a non-tag page: ${slug}`);
  }
  const tag = simplifySlug(slug.slice("tags/".length));
  const allPagesWithTag = /* @__PURE__ */ __name((tag2) => allFiles.filter(
    (file) => (file.frontmatter?.tags ?? []).flatMap(getAllSegmentPrefixes).includes(tag2)
  ), "allPagesWithTag");
  const content = tree.children.length === 0 ? fileData.description : htmlToJsx(fileData.filePath, tree);
  if (tag === "/") {
    const tags = [
      ...new Set(
        allFiles.flatMap((data) => data.frontmatter?.tags ?? []).flatMap(getAllSegmentPrefixes)
      )
    ].sort((a, b) => a.localeCompare(b));
    const tagItemMap = /* @__PURE__ */ new Map();
    for (const tag2 of tags) {
      tagItemMap.set(tag2, allPagesWithTag(tag2));
    }
    return /* @__PURE__ */ jsxs4("div", { class: "popover-hint", children: [
      /* @__PURE__ */ jsx10("article", { children: /* @__PURE__ */ jsx10("p", { children: content }) }),
      /* @__PURE__ */ jsxs4("p", { children: [
        "Found ",
        tags.length,
        " total tags."
      ] }),
      /* @__PURE__ */ jsx10("div", { children: tags.map((tag2) => {
        const pages = tagItemMap.get(tag2);
        const listProps = {
          ...props,
          allFiles: pages
        };
        const contentPage = allFiles.filter((file) => file.slug === `tags/${tag2}`)[0];
        const content2 = contentPage?.description;
        return /* @__PURE__ */ jsxs4("div", { children: [
          /* @__PURE__ */ jsx10("h2", { children: /* @__PURE__ */ jsxs4("a", { class: "internal tag-link", href: `../tags/${tag2}`, children: [
            "#",
            tag2
          ] }) }),
          content2 && /* @__PURE__ */ jsx10("p", { children: content2 }),
          /* @__PURE__ */ jsxs4("p", { children: [
            pluralize(pages.length, "item"),
            " with this tag.",
            " ",
            pages.length > numPages && `Showing first ${numPages}.`
          ] }),
          /* @__PURE__ */ jsx10(PageList, { limit: numPages, ...listProps })
        ] });
      }) })
    ] });
  } else {
    const pages = allPagesWithTag(tag);
    const listProps = {
      ...props,
      allFiles: pages
    };
    return /* @__PURE__ */ jsxs4("div", { class: "popover-hint", children: [
      /* @__PURE__ */ jsx10("article", { children: content }),
      /* @__PURE__ */ jsxs4("p", { children: [
        pluralize(pages.length, "item"),
        " with this tag."
      ] }),
      /* @__PURE__ */ jsx10("div", { children: /* @__PURE__ */ jsx10(PageList, { ...listProps }) })
    ] });
  }
}
__name(TagContent, "TagContent");
TagContent.css = listPage_default + PageList.css;
var TagContent_default = /* @__PURE__ */ __name(() => TagContent, "default");

// quartz/components/pages/FolderContent.tsx
import path4 from "path";
import { jsx as jsx11, jsxs as jsxs5 } from "preact/jsx-runtime";
function FolderContent(props) {
  const { tree, fileData, allFiles } = props;
  const folderSlug = _stripSlashes(simplifySlug(fileData.slug));
  const allPagesInFolder = allFiles.filter((file) => {
    const fileSlug = _stripSlashes(simplifySlug(file.slug));
    const prefixed = fileSlug.startsWith(folderSlug) && fileSlug !== folderSlug;
    const folderParts = folderSlug.split(path4.posix.sep);
    const fileParts = fileSlug.split(path4.posix.sep);
    const isDirectChild = fileParts.length === folderParts.length + 1;
    return prefixed && isDirectChild;
  });
  const listProps = {
    ...props,
    allFiles: allPagesInFolder
  };
  const content = tree.children.length === 0 ? fileData.description : htmlToJsx(fileData.filePath, tree);
  return /* @__PURE__ */ jsxs5("div", { class: "popover-hint", children: [
    /* @__PURE__ */ jsx11("article", { children: /* @__PURE__ */ jsx11("p", { children: content }) }),
    /* @__PURE__ */ jsxs5("p", { children: [
      pluralize(allPagesInFolder.length, "item"),
      " under this folder."
    ] }),
    /* @__PURE__ */ jsx11("div", { children: /* @__PURE__ */ jsx11(PageList, { ...listProps }) })
  ] });
}
__name(FolderContent, "FolderContent");
FolderContent.css = listPage_default + PageList.css;
var FolderContent_default = /* @__PURE__ */ __name(() => FolderContent, "default");

// quartz/components/pages/404.tsx
import { jsx as jsx12, jsxs as jsxs6 } from "preact/jsx-runtime";
function NotFound() {
  return /* @__PURE__ */ jsxs6("article", { class: "popover-hint", children: [
    /* @__PURE__ */ jsx12("h1", { children: "404" }),
    /* @__PURE__ */ jsx12("p", { children: "Either this page is private or doesn't exist." })
  ] });
}
__name(NotFound, "NotFound");
var __default = /* @__PURE__ */ __name(() => NotFound, "default");

// quartz/components/ArticleTitle.tsx
import { jsx as jsx13 } from "preact/jsx-runtime";
function ArticleTitle({ fileData, displayClass }) {
  const title = fileData.frontmatter?.title;
  if (title) {
    return /* @__PURE__ */ jsx13("h1", { class: `article-title ${displayClass ?? ""}`, children: title });
  } else {
    return null;
  }
}
__name(ArticleTitle, "ArticleTitle");
ArticleTitle.css = `
.article-title {
  margin: 2rem 0 0 0;
}
`;
var ArticleTitle_default = /* @__PURE__ */ __name(() => ArticleTitle, "default");

// quartz/components/scripts/darkmode.inline.ts
var darkmode_inline_default = "";

// quartz/components/styles/darkmode.scss
var darkmode_default = "";

// quartz/components/Darkmode.tsx
import { jsx as jsx14, jsxs as jsxs7 } from "preact/jsx-runtime";
function Darkmode({ displayClass }) {
  return /* @__PURE__ */ jsxs7("div", { class: `darkmode ${displayClass ?? ""}`, children: [
    /* @__PURE__ */ jsx14("input", { class: "toggle", id: "darkmode-toggle", type: "checkbox", tabIndex: -1 }),
    /* @__PURE__ */ jsx14("label", { id: "toggle-label-light", for: "darkmode-toggle", tabIndex: -1, children: /* @__PURE__ */ jsxs7(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        xmlnsXlink: "http://www.w3.org/1999/xlink",
        version: "1.1",
        id: "dayIcon",
        x: "0px",
        y: "0px",
        viewBox: "0 0 35 35",
        style: "enable-background:new 0 0 35 35",
        xmlSpace: "preserve",
        children: [
          /* @__PURE__ */ jsx14("title", { children: "Light mode" }),
          /* @__PURE__ */ jsx14("path", { d: "M6,17.5C6,16.672,5.328,16,4.5,16h-3C0.672,16,0,16.672,0,17.5    S0.672,19,1.5,19h3C5.328,19,6,18.328,6,17.5z M7.5,26c-0.414,0-0.789,0.168-1.061,0.439l-2,2C4.168,28.711,4,29.086,4,29.5    C4,30.328,4.671,31,5.5,31c0.414,0,0.789-0.168,1.06-0.44l2-2C8.832,28.289,9,27.914,9,27.5C9,26.672,8.329,26,7.5,26z M17.5,6    C18.329,6,19,5.328,19,4.5v-3C19,0.672,18.329,0,17.5,0S16,0.672,16,1.5v3C16,5.328,16.671,6,17.5,6z M27.5,9    c0.414,0,0.789-0.168,1.06-0.439l2-2C30.832,6.289,31,5.914,31,5.5C31,4.672,30.329,4,29.5,4c-0.414,0-0.789,0.168-1.061,0.44    l-2,2C26.168,6.711,26,7.086,26,7.5C26,8.328,26.671,9,27.5,9z M6.439,8.561C6.711,8.832,7.086,9,7.5,9C8.328,9,9,8.328,9,7.5    c0-0.414-0.168-0.789-0.439-1.061l-2-2C6.289,4.168,5.914,4,5.5,4C4.672,4,4,4.672,4,5.5c0,0.414,0.168,0.789,0.439,1.06    L6.439,8.561z M33.5,16h-3c-0.828,0-1.5,0.672-1.5,1.5s0.672,1.5,1.5,1.5h3c0.828,0,1.5-0.672,1.5-1.5S34.328,16,33.5,16z     M28.561,26.439C28.289,26.168,27.914,26,27.5,26c-0.828,0-1.5,0.672-1.5,1.5c0,0.414,0.168,0.789,0.439,1.06l2,2    C28.711,30.832,29.086,31,29.5,31c0.828,0,1.5-0.672,1.5-1.5c0-0.414-0.168-0.789-0.439-1.061L28.561,26.439z M17.5,29    c-0.829,0-1.5,0.672-1.5,1.5v3c0,0.828,0.671,1.5,1.5,1.5s1.5-0.672,1.5-1.5v-3C19,29.672,18.329,29,17.5,29z M17.5,7    C11.71,7,7,11.71,7,17.5S11.71,28,17.5,28S28,23.29,28,17.5S23.29,7,17.5,7z M17.5,25c-4.136,0-7.5-3.364-7.5-7.5    c0-4.136,3.364-7.5,7.5-7.5c4.136,0,7.5,3.364,7.5,7.5C25,21.636,21.636,25,17.5,25z" })
        ]
      }
    ) }),
    /* @__PURE__ */ jsx14("label", { id: "toggle-label-dark", for: "darkmode-toggle", tabIndex: -1, children: /* @__PURE__ */ jsxs7(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        xmlnsXlink: "http://www.w3.org/1999/xlink",
        version: "1.1",
        id: "nightIcon",
        x: "0px",
        y: "0px",
        viewBox: "0 0 100 100",
        style: "enable-background:new 0 0 100 100",
        xmlSpace: "preserve",
        children: [
          /* @__PURE__ */ jsx14("title", { children: "Dark mode" }),
          /* @__PURE__ */ jsx14("path", { d: "M96.76,66.458c-0.853-0.852-2.15-1.064-3.23-0.534c-6.063,2.991-12.858,4.571-19.655,4.571  C62.022,70.495,50.88,65.88,42.5,57.5C29.043,44.043,25.658,23.536,34.076,6.47c0.532-1.08,0.318-2.379-0.534-3.23  c-0.851-0.852-2.15-1.064-3.23-0.534c-4.918,2.427-9.375,5.619-13.246,9.491c-9.447,9.447-14.65,22.008-14.65,35.369  c0,13.36,5.203,25.921,14.65,35.368s22.008,14.65,35.368,14.65c13.361,0,25.921-5.203,35.369-14.65  c3.872-3.871,7.064-8.328,9.491-13.246C97.826,68.608,97.611,67.309,96.76,66.458z" })
        ]
      }
    ) })
  ] });
}
__name(Darkmode, "Darkmode");
Darkmode.beforeDOMLoaded = darkmode_inline_default;
Darkmode.css = darkmode_default;
var Darkmode_default = /* @__PURE__ */ __name(() => Darkmode, "default");

// quartz/components/Head.tsx
import { jsx as jsx15, jsxs as jsxs8 } from "preact/jsx-runtime";
var Head_default = /* @__PURE__ */ __name(() => {
  function Head({ cfg, fileData, externalResources }) {
    const title = fileData.frontmatter?.title ?? "Untitled";
    const description = fileData.description?.trim() ?? "No description provided";
    const { css, js } = externalResources;
    const url = new URL(`https://${cfg.baseUrl ?? "example.com"}`);
    const path11 = url.pathname;
    const baseDir = fileData.slug === "404" ? path11 : pathToRoot(fileData.slug);
    const iconPath = joinSegments(baseDir, "static/icon.png");
    const ogImagePath = `https://${cfg.baseUrl}/static/og-image.png`;
    return /* @__PURE__ */ jsxs8("head", { children: [
      /* @__PURE__ */ jsx15("title", { children: title }),
      /* @__PURE__ */ jsx15("meta", { charSet: "utf-8" }),
      /* @__PURE__ */ jsx15("meta", { name: "viewport", content: "width=device-width, initial-scale=1.0" }),
      /* @__PURE__ */ jsx15("meta", { property: "og:title", content: title }),
      /* @__PURE__ */ jsx15("meta", { property: "og:description", content: description }),
      cfg.baseUrl && /* @__PURE__ */ jsx15("meta", { property: "og:image", content: ogImagePath }),
      /* @__PURE__ */ jsx15("meta", { property: "og:width", content: "1200" }),
      /* @__PURE__ */ jsx15("meta", { property: "og:height", content: "675" }),
      /* @__PURE__ */ jsx15("link", { rel: "icon", href: iconPath }),
      /* @__PURE__ */ jsx15("meta", { name: "description", content: description }),
      /* @__PURE__ */ jsx15("meta", { name: "generator", content: "Quartz" }),
      /* @__PURE__ */ jsx15("link", { rel: "preconnect", href: "https://fonts.googleapis.com" }),
      /* @__PURE__ */ jsx15("link", { rel: "preconnect", href: "https://fonts.gstatic.com" }),
      /* @__PURE__ */ jsx15(
        "script",
        {
          defer: true,
          src: "https://unpkg.com/@tinybirdco/flock.js",
          "data-host": "https://api.tinybird.co",
          "data-token": "p.eyJ1IjogIjFhYTEyN2VjLWI0MTEtNDdjNS1iNWQzLTA5OGE2NDZjMWZhYSIsICJpZCI6ICI5YzFhNzE4Zi0xNjA1LTRmMTUtOGQ3Yy05NzliMDBjNWVmNTcifQ.-aCZYTIrTPiQCDYC_zS0dH0IVOXqI9ThnK39DMDgY7c"
        }
      ),
      css.map((href) => /* @__PURE__ */ jsx15("link", { href, rel: "stylesheet", type: "text/css", "spa-preserve": true }, href)),
      js.filter((resource) => resource.loadTime === "beforeDOMReady").map((res) => JSResourceToScriptElement(res, true))
    ] });
  }
  __name(Head, "Head");
  return Head;
}, "default");

// quartz/components/PageTitle.tsx
import { jsx as jsx16 } from "preact/jsx-runtime";
function PageTitle({ fileData, cfg, displayClass }) {
  const title = cfg?.pageTitle ?? "Untitled Quartz";
  const baseDir = pathToRoot(fileData.slug);
  return /* @__PURE__ */ jsx16("h1", { class: `page-title ${displayClass ?? ""}`, children: /* @__PURE__ */ jsx16("a", { href: baseDir, children: title }) });
}
__name(PageTitle, "PageTitle");
PageTitle.css = `
.page-title {
  margin: 0;
}
`;
var PageTitle_default = /* @__PURE__ */ __name(() => PageTitle, "default");

// quartz/components/ContentMeta.tsx
import readingTime from "reading-time";
import { jsx as jsx17 } from "preact/jsx-runtime";
var ContentMeta_default = /* @__PURE__ */ __name(() => {
  function ContentMetadata({ cfg, fileData, displayClass }) {
    const text = fileData.text;
    if (text) {
      const segments = [];
      const { text: timeTaken, words: _words } = readingTime(text);
      if (fileData.dates) {
        segments.push(formatDate(getDate(cfg, fileData)));
      }
      segments.push(timeTaken);
      return /* @__PURE__ */ jsx17("p", { class: `content-meta ${displayClass ?? ""}`, children: segments.join(", ") });
    } else {
      return null;
    }
  }
  __name(ContentMetadata, "ContentMetadata");
  ContentMetadata.css = `
  .content-meta {
    margin-top: 0;
    color: var(--gray);
  }
  `;
  return ContentMetadata;
}, "default");

// quartz/components/Spacer.tsx
import { jsx as jsx18 } from "preact/jsx-runtime";
function Spacer({ displayClass }) {
  return /* @__PURE__ */ jsx18("div", { class: `spacer ${displayClass ?? ""}` });
}
__name(Spacer, "Spacer");
var Spacer_default = /* @__PURE__ */ __name(() => Spacer, "default");

// quartz/components/styles/legacyToc.scss
var legacyToc_default = "";

// quartz/components/styles/toc.scss
var toc_default = "";

// quartz/components/scripts/toc.inline.ts
var toc_inline_default = "";

// quartz/components/TableOfContents.tsx
import { jsx as jsx19, jsxs as jsxs9 } from "preact/jsx-runtime";
var defaultOptions8 = {
  layout: "modern"
};
function TableOfContents2({ fileData, displayClass }) {
  if (!fileData.toc) {
    return null;
  }
  return /* @__PURE__ */ jsxs9("div", { class: `toc ${displayClass ?? ""}`, children: [
    /* @__PURE__ */ jsxs9("button", { type: "button", id: "toc", class: fileData.collapseToc ? "collapsed" : "", children: [
      /* @__PURE__ */ jsx19("h3", { children: "Table of Contents" }),
      /* @__PURE__ */ jsx19(
        "svg",
        {
          xmlns: "http://www.w3.org/2000/svg",
          width: "24",
          height: "24",
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: "currentColor",
          "stroke-width": "2",
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
          class: "fold",
          children: /* @__PURE__ */ jsx19("polyline", { points: "6 9 12 15 18 9" })
        }
      )
    ] }),
    /* @__PURE__ */ jsx19("div", { id: "toc-content", children: /* @__PURE__ */ jsx19("ul", { class: "overflow", children: fileData.toc.map((tocEntry) => /* @__PURE__ */ jsx19("li", { class: `depth-${tocEntry.depth}`, children: /* @__PURE__ */ jsx19("a", { href: `#${tocEntry.slug}`, "data-for": tocEntry.slug, children: tocEntry.text }) }, tocEntry.slug)) }) })
  ] });
}
__name(TableOfContents2, "TableOfContents");
TableOfContents2.css = toc_default;
TableOfContents2.afterDOMLoaded = toc_inline_default;
function LegacyTableOfContents({ fileData }) {
  if (!fileData.toc) {
    return null;
  }
  return /* @__PURE__ */ jsxs9("details", { id: "toc", open: !fileData.collapseToc, children: [
    /* @__PURE__ */ jsx19("summary", { children: /* @__PURE__ */ jsx19("h3", { children: "Table of Contents" }) }),
    /* @__PURE__ */ jsx19("ul", { children: fileData.toc.map((tocEntry) => /* @__PURE__ */ jsx19("li", { class: `depth-${tocEntry.depth}`, children: /* @__PURE__ */ jsx19("a", { href: `#${tocEntry.slug}`, "data-for": tocEntry.slug, children: tocEntry.text }) }, tocEntry.slug)) })
  ] });
}
__name(LegacyTableOfContents, "LegacyTableOfContents");
LegacyTableOfContents.css = legacyToc_default;
var TableOfContents_default = /* @__PURE__ */ __name((opts) => {
  const layout = opts?.layout ?? defaultOptions8.layout;
  return layout === "modern" ? TableOfContents2 : LegacyTableOfContents;
}, "default");

// quartz/components/styles/explorer.scss
var explorer_default = "";

// quartz/components/scripts/explorer.inline.ts
var explorer_inline_default = "";

// quartz/components/ExplorerNode.tsx
import { Fragment as Fragment3, jsx as jsx20, jsxs as jsxs10 } from "preact/jsx-runtime";
function getPathSegment(fp, idx) {
  if (!fp) {
    return void 0;
  }
  return fp.split("/").at(idx);
}
__name(getPathSegment, "getPathSegment");
var FileNode = class _FileNode {
  static {
    __name(this, "FileNode");
  }
  children;
  name;
  // this is the slug segment
  displayName;
  file;
  depth;
  constructor(slugSegment, displayName, file, depth) {
    this.children = [];
    this.name = slugSegment;
    this.displayName = displayName ?? file?.frontmatter?.title ?? slugSegment;
    this.file = file ? clone(file) : null;
    this.depth = depth ?? 0;
  }
  insert(fileData) {
    if (fileData.path.length === 0) {
      return;
    }
    const nextSegment = fileData.path[0];
    if (fileData.path.length === 1) {
      if (nextSegment === "") {
        const title = fileData.file.frontmatter?.title;
        if (title && title !== "index") {
          this.displayName = title;
        }
      } else {
        this.children.push(new _FileNode(nextSegment, void 0, fileData.file, this.depth + 1));
      }
      return;
    }
    fileData.path = fileData.path.splice(1);
    const child = this.children.find((c) => c.name === nextSegment);
    if (child) {
      child.insert(fileData);
      return;
    }
    const newChild = new _FileNode(
      nextSegment,
      getPathSegment(fileData.file.relativePath, this.depth),
      void 0,
      this.depth + 1
    );
    newChild.insert(fileData);
    this.children.push(newChild);
  }
  // Add new file to tree
  add(file) {
    this.insert({ file, path: simplifySlug(file.slug).split("/") });
  }
  /**
   * Filter FileNode tree. Behaves similar to `Array.prototype.filter()`, but modifies tree in place
   * @param filterFn function to filter tree with
   */
  filter(filterFn) {
    this.children = this.children.filter(filterFn);
    this.children.forEach((child) => child.filter(filterFn));
  }
  /**
   * Filter FileNode tree. Behaves similar to `Array.prototype.map()`, but modifies tree in place
   * @param mapFn function to use for mapping over tree
   */
  map(mapFn) {
    mapFn(this);
    this.children.forEach((child) => child.map(mapFn));
  }
  /**
   * Get folder representation with state of tree.
   * Intended to only be called on root node before changes to the tree are made
   * @param collapsed default state of folders (collapsed by default or not)
   * @returns array containing folder state for tree
   */
  getFolderPaths(collapsed) {
    const folderPaths = [];
    const traverse = /* @__PURE__ */ __name((node, currentPath) => {
      if (!node.file) {
        const folderPath = joinSegments(currentPath, node.name);
        if (folderPath !== "") {
          folderPaths.push({ path: folderPath, collapsed });
        }
        node.children.forEach((child) => traverse(child, folderPath));
      }
    }, "traverse");
    traverse(this, "");
    return folderPaths;
  }
  // Sort order: folders first, then files. Sort folders and files alphabetically
  /**
   * Sorts tree according to sort/compare function
   * @param sortFn compare function used for `.sort()`, also used recursively for children
   */
  sort(sortFn) {
    this.children = this.children.sort(sortFn);
    this.children.forEach((e) => e.sort(sortFn));
  }
};
function ExplorerNode({ node, opts, fullPath, fileData }) {
  const folderBehavior = opts.folderClickBehavior;
  const isDefaultOpen = opts.folderDefaultState === "open";
  let folderPath = "";
  if (node.name !== "") {
    folderPath = joinSegments(fullPath ?? "", node.name);
  }
  return /* @__PURE__ */ jsx20(Fragment3, { children: node.file ? (
    // Single file node
    /* @__PURE__ */ jsx20("li", { children: /* @__PURE__ */ jsx20("a", { href: resolveRelative(fileData.slug, node.file.slug), "data-for": node.file.slug, children: node.displayName }) }, node.file.slug)
  ) : /* @__PURE__ */ jsxs10("li", { children: [
    node.name !== "" && // Node with entire folder
    // Render svg button + folder name, then children
    /* @__PURE__ */ jsxs10("div", { class: "folder-container", children: [
      /* @__PURE__ */ jsx20(
        "svg",
        {
          xmlns: "http://www.w3.org/2000/svg",
          width: "12",
          height: "12",
          viewBox: "5 8 14 8",
          fill: "none",
          stroke: "currentColor",
          "stroke-width": "2",
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
          class: "folder-icon",
          children: /* @__PURE__ */ jsx20("polyline", { points: "6 9 12 15 18 9" })
        }
      ),
      /* @__PURE__ */ jsx20("div", { "data-folderpath": folderPath, children: folderBehavior === "link" ? /* @__PURE__ */ jsx20(
        "a",
        {
          href: resolveRelative(fileData.slug, folderPath),
          "data-for": node.name,
          class: "folder-title",
          children: node.displayName
        }
      ) : /* @__PURE__ */ jsx20("button", { class: "folder-button", children: /* @__PURE__ */ jsx20("span", { class: "folder-title", children: node.displayName }) }) }, node.name)
    ] }),
    /* @__PURE__ */ jsx20("div", { class: `folder-outer ${node.depth === 0 || isDefaultOpen ? "open" : ""}`, children: /* @__PURE__ */ jsx20(
      "ul",
      {
        style: {
          paddingLeft: node.name !== "" ? "1.4rem" : "0"
        },
        class: "content",
        "data-folderul": folderPath,
        children: node.children.map((childNode, i) => /* @__PURE__ */ jsx20(
          ExplorerNode,
          {
            node: childNode,
            opts,
            fullPath: folderPath,
            fileData
          },
          i
        ))
      }
    ) })
  ] }) });
}
__name(ExplorerNode, "ExplorerNode");

// quartz/components/Explorer.tsx
import { jsx as jsx21, jsxs as jsxs11 } from "preact/jsx-runtime";
var defaultOptions9 = {
  title: "Explorer",
  folderClickBehavior: "collapse",
  folderDefaultState: "collapsed",
  useSavedState: true,
  mapFn: (node) => {
    return node;
  },
  sortFn: (a, b) => {
    if (!a.file && !b.file || a.file && b.file) {
      return a.displayName.localeCompare(b.displayName, void 0, {
        numeric: true,
        sensitivity: "base"
      });
    }
    if (a.file && !b.file) {
      return 1;
    } else {
      return -1;
    }
  },
  filterFn: (node) => node.name !== "tags",
  order: ["filter", "map", "sort"]
};
var Explorer_default = /* @__PURE__ */ __name((userOpts) => {
  const opts = { ...defaultOptions9, ...userOpts };
  let fileTree;
  let jsonTree;
  function constructFileTree(allFiles) {
    if (fileTree) {
      return;
    }
    fileTree = new FileNode("");
    allFiles.forEach((file) => fileTree.add(file));
    if (opts.order) {
      for (let i = 0; i < opts.order.length; i++) {
        const functionName = opts.order[i];
        if (functionName === "map") {
          fileTree.map(opts.mapFn);
        } else if (functionName === "sort") {
          fileTree.sort(opts.sortFn);
        } else if (functionName === "filter") {
          fileTree.filter(opts.filterFn);
        }
      }
    }
    const folders = fileTree.getFolderPaths(opts.folderDefaultState === "collapsed");
    jsonTree = JSON.stringify(folders);
  }
  __name(constructFileTree, "constructFileTree");
  function Explorer({ allFiles, displayClass, fileData }) {
    constructFileTree(allFiles);
    return /* @__PURE__ */ jsxs11("div", { class: `explorer ${displayClass ?? ""}`, children: [
      /* @__PURE__ */ jsxs11(
        "button",
        {
          type: "button",
          id: "explorer",
          "data-behavior": opts.folderClickBehavior,
          "data-collapsed": opts.folderDefaultState,
          "data-savestate": opts.useSavedState,
          "data-tree": jsonTree,
          children: [
            /* @__PURE__ */ jsx21("h1", { children: opts.title }),
            /* @__PURE__ */ jsx21(
              "svg",
              {
                xmlns: "http://www.w3.org/2000/svg",
                width: "14",
                height: "14",
                viewBox: "5 8 14 8",
                fill: "none",
                stroke: "currentColor",
                "stroke-width": "2",
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                class: "fold",
                children: /* @__PURE__ */ jsx21("polyline", { points: "6 9 12 15 18 9" })
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ jsx21("div", { id: "explorer-content", children: /* @__PURE__ */ jsxs11("ul", { class: "overflow", id: "explorer-ul", children: [
        /* @__PURE__ */ jsx21(ExplorerNode, { node: fileTree, opts, fileData }),
        /* @__PURE__ */ jsx21("li", { id: "explorer-end" })
      ] }) })
    ] });
  }
  __name(Explorer, "Explorer");
  Explorer.css = explorer_default;
  Explorer.afterDOMLoaded = explorer_inline_default;
  return Explorer;
}, "default");

// quartz/components/TagList.tsx
import { jsx as jsx22 } from "preact/jsx-runtime";
function TagList({ fileData, displayClass }) {
  const tags = fileData.frontmatter?.tags;
  const baseDir = pathToRoot(fileData.slug);
  if (tags && tags.length > 0) {
    return /* @__PURE__ */ jsx22("ul", { class: `tags ${displayClass ?? ""}`, children: tags.map((tag) => {
      const display = `#${tag}`;
      const linkDest = baseDir + `/tags/${slugTag(tag)}`;
      return /* @__PURE__ */ jsx22("li", { children: /* @__PURE__ */ jsx22("a", { href: linkDest, class: "internal tag-link", children: display }) });
    }) });
  } else {
    return null;
  }
}
__name(TagList, "TagList");
TagList.css = `
.tags {
  list-style: none;
  display: flex;
  padding-left: 0;
  gap: 0.4rem;
  margin: 1rem 0;
  flex-wrap: wrap;
  justify-self: end;
}

.section-li > .section > .tags {
  justify-content: flex-end;
}
  
.tags > li {
  display: inline-block;
  white-space: nowrap;
  margin: 0;
  overflow-wrap: normal;
}

a.internal.tag-link {
  border-radius: 8px;
  background-color: var(--highlight);
  padding: 0.2rem 0.4rem;
  margin: 0 0.1rem;
}
`;
var TagList_default = /* @__PURE__ */ __name(() => TagList, "default");

// quartz/components/scripts/graph.inline.ts
var graph_inline_default = "";

// quartz/components/styles/graph.scss
var graph_default = "";

// quartz/components/Graph.tsx
import { jsx as jsx23, jsxs as jsxs12 } from "preact/jsx-runtime";
var defaultOptions10 = {
  localGraph: {
    drag: true,
    zoom: true,
    depth: 1,
    scale: 1.1,
    repelForce: 0.5,
    centerForce: 0.3,
    linkDistance: 30,
    fontSize: 0.6,
    opacityScale: 1,
    showTags: true,
    removeTags: []
  },
  globalGraph: {
    drag: true,
    zoom: true,
    depth: -1,
    scale: 0.9,
    repelForce: 0.5,
    centerForce: 0.3,
    linkDistance: 30,
    fontSize: 0.6,
    opacityScale: 1,
    showTags: true,
    removeTags: []
  }
};
var Graph_default = /* @__PURE__ */ __name((opts) => {
  function Graph({ displayClass }) {
    const localGraph = { ...defaultOptions10.localGraph, ...opts?.localGraph };
    const globalGraph = { ...defaultOptions10.globalGraph, ...opts?.globalGraph };
    return /* @__PURE__ */ jsxs12("div", { class: `graph ${displayClass ?? ""}`, children: [
      /* @__PURE__ */ jsx23("h3", { children: "Graph View" }),
      /* @__PURE__ */ jsxs12("div", { class: "graph-outer", children: [
        /* @__PURE__ */ jsx23("div", { id: "graph-container", "data-cfg": JSON.stringify(localGraph) }),
        /* @__PURE__ */ jsx23(
          "svg",
          {
            version: "1.1",
            id: "global-graph-icon",
            xmlns: "http://www.w3.org/2000/svg",
            xmlnsXlink: "http://www.w3.org/1999/xlink",
            x: "0px",
            y: "0px",
            viewBox: "0 0 55 55",
            fill: "currentColor",
            xmlSpace: "preserve",
            children: /* @__PURE__ */ jsx23(
              "path",
              {
                d: "M49,0c-3.309,0-6,2.691-6,6c0,1.035,0.263,2.009,0.726,2.86l-9.829,9.829C32.542,17.634,30.846,17,29,17\n	s-3.542,0.634-4.898,1.688l-7.669-7.669C16.785,10.424,17,9.74,17,9c0-2.206-1.794-4-4-4S9,6.794,9,9s1.794,4,4,4\n	c0.74,0,1.424-0.215,2.019-0.567l7.669,7.669C21.634,21.458,21,23.154,21,25s0.634,3.542,1.688,4.897L10.024,42.562\n	C8.958,41.595,7.549,41,6,41c-3.309,0-6,2.691-6,6s2.691,6,6,6s6-2.691,6-6c0-1.035-0.263-2.009-0.726-2.86l12.829-12.829\n	c1.106,0.86,2.44,1.436,3.898,1.619v10.16c-2.833,0.478-5,2.942-5,5.91c0,3.309,2.691,6,6,6s6-2.691,6-6c0-2.967-2.167-5.431-5-5.91\n	v-10.16c1.458-0.183,2.792-0.759,3.898-1.619l7.669,7.669C41.215,39.576,41,40.26,41,41c0,2.206,1.794,4,4,4s4-1.794,4-4\n	s-1.794-4-4-4c-0.74,0-1.424,0.215-2.019,0.567l-7.669-7.669C36.366,28.542,37,26.846,37,25s-0.634-3.542-1.688-4.897l9.665-9.665\n	C46.042,11.405,47.451,12,49,12c3.309,0,6-2.691,6-6S52.309,0,49,0z M11,9c0-1.103,0.897-2,2-2s2,0.897,2,2s-0.897,2-2,2\n	S11,10.103,11,9z M6,51c-2.206,0-4-1.794-4-4s1.794-4,4-4s4,1.794,4,4S8.206,51,6,51z M33,49c0,2.206-1.794,4-4,4s-4-1.794-4-4\n	s1.794-4,4-4S33,46.794,33,49z M29,31c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S32.309,31,29,31z M47,41c0,1.103-0.897,2-2,2\n	s-2-0.897-2-2s0.897-2,2-2S47,39.897,47,41z M49,10c-2.206,0-4-1.794-4-4s1.794-4,4-4s4,1.794,4,4S51.206,10,49,10z"
              }
            )
          }
        )
      ] }),
      /* @__PURE__ */ jsx23("div", { id: "global-graph-outer", children: /* @__PURE__ */ jsx23("div", { id: "global-graph-container", "data-cfg": JSON.stringify(globalGraph) }) })
    ] });
  }
  __name(Graph, "Graph");
  Graph.css = graph_default;
  Graph.afterDOMLoaded = graph_inline_default;
  return Graph;
}, "default");

// quartz/components/styles/backlinks.scss
var backlinks_default = "";

// quartz/components/Backlinks.tsx
import { jsx as jsx24, jsxs as jsxs13 } from "preact/jsx-runtime";
function Backlinks({ fileData, allFiles, displayClass }) {
  const slug = simplifySlug(fileData.slug);
  const backlinkFiles = allFiles.filter((file) => file.links?.includes(slug));
  return /* @__PURE__ */ jsxs13("div", { class: `backlinks ${displayClass ?? ""}`, children: [
    /* @__PURE__ */ jsx24("h3", { children: "Backlinks" }),
    /* @__PURE__ */ jsx24("ul", { class: "overflow", children: backlinkFiles.length > 0 ? backlinkFiles.map((f) => /* @__PURE__ */ jsx24("li", { children: /* @__PURE__ */ jsx24("a", { href: resolveRelative(fileData.slug, f.slug), class: "internal", children: f.frontmatter?.title }) })) : /* @__PURE__ */ jsx24("li", { children: "No backlinks found" }) })
  ] });
}
__name(Backlinks, "Backlinks");
Backlinks.css = backlinks_default;

// quartz/components/styles/search.scss
var search_default = "";

// quartz/components/scripts/search.inline.ts
var search_inline_default = "";

// quartz/components/Search.tsx
import { jsx as jsx25, jsxs as jsxs14 } from "preact/jsx-runtime";
var Search_default = /* @__PURE__ */ __name(() => {
  function Search({ displayClass }) {
    return /* @__PURE__ */ jsxs14("div", { class: `search ${displayClass ?? ""}`, children: [
      /* @__PURE__ */ jsxs14("div", { id: "search-icon", children: [
        /* @__PURE__ */ jsx25("p", { children: "Search" }),
        /* @__PURE__ */ jsx25("div", {}),
        /* @__PURE__ */ jsxs14(
          "svg",
          {
            tabIndex: 0,
            "aria-labelledby": "title desc",
            role: "img",
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 19.9 19.7",
            children: [
              /* @__PURE__ */ jsx25("title", { id: "title", children: "Search" }),
              /* @__PURE__ */ jsx25("desc", { id: "desc", children: "Search" }),
              /* @__PURE__ */ jsxs14("g", { class: "search-path", fill: "none", children: [
                /* @__PURE__ */ jsx25("path", { "stroke-linecap": "square", d: "M18.5 18.3l-5.4-5.4" }),
                /* @__PURE__ */ jsx25("circle", { cx: "8", cy: "8", r: "7" })
              ] })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsx25("div", { id: "search-container", children: /* @__PURE__ */ jsxs14("div", { id: "search-space", children: [
        /* @__PURE__ */ jsx25(
          "input",
          {
            autocomplete: "off",
            id: "search-bar",
            name: "search",
            type: "text",
            "aria-label": "Search for something",
            placeholder: "Search for something"
          }
        ),
        /* @__PURE__ */ jsx25("div", { id: "results-container" })
      ] }) })
    ] });
  }
  __name(Search, "Search");
  Search.afterDOMLoaded = search_inline_default;
  Search.css = search_default;
  return Search;
}, "default");

// quartz/components/styles/footer.scss
var footer_default = "";

// quartz/components/Footer.tsx
import { jsx as jsx26, jsxs as jsxs15 } from "preact/jsx-runtime";
var Footer_default = /* @__PURE__ */ __name((opts) => {
  function Footer({ displayClass }) {
    const year = (/* @__PURE__ */ new Date()).getFullYear();
    const links = opts?.links ?? [];
    return /* @__PURE__ */ jsxs15("footer", { class: `${displayClass ?? ""}`, children: [
      /* @__PURE__ */ jsx26("hr", {}),
      /* @__PURE__ */ jsxs15("p", { children: [
        "Created with ",
        /* @__PURE__ */ jsx26("a", { href: "https://quartz.jzhao.xyz/", children: "Quartz" }),
        ", \xA9 ",
        year
      ] }),
      /* @__PURE__ */ jsx26("ul", { children: Object.entries(links).map(([text, link]) => /* @__PURE__ */ jsx26("li", { children: /* @__PURE__ */ jsx26("a", { href: link, children: text }) })) })
    ] });
  }
  __name(Footer, "Footer");
  Footer.css = footer_default;
  return Footer;
}, "default");

// quartz/components/DesktopOnly.tsx
import { Fragment as Fragment4, jsx as jsx27 } from "preact/jsx-runtime";
var DesktopOnly_default = /* @__PURE__ */ __name((component) => {
  if (component) {
    let DesktopOnly2 = function(props) {
      return /* @__PURE__ */ jsx27(Component, { displayClass: "desktop-only", ...props });
    };
    var DesktopOnly = DesktopOnly2;
    __name(DesktopOnly2, "DesktopOnly");
    const Component = component;
    DesktopOnly2.displayName = component.displayName;
    DesktopOnly2.afterDOMLoaded = component?.afterDOMLoaded;
    DesktopOnly2.beforeDOMLoaded = component?.beforeDOMLoaded;
    DesktopOnly2.css = component?.css;
    return DesktopOnly2;
  } else {
    return () => /* @__PURE__ */ jsx27(Fragment4, {});
  }
}, "default");

// quartz/components/MobileOnly.tsx
import { Fragment as Fragment5, jsx as jsx28 } from "preact/jsx-runtime";
var MobileOnly_default = /* @__PURE__ */ __name((component) => {
  if (component) {
    let MobileOnly2 = function(props) {
      return /* @__PURE__ */ jsx28(Component, { displayClass: "mobile-only", ...props });
    };
    var MobileOnly = MobileOnly2;
    __name(MobileOnly2, "MobileOnly");
    const Component = component;
    MobileOnly2.displayName = component.displayName;
    MobileOnly2.afterDOMLoaded = component?.afterDOMLoaded;
    MobileOnly2.beforeDOMLoaded = component?.beforeDOMLoaded;
    MobileOnly2.css = component?.css;
    return MobileOnly2;
  } else {
    return () => /* @__PURE__ */ jsx28(Fragment5, {});
  }
}, "default");

// quartz/components/styles/recentNotes.scss
var recentNotes_default = "";

// quartz/components/RecentNotes.tsx
import { jsx as jsx29, jsxs as jsxs16 } from "preact/jsx-runtime";
var defaultOptions11 = /* @__PURE__ */ __name((cfg) => ({
  title: "Recent Notes",
  limit: 3,
  linkToMore: false,
  filter: () => true,
  sort: byDateAndAlphabetical(cfg)
}), "defaultOptions");
var RecentNotes_default = /* @__PURE__ */ __name((userOpts) => {
  function RecentNotes({ allFiles, fileData, displayClass, cfg }) {
    const opts = { ...defaultOptions11(cfg), ...userOpts };
    const pages = allFiles.filter(opts.filter).sort(opts.sort);
    const remaining = Math.max(0, pages.length - opts.limit);
    return /* @__PURE__ */ jsxs16("div", { class: `recent-notes ${displayClass ?? ""}`, children: [
      /* @__PURE__ */ jsx29("h3", { children: opts.title }),
      /* @__PURE__ */ jsx29("ul", { class: "recent-ul", children: pages.slice(0, opts.limit).map((page) => {
        const title = page.frontmatter?.title;
        return /* @__PURE__ */ jsx29("li", { class: "recent-li", children: /* @__PURE__ */ jsxs16("div", { class: "section", children: [
          /* @__PURE__ */ jsx29("div", { class: "desc", children: /* @__PURE__ */ jsx29("h3", { children: /* @__PURE__ */ jsx29("a", { href: resolveRelative(fileData.slug, page.slug), class: "internal", children: title }) }) }),
          page.dates && /* @__PURE__ */ jsx29("p", { class: "meta", children: /* @__PURE__ */ jsx29(Date2, { date: getDate(cfg, page) }) })
        ] }) });
      }) }),
      opts.linkToMore && remaining > 0 && /* @__PURE__ */ jsx29("p", { children: /* @__PURE__ */ jsxs16("a", { href: resolveRelative(fileData.slug, opts.linkToMore), children: [
        "See ",
        remaining,
        " more \u2192"
      ] }) })
    ] });
  }
  __name(RecentNotes, "RecentNotes");
  RecentNotes.css = recentNotes_default;
  return RecentNotes;
}, "default");

// quartz/components/styles/breadcrumbs.scss
var breadcrumbs_default = "";

// quartz/components/Breadcrumbs.tsx
import { Fragment as Fragment6, jsx as jsx30, jsxs as jsxs17 } from "preact/jsx-runtime";
var defaultOptions12 = {
  spacerSymbol: "\u276F",
  rootName: "Home",
  resolveFrontmatterTitle: true,
  hideOnRoot: true,
  showCurrentPage: true
};
function formatCrumb(displayName, baseSlug, currentSlug) {
  return {
    displayName: displayName.replaceAll("-", " "),
    path: resolveRelative(baseSlug, currentSlug)
  };
}
__name(formatCrumb, "formatCrumb");
var Breadcrumbs_default = /* @__PURE__ */ __name((opts) => {
  const options2 = { ...defaultOptions12, ...opts };
  let folderIndex;
  function Breadcrumbs({ fileData, allFiles, displayClass }) {
    if (options2.hideOnRoot && fileData.slug === "index") {
      return /* @__PURE__ */ jsx30(Fragment6, {});
    }
    const firstEntry = formatCrumb(options2.rootName, fileData.slug, "/");
    const crumbs = [firstEntry];
    if (!folderIndex && options2.resolveFrontmatterTitle) {
      folderIndex = /* @__PURE__ */ new Map();
      for (const file of allFiles) {
        if (file.slug?.endsWith("index")) {
          const folderParts = file.slug?.split("/");
          if (folderParts) {
            const folderName = folderParts[folderParts?.length - 2];
            folderIndex.set(folderName, file);
          }
        }
      }
    }
    const slugParts = fileData.slug?.split("/");
    if (slugParts) {
      let currentPath = "";
      for (let i = 0; i < slugParts.length - 1; i++) {
        let curPathSegment = slugParts[i];
        const currentFile = folderIndex?.get(curPathSegment);
        if (currentFile) {
          const title = currentFile.frontmatter.title;
          if (title !== "index") {
            curPathSegment = title;
          }
        }
        currentPath += slugParts[i] + "/";
        const crumb = formatCrumb(curPathSegment, fileData.slug, currentPath);
        crumbs.push(crumb);
      }
      if (options2.showCurrentPage && slugParts.at(-1) === "") {
        crumbs.push({
          displayName: fileData.frontmatter.title,
          path: ""
        });
      }
    }
    return /* @__PURE__ */ jsx30("nav", { class: `breadcrumb-container ${displayClass ?? ""}`, "aria-label": "breadcrumbs", children: crumbs.map((crumb, index) => /* @__PURE__ */ jsxs17("div", { class: "breadcrumb-element", children: [
      /* @__PURE__ */ jsx30("a", { href: crumb.path, children: crumb.displayName }),
      index !== crumbs.length - 1 && /* @__PURE__ */ jsx30("p", { children: ` ${options2.spacerSymbol} ` })
    ] })) });
  }
  __name(Breadcrumbs, "Breadcrumbs");
  Breadcrumbs.css = breadcrumbs_default;
  return Breadcrumbs;
}, "default");

// quartz.layout.ts
var sharedPageComponents = {
  head: Head_default(),
  header: [],
  footer: Footer_default({
    links: {
      Twitter: "https://www.twitter.com/pelayoarbues",
      Linkedin: "https://www.linkedin.com/in/pelayoarbues",
      Mastodon: "https://sigmoid.social/@pelayoarbues",
      Unsplash: "https://unsplash.com/es/@pelayoarbues",
      GitHub: "https://github.com/pelayoarbues",
      RSS: "https://pelayoarbues.com/index.xml"
    }
  })
};
var defaultContentPageLayout = {
  beforeBody: [
    Breadcrumbs_default(),
    ArticleTitle_default(),
    ContentMeta_default(),
    TagList_default()
  ],
  left: [
    PageTitle_default(),
    MobileOnly_default(Spacer_default()),
    Search_default(),
    Darkmode_default(),
    DesktopOnly_default(
      Explorer_default({
        filterFn: (node) => {
          const omit = /* @__PURE__ */ new Set(["mocs", "tags", "attachments", "literature-notes", "conflict-files-obsidian-git"]);
          return !omit.has(node.name.toLowerCase());
        },
        sortFn: (a, b) => {
          const nameOrderMap = {
            "notes": 100,
            "research": 101,
            "appearances": 200,
            "photography": 300
          };
          let orderA = 0;
          let orderB = 0;
          if (a.file && a.file.slug) {
            orderA = nameOrderMap[a.file.slug] || 0;
          } else if (a.name) {
            orderA = nameOrderMap[a.name] || 0;
          }
          if (b.file && b.file.slug) {
            orderB = nameOrderMap[b.file.slug] || 0;
          } else if (b.name) {
            orderB = nameOrderMap[b.name] || 0;
          }
          return orderA - orderB;
        }
      })
    )
  ],
  right: [
    Graph_default(),
    DesktopOnly_default(TableOfContents_default()),
    DesktopOnly_default(
      RecentNotes_default({
        title: "Recent Notes",
        limit: 3,
        filter: (f) => f.slug.startsWith("notes/") && f.slug !== "notes/index" && !f.frontmatter?.noindex,
        sort: (f1, f2) => (f2.dates?.created.getTime() ?? Number.MAX_SAFE_INTEGER) - (f1.dates?.created.getTime() ?? Number.MAX_SAFE_INTEGER),
        linkToMore: "notes/"
      })
    ),
    DesktopOnly_default(
      RecentNotes_default({
        title: "Now Reading",
        limit: 1,
        filter: (f) => f.slug.startsWith("literature-notes/Articles") && f.slug !== "literature-notes/Articles/index" && !f.frontmatter?.noindex,
        sort: (f1, f2) => (f2.dates?.created.getTime() ?? Number.MAX_SAFE_INTEGER) - (f1.dates?.created.getTime() ?? Number.MAX_SAFE_INTEGER),
        linkToMore: "literature-notes/Articles/"
      })
    )
  ]
};
var defaultListPageLayout = {
  beforeBody: [Breadcrumbs_default(), ArticleTitle_default()],
  left: [
    PageTitle_default(),
    MobileOnly_default(Spacer_default()),
    Search_default(),
    Darkmode_default()
  ],
  right: []
};

// quartz/plugins/emitters/contentPage.tsx
import chalk3 from "chalk";
var ContentPage = /* @__PURE__ */ __name((userOpts) => {
  const opts = {
    ...sharedPageComponents,
    ...defaultContentPageLayout,
    pageBody: Content_default(),
    ...userOpts
  };
  const { head: Head, header, beforeBody, pageBody, left, right, footer: Footer } = opts;
  const Header2 = Header_default();
  const Body2 = Body_default();
  return {
    name: "ContentPage",
    getQuartzComponents() {
      return [Head, Header2, Body2, ...header, ...beforeBody, pageBody, ...left, ...right, Footer];
    },
    async emit(ctx, content, resources, emit) {
      const cfg = ctx.cfg.configuration;
      const fps = [];
      const allFiles = content.map((c) => c[1].data);
      let containsIndex = false;
      for (const [tree, file] of content) {
        const slug = file.data.slug;
        if (slug === "index") {
          containsIndex = true;
        }
        const externalResources = pageResources(pathToRoot(slug), resources);
        const componentData = {
          fileData: file.data,
          externalResources,
          cfg,
          children: [],
          tree,
          allFiles
        };
        const content2 = renderPage(slug, componentData, opts, externalResources);
        const fp = await emit({
          content: content2,
          slug,
          ext: ".html"
        });
        fps.push(fp);
      }
      if (!containsIndex) {
        console.log(
          chalk3.yellow(
            `
Warning: you seem to be missing an \`index.md\` home page file at the root of your \`${ctx.argv.directory}\` folder. This may cause errors when deploying.`
          )
        );
      }
      return fps;
    }
  };
}, "ContentPage");

// quartz/plugins/vfile.ts
import { VFile } from "vfile";
function defaultProcessedContent(vfileData) {
  const root = { type: "root", children: [] };
  const vfile = new VFile("");
  vfile.data = vfileData;
  return [root, vfile];
}
__name(defaultProcessedContent, "defaultProcessedContent");

// quartz/plugins/emitters/tagPage.tsx
var TagPage = /* @__PURE__ */ __name((userOpts) => {
  const opts = {
    ...sharedPageComponents,
    ...defaultListPageLayout,
    pageBody: TagContent_default(),
    ...userOpts
  };
  const { head: Head, header, beforeBody, pageBody, left, right, footer: Footer } = opts;
  const Header2 = Header_default();
  const Body2 = Body_default();
  return {
    name: "TagPage",
    getQuartzComponents() {
      return [Head, Header2, Body2, ...header, ...beforeBody, pageBody, ...left, ...right, Footer];
    },
    async emit(ctx, content, resources, emit) {
      const fps = [];
      const allFiles = content.map((c) => c[1].data);
      const cfg = ctx.cfg.configuration;
      const tags = new Set(
        allFiles.flatMap((data) => data.frontmatter?.tags ?? []).flatMap(getAllSegmentPrefixes)
      );
      tags.add("index");
      const tagDescriptions = Object.fromEntries(
        [...tags].map((tag) => {
          const title = tag === "index" ? "Tag Index" : `Tag: #${tag}`;
          return [
            tag,
            defaultProcessedContent({
              slug: joinSegments("tags", tag),
              frontmatter: { title, tags: [] }
            })
          ];
        })
      );
      for (const [tree, file] of content) {
        const slug = file.data.slug;
        if (slug.startsWith("tags/")) {
          const tag = slug.slice("tags/".length);
          if (tags.has(tag)) {
            tagDescriptions[tag] = [tree, file];
          }
        }
      }
      for (const tag of tags) {
        const slug = joinSegments("tags", tag);
        const externalResources = pageResources(pathToRoot(slug), resources);
        const [tree, file] = tagDescriptions[tag];
        const componentData = {
          fileData: file.data,
          externalResources,
          cfg,
          children: [],
          tree,
          allFiles
        };
        const content2 = renderPage(slug, componentData, opts, externalResources);
        const fp = await emit({
          content: content2,
          slug: file.data.slug,
          ext: ".html"
        });
        fps.push(fp);
      }
      return fps;
    }
  };
}, "TagPage");

// quartz/plugins/emitters/folderPage.tsx
import path5 from "path";
var FolderPage = /* @__PURE__ */ __name((userOpts) => {
  const opts = {
    ...sharedPageComponents,
    ...defaultListPageLayout,
    pageBody: FolderContent_default(),
    ...userOpts
  };
  const { head: Head, header, beforeBody, pageBody, left, right, footer: Footer } = opts;
  const Header2 = Header_default();
  const Body2 = Body_default();
  return {
    name: "FolderPage",
    getQuartzComponents() {
      return [Head, Header2, Body2, ...header, ...beforeBody, pageBody, ...left, ...right, Footer];
    },
    async emit(ctx, content, resources, emit) {
      const fps = [];
      const allFiles = content.map((c) => c[1].data);
      const cfg = ctx.cfg.configuration;
      const folders = new Set(
        allFiles.flatMap((data) => {
          const slug = data.slug;
          const folderName = path5.dirname(slug ?? "");
          if (slug && folderName !== "." && folderName !== "tags") {
            return [folderName];
          }
          return [];
        })
      );
      const folderDescriptions = Object.fromEntries(
        [...folders].map((folder) => [
          folder,
          defaultProcessedContent({
            slug: joinSegments(folder, "index"),
            frontmatter: { title: `Folder: ${folder}`, tags: [] }
          })
        ])
      );
      for (const [tree, file] of content) {
        const slug = _stripSlashes(simplifySlug(file.data.slug));
        if (folders.has(slug)) {
          folderDescriptions[slug] = [tree, file];
        }
      }
      for (const folder of folders) {
        const slug = joinSegments(folder, "index");
        const externalResources = pageResources(pathToRoot(slug), resources);
        const [tree, file] = folderDescriptions[folder];
        const componentData = {
          fileData: file.data,
          externalResources,
          cfg,
          children: [],
          tree,
          allFiles
        };
        const content2 = renderPage(slug, componentData, opts, externalResources);
        const fp = await emit({
          content: content2,
          slug,
          ext: ".html"
        });
        fps.push(fp);
      }
      return fps;
    }
  };
}, "FolderPage");

// quartz/plugins/emitters/contentIndex.ts
import { toHtml as toHtml2 } from "hast-util-to-html";
import path6 from "path";
var defaultOptions13 = {
  enableSiteMap: true,
  enableRSS: true,
  rssLimit: 10,
  rssFullHtml: false,
  includeEmptyFiles: true
};
function generateSiteMap(cfg, idx) {
  const base = cfg.baseUrl ?? "";
  const createURLEntry = /* @__PURE__ */ __name((slug, content) => `<url>
    <loc>https://${joinSegments(base, encodeURI(slug))}</loc>
    <lastmod>${content.date?.toISOString()}</lastmod>
  </url>`, "createURLEntry");
  const urls = Array.from(idx).map(([slug, content]) => createURLEntry(simplifySlug(slug), content)).join("");
  return `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">${urls}</urlset>`;
}
__name(generateSiteMap, "generateSiteMap");
function generateRSSFeed(cfg, idx, includedSections, limit) {
  const base = cfg.baseUrl ?? "";
  const root = `https://${base}`;
  const createURLEntry = /* @__PURE__ */ __name((slug, content) => `<item>
    <title>${escapeHTML(content.title)}</title>
    <link>${joinSegments(root, encodeURI(slug))}</link>
    <guid>${joinSegments(root, encodeURI(slug))}</guid>
    <description>${content.richContent ?? content.description}</description>
    <pubDate>${content.date?.toUTCString()}</pubDate>
  </item>`, "createURLEntry");
  const items = [];
  for (const section of includedSections) {
    for (const [slug, content] of idx) {
      if (slug.startsWith(section) && slug !== section && slug !== `${section}/index` && slug !== `${section}/index.html`) {
        if (content.title.toLowerCase() !== section.toLowerCase()) {
          items.push(createURLEntry(simplifySlug(slug), content));
        }
      }
    }
  }
  return `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0">
    <channel>
      <title>${escapeHTML(cfg.pageTitle)}</title>
      <title>${escapeHTML(cfg.pageTitle)}</title>
      <link>${root}</link>
      <description>${!!limit ? `Last ${limit} notes` : "Recent notes"} on ${escapeHTML(
    cfg.pageTitle
  )}</description>
      <generator>Quartz -- quartz.jzhao.xyz</generator>
      ${items.join("")}
    </channel>
  </rss>`;
}
__name(generateRSSFeed, "generateRSSFeed");
var ContentIndex = /* @__PURE__ */ __name((opts) => {
  opts = { ...defaultOptions13, ...opts };
  return {
    name: "ContentIndex",
    async emit(ctx, content, _resources, emit) {
      const cfg = ctx.cfg.configuration;
      const emitted = [];
      const linkIndex = /* @__PURE__ */ new Map();
      for (const [tree, file] of content) {
        const slug = file.data.slug;
        const date = getDate(ctx.cfg.configuration, file.data) ?? /* @__PURE__ */ new Date();
        if (opts?.includeEmptyFiles || file.data.text && file.data.text !== "") {
          linkIndex.set(slug, {
            title: file.data.frontmatter?.title,
            links: file.data.links ?? [],
            tags: file.data.frontmatter?.tags ?? [],
            content: file.data.text ?? "",
            richContent: opts?.rssFullHtml ? escapeHTML(toHtml2(tree, { allowDangerousHtml: true })) : void 0,
            date,
            description: file.data.description ?? ""
          });
        }
      }
      const includedSections = ["notes", "writing"];
      if (opts?.enableSiteMap) {
        emitted.push(
          await emit({
            content: generateSiteMap(cfg, linkIndex),
            slug: "sitemap",
            ext: ".xml"
          })
        );
      }
      if (opts?.enableRSS) {
        emitted.push(
          await emit({
            content: generateRSSFeed(cfg, linkIndex, includedSections, opts.rssLimit),
            // Pass includedSections
            slug: "index",
            ext: ".xml"
          })
        );
      }
      const fp = path6.join("static", "contentIndex");
      const simplifiedIndex = Object.fromEntries(
        Array.from(linkIndex).map(([slug, content2]) => {
          delete content2.description;
          delete content2.date;
          return [slug, content2];
        })
      );
      emitted.push(
        await emit({
          content: JSON.stringify(simplifiedIndex),
          slug: fp,
          ext: ".json"
        })
      );
      return emitted;
    },
    getQuartzComponents: () => []
  };
}, "ContentIndex");

// quartz/plugins/emitters/aliases.ts
import path7 from "path";
var AliasRedirects = /* @__PURE__ */ __name(() => ({
  name: "AliasRedirects",
  getQuartzComponents() {
    return [];
  },
  async emit({ argv }, content, _resources, emit) {
    const fps = [];
    for (const [_tree, file] of content) {
      const ogSlug = simplifySlug(file.data.slug);
      const dir = path7.posix.relative(argv.directory, path7.dirname(file.data.filePath));
      let aliases = file.data.frontmatter?.aliases ?? file.data.frontmatter?.alias ?? [];
      if (typeof aliases === "string") {
        aliases = [aliases];
      }
      const slugs = aliases.map((alias) => path7.posix.join(dir, alias));
      const permalink = file.data.frontmatter?.permalink;
      if (typeof permalink === "string") {
        slugs.push(permalink);
      }
      for (let slug of slugs) {
        if (slug.endsWith("/")) {
          slug = joinSegments(slug, "index");
        }
        const redirUrl = resolveRelative(slug, file.data.slug);
        const fp = await emit({
          content: `
            <!DOCTYPE html>
            <html lang="en-us">
            <head>
            <title>${ogSlug}</title>
            <link rel="canonical" href="${redirUrl}">
            <meta name="robots" content="noindex">
            <meta charset="utf-8">
            <meta http-equiv="refresh" content="0; url=${redirUrl}">
            </head>
            </html>
            `,
          slug,
          ext: ".html"
        });
        fps.push(fp);
      }
    }
    return fps;
  }
}), "AliasRedirects");

// quartz/plugins/emitters/assets.ts
import path9 from "path";
import fs2 from "fs";

// quartz/util/glob.ts
import path8 from "path";
import { globby } from "globby";
function toPosixPath(fp) {
  return fp.split(path8.sep).join("/");
}
__name(toPosixPath, "toPosixPath");
async function glob(pattern, cwd, ignorePatterns) {
  const fps = (await globby(pattern, {
    cwd,
    ignore: ignorePatterns,
    gitignore: true
  })).map(toPosixPath);
  return fps;
}
__name(glob, "glob");

// quartz/plugins/emitters/assets.ts
var Assets = /* @__PURE__ */ __name(() => {
  return {
    name: "Assets",
    getQuartzComponents() {
      return [];
    },
    async emit({ argv, cfg }, _content, _resources, _emit) {
      const assetsPath = argv.output;
      const fps = await glob("**", argv.directory, ["**/*.md", ...cfg.configuration.ignorePatterns]);
      const res = [];
      for (const fp of fps) {
        const ext = path9.extname(fp);
        const src = joinSegments(argv.directory, fp);
        const name = slugifyFilePath(fp, true) + ext;
        const dest = joinSegments(assetsPath, name);
        const dir = path9.dirname(dest);
        await fs2.promises.mkdir(dir, { recursive: true });
        await fs2.promises.copyFile(src, dest);
        res.push(dest);
      }
      return res;
    }
  };
}, "Assets");

// quartz/plugins/emitters/static.ts
import fs3 from "fs";
var Static = /* @__PURE__ */ __name(() => ({
  name: "Static",
  getQuartzComponents() {
    return [];
  },
  async emit({ argv, cfg }, _content, _resources, _emit) {
    const staticPath = joinSegments(QUARTZ, "static");
    const fps = await glob("**", staticPath, cfg.configuration.ignorePatterns);
    await fs3.promises.cp(staticPath, joinSegments(argv.output, "static"), {
      recursive: true,
      dereference: true
    });
    return fps.map((fp) => joinSegments(argv.output, "static", fp));
  }
}), "Static");

// quartz/components/scripts/spa.inline.ts
var spa_inline_default = "";

// quartz/components/scripts/popover.inline.ts
var popover_inline_default = "";

// quartz/styles/custom.scss
var custom_default = "";

// quartz/components/styles/popover.scss
var popover_default = "";

// quartz/util/theme.ts
var DEFAULT_SANS_SERIF = '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif';
var DEFAULT_MONO = "ui-monospace, SFMono-Regular, SF Mono, Menlo, monospace";
function googleFontHref(theme) {
  const { code, header, body } = theme.typography;
  return `https://fonts.googleapis.com/css2?family=${code}&family=${header}:wght@400;700&family=${body}:ital,wght@0,400;0,600;1,400;1,600&display=swap`;
}
__name(googleFontHref, "googleFontHref");
function joinStyles(theme, ...stylesheet) {
  return `
${stylesheet.join("\n\n")}

:root {
  --light: ${theme.colors.lightMode.light};
  --lightgray: ${theme.colors.lightMode.lightgray};
  --gray: ${theme.colors.lightMode.gray};
  --darkgray: ${theme.colors.lightMode.darkgray};
  --dark: ${theme.colors.lightMode.dark};
  --secondary: ${theme.colors.lightMode.secondary};
  --tertiary: ${theme.colors.lightMode.tertiary};
  --highlight: ${theme.colors.lightMode.highlight};

  --headerFont: "${theme.typography.header}", ${DEFAULT_SANS_SERIF};
  --bodyFont: "${theme.typography.body}", ${DEFAULT_SANS_SERIF};
  --codeFont: "${theme.typography.code}", ${DEFAULT_MONO};
}

:root[saved-theme="dark"] {
  --light: ${theme.colors.darkMode.light};
  --lightgray: ${theme.colors.darkMode.lightgray};
  --gray: ${theme.colors.darkMode.gray};
  --darkgray: ${theme.colors.darkMode.darkgray};
  --dark: ${theme.colors.darkMode.dark};
  --secondary: ${theme.colors.darkMode.secondary};
  --tertiary: ${theme.colors.darkMode.tertiary};
  --highlight: ${theme.colors.darkMode.highlight};
}
`;
}
__name(joinStyles, "joinStyles");

// quartz/plugins/emitters/componentResources.ts
import { Features, transform } from "lightningcss";
import { transform as transpile } from "esbuild";
function getComponentResources(ctx) {
  const allComponents = /* @__PURE__ */ new Set();
  for (const emitter of ctx.cfg.plugins.emitters) {
    const components = emitter.getQuartzComponents(ctx);
    for (const component of components) {
      allComponents.add(component);
    }
  }
  const componentResources = {
    css: /* @__PURE__ */ new Set(),
    beforeDOMLoaded: /* @__PURE__ */ new Set(),
    afterDOMLoaded: /* @__PURE__ */ new Set()
  };
  for (const component of allComponents) {
    const { css, beforeDOMLoaded, afterDOMLoaded } = component;
    if (css) {
      componentResources.css.add(css);
    }
    if (beforeDOMLoaded) {
      componentResources.beforeDOMLoaded.add(beforeDOMLoaded);
    }
    if (afterDOMLoaded) {
      componentResources.afterDOMLoaded.add(afterDOMLoaded);
    }
  }
  return {
    css: [...componentResources.css],
    beforeDOMLoaded: [...componentResources.beforeDOMLoaded],
    afterDOMLoaded: [...componentResources.afterDOMLoaded]
  };
}
__name(getComponentResources, "getComponentResources");
async function joinScripts(scripts) {
  const script = scripts.map((script2) => `(function () {${script2}})();`).join("\n");
  const res = await transpile(script, {
    minify: true
  });
  return res.code;
}
__name(joinScripts, "joinScripts");
function addGlobalPageResources(ctx, staticResources, componentResources) {
  const cfg = ctx.cfg.configuration;
  const reloadScript = ctx.argv.serve;
  if (cfg.enablePopovers) {
    componentResources.afterDOMLoaded.push(popover_inline_default);
    componentResources.css.push(popover_default);
  }
  if (cfg.analytics?.provider === "google") {
    const tagId = cfg.analytics.tagId;
    staticResources.js.push({
      src: `https://www.googletagmanager.com/gtag/js?id=${tagId}`,
      contentType: "external",
      loadTime: "afterDOMReady"
    });
    componentResources.afterDOMLoaded.push(`
      window.dataLayer = window.dataLayer || [];
      function gtag() { dataLayer.push(arguments); }
      gtag("js", new Date());
      gtag("config", "${tagId}", { send_page_view: false });
  
      document.addEventListener("nav", () => {
        gtag("event", "page_view", {
          page_title: document.title,
          page_location: location.href,
        });
      });`);
  } else if (cfg.analytics?.provider === "plausible") {
    const plausibleHost = cfg.analytics.host ?? "https://plausible.io";
    componentResources.afterDOMLoaded.push(`
      const plausibleScript = document.createElement("script")
      plausibleScript.src = "${plausibleHost}/js/script.manual.js"
      plausibleScript.setAttribute("data-domain", location.hostname)
      plausibleScript.defer = true
      document.head.appendChild(plausibleScript)

      window.plausible = window.plausible || function() { (window.plausible.q = window.plausible.q || []).push(arguments) }

      document.addEventListener("nav", () => {
        plausible("pageview")
      })
    `);
  } else if (cfg.analytics?.provider === "umami") {
    componentResources.afterDOMLoaded.push(`
      const umamiScript = document.createElement("script")
      umamiScript.src = "https://analytics.umami.is/script.js"
      umamiScript.setAttribute("data-website-id", "${cfg.analytics.websiteId}")
      umamiScript.async = true
  
      document.head.appendChild(umamiScript)
    `);
  }
  if (cfg.enableSPA) {
    componentResources.afterDOMLoaded.push(spa_inline_default);
  } else {
    componentResources.afterDOMLoaded.push(`
        window.spaNavigate = (url, _) => window.location.assign(url)
        const event = new CustomEvent("nav", { detail: { url: document.body.dataset.slug } })
        document.dispatchEvent(event)`);
  }
  let wsUrl = `ws://localhost:${ctx.argv.wsPort}`;
  if (ctx.argv.remoteDevHost) {
    wsUrl = `wss://${ctx.argv.remoteDevHost}:${ctx.argv.wsPort}`;
  }
  if (reloadScript) {
    staticResources.js.push({
      loadTime: "afterDOMReady",
      contentType: "inline",
      script: `
          const socket = new WebSocket('${wsUrl}')
          socket.addEventListener('message', () => document.location.reload())
        `
    });
  }
}
__name(addGlobalPageResources, "addGlobalPageResources");
var defaultOptions14 = {
  fontOrigin: "googleFonts"
};
var ComponentResources = /* @__PURE__ */ __name((opts) => {
  const { fontOrigin } = { ...defaultOptions14, ...opts };
  return {
    name: "ComponentResources",
    getQuartzComponents() {
      return [];
    },
    async emit(ctx, _content, resources, emit) {
      const componentResources = getComponentResources(ctx);
      if (fontOrigin === "googleFonts") {
        resources.css.push(googleFontHref(ctx.cfg.configuration.theme));
      } else if (fontOrigin === "local") {
      }
      addGlobalPageResources(ctx, resources, componentResources);
      const stylesheet = joinStyles(ctx.cfg.configuration.theme, ...componentResources.css, custom_default);
      const [prescript, postscript] = await Promise.all([
        joinScripts(componentResources.beforeDOMLoaded),
        joinScripts(componentResources.afterDOMLoaded)
      ]);
      const fps = await Promise.all([
        emit({
          slug: "index",
          ext: ".css",
          content: transform({
            filename: "index.css",
            code: Buffer.from(stylesheet),
            minify: true,
            targets: {
              safari: 15 << 16 | 6 << 8,
              // 15.6
              ios_saf: 15 << 16 | 6 << 8,
              // 15.6
              edge: 115 << 16,
              firefox: 102 << 16,
              chrome: 109 << 16
            },
            include: Features.MediaQueries
          }).code.toString()
        }),
        emit({
          slug: "prescript",
          ext: ".js",
          content: prescript
        }),
        emit({
          slug: "postscript",
          ext: ".js",
          content: postscript
        })
      ]);
      return fps;
    }
  };
}, "ComponentResources");

// quartz/plugins/emitters/404.tsx
var NotFoundPage = /* @__PURE__ */ __name(() => {
  const opts = {
    ...sharedPageComponents,
    pageBody: __default(),
    beforeBody: [],
    left: [],
    right: []
  };
  const { head: Head, pageBody, footer: Footer } = opts;
  const Body2 = Body_default();
  return {
    name: "404Page",
    getQuartzComponents() {
      return [Head, Body2, pageBody, Footer];
    },
    async emit(ctx, _content, resources, emit) {
      const cfg = ctx.cfg.configuration;
      const slug = "404";
      const url = new URL(`https://${cfg.baseUrl ?? "example.com"}`);
      const path11 = url.pathname;
      const externalResources = pageResources(path11, resources);
      const [tree, vfile] = defaultProcessedContent({
        slug,
        text: "Not Found",
        description: "Not Found",
        frontmatter: { title: "Not Found", tags: [] }
      });
      const componentData = {
        fileData: vfile.data,
        externalResources,
        cfg,
        children: [],
        tree,
        allFiles: []
      };
      return [
        await emit({
          content: renderPage(slug, componentData, opts, externalResources),
          slug,
          ext: ".html"
        })
      ];
    }
  };
}, "NotFoundPage");

// quartz/plugins/emitters/cname.ts
import chalk4 from "chalk";

// quartz.config.ts
var config = {
  configuration: {
    pageTitle: "Pelayo Arbu\xE9s",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible"
    },
    baseUrl: "pelayoarbues.com",
    ignorePatterns: ["private", "templates"],
    defaultDateType: "created",
    theme: {
      typography: {
        header: "Spectral",
        body: "Roboto",
        code: "JetBrains Mono"
      },
      colors: {
        lightMode: {
          light: "#f5f2e9",
          lightgray: "#e0dcd3",
          gray: "#b8b8b8",
          darkgray: "#4e4e4e",
          dark: "#2b2b2b",
          secondary: "#384b73",
          tertiary: "#84a59d",
          highlight: "rgba(143, 159, 169, 0.15)"
        },
        darkMode: {
          light: "#262626",
          lightgray: "#4E4E4E",
          gray: "#A4A5A6",
          darkgray: "#A4A5A6",
          dark: "#DEDFE0",
          secondary: "#BF7B6B",
          tertiary: "#F2D091",
          highlight: "r#BE616A"
        }
      }
    }
  },
  plugins: {
    transformers: [
      FrontMatter(),
      TableOfContents(),
      CreatedModifiedDate({
        priority: ["frontmatter", "filesystem"]
        // you can add 'git' here for last modified from Git but this makes the build slower
      }),
      Latex({ renderEngine: "katex" }),
      SyntaxHighlighting(),
      ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      GitHubFlavoredMarkdown(),
      CrawlLinks({ markdownLinkResolution: "shortest" }),
      Description()
    ],
    filters: [RemoveDrafts()],
    emitters: [
      AliasRedirects(),
      ComponentResources({ fontOrigin: "googleFonts" }),
      ContentPage(),
      FolderPage(),
      TagPage(),
      ContentIndex({
        enableSiteMap: true,
        enableRSS: true
      }),
      Assets(),
      Static(),
      NotFoundPage()
    ]
  }
};
var quartz_config_default = config;

// quartz/processors/parse.ts
import esbuild from "esbuild";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";

// quartz/util/perf.ts
import chalk5 from "chalk";
import pretty from "pretty-time";
var PerfTimer = class {
  static {
    __name(this, "PerfTimer");
  }
  evts;
  constructor() {
    this.evts = {};
    this.addEvent("start");
  }
  addEvent(evtName) {
    this.evts[evtName] = process.hrtime();
  }
  timeSince(evtName) {
    return chalk5.yellow(pretty(process.hrtime(this.evts[evtName ?? "start"])));
  }
};

// quartz/processors/parse.ts
import { read } from "to-vfile";
import path10 from "path";
import workerpool, { Promise as WorkerPromise } from "workerpool";

// quartz/util/log.ts
import { Spinner } from "cli-spinner";

// quartz/processors/parse.ts
function createProcessor(ctx) {
  const transformers = ctx.cfg.plugins.transformers;
  return unified().use(remarkParse).use(
    transformers.filter((p) => p.markdownPlugins).flatMap((plugin) => plugin.markdownPlugins(ctx))
  ).use(remarkRehype, { allowDangerousHtml: true }).use(transformers.filter((p) => p.htmlPlugins).flatMap((plugin) => plugin.htmlPlugins(ctx)));
}
__name(createProcessor, "createProcessor");
function createFileParser(ctx, fps) {
  const { argv, cfg } = ctx;
  return async (processor) => {
    const res = [];
    for (const fp of fps) {
      try {
        const perf = new PerfTimer();
        const file = await read(fp);
        file.value = file.value.toString().trim();
        for (const plugin of cfg.plugins.transformers.filter((p) => p.textTransform)) {
          file.value = plugin.textTransform(ctx, file.value.toString());
        }
        file.data.filePath = file.path;
        file.data.relativePath = path10.posix.relative(argv.directory, file.path);
        file.data.slug = slugifyFilePath(file.data.relativePath);
        const ast = processor.parse(file);
        const newAst = await processor.run(ast, file);
        res.push([newAst, file]);
        if (argv.verbose) {
          console.log(`[process] ${fp} -> ${file.data.slug} (${perf.timeSince()})`);
        }
      } catch (err) {
        trace(`
Failed to process \`${fp}\``, err);
      }
    }
    return res;
  };
}
__name(createFileParser, "createFileParser");

// quartz/util/sourcemap.ts
import fs4 from "fs";
import { fileURLToPath } from "url";
var options = {
  // source map hack to get around query param
  // import cache busting
  retrieveSourceMap(source) {
    if (source.includes(".quartz-cache")) {
      let realSource = fileURLToPath(source.split("?", 2)[0] + ".map");
      return {
        map: fs4.readFileSync(realSource, "utf8")
      };
    } else {
      return null;
    }
  }
};

// quartz/worker.ts
sourceMapSupport.install(options);
async function parseFiles(argv, fps, allSlugs) {
  const ctx = {
    cfg: quartz_config_default,
    argv,
    allSlugs
  };
  const processor = createProcessor(ctx);
  const parse = createFileParser(ctx, fps);
  return parse(processor);
}
__name(parseFiles, "parseFiles");
export {
  parseFiles
};
//# sourceMappingURL=transpiled-worker.mjs.map
