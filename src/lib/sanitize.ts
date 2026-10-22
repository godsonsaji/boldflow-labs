import sanitizeHtml from "sanitize-html";

/**
 * Strict allowlist configuration for blog content.
 * Allows rich editorial formatting while strictly preventing Stored Cross-Site Scripting (XSS),
 * script injection, event handlers, and malicious URL schemes.
 */
export const blogSanitizerOptions: sanitizeHtml.IOptions = {
  allowedTags: [
    // Headings
    "h1", "h2", "h3", "h4", "h5", "h6",
    // Text blocks & formatting
    "p", "strong", "b", "em", "i", "u", "s", "strike", "blockquote", "cite", "hr", "br",
    // Code & preformatted
    "pre", "code",
    // Lists
    "ul", "ol", "li",
    // Links & media
    "a", "img",
    // Tables
    "table", "thead", "tbody", "tfoot", "tr", "th", "td",
    // Layout containers
    "div", "span", "figure", "figcaption", "details", "summary",
  ],
  allowedAttributes: {
    a: ["href", "name", "target", "rel", "title", "class"],
    img: ["src", "alt", "title", "width", "height", "loading", "decoding", "class"],
    table: ["class", "border", "cellpadding", "cellspacing"],
    th: ["class", "colspan", "rowspan", "align", "valign", "scope"],
    td: ["class", "colspan", "rowspan", "align", "valign"],
    pre: ["class"],
    code: ["class"],
    div: ["class"],
    span: ["class"],
    p: ["class"],
    h1: ["class"],
    h2: ["class"],
    h3: ["class"],
    h4: ["class"],
    h5: ["class"],
    h6: ["class"],
    blockquote: ["class"],
    ul: ["class"],
    ol: ["class"],
    li: ["class"],
    details: ["class", "open"],
    summary: ["class"],
  },
  allowedSchemes: ["http", "https", "mailto"],
  allowedSchemesByTag: {
    a: ["http", "https", "mailto"],
    img: ["http", "https"],
  },
  allowProtocolRelative: false,
  transformTags: {
    a: (tagName, attribs) => {
      // Ensure target="_blank" links always have noopener noreferrer
      if (attribs.target === "_blank") {
        const existingRel = attribs.rel ? attribs.rel.split(/\s+/) : [];
        if (!existingRel.includes("noopener")) existingRel.push("noopener");
        if (!existingRel.includes("noreferrer")) existingRel.push("noreferrer");
        attribs.rel = existingRel.join(" ");
      }
      return {
        tagName: "a",
        attribs,
      };
    },
  },
};

/**
 * Sanitizes rich HTML blog content using an explicit, secure allowlist.
 * Strips all script tags, event handlers (on*), iframe/object/embed tags,
 * and dangerous URI schemes (javascript:, data:, vbscript:).
 */
export function sanitizeBlogHtml(dirtyHtml: string | null | undefined): string {
  if (!dirtyHtml || typeof dirtyHtml !== "string") {
    return "";
  }
  return sanitizeHtml(dirtyHtml, blogSanitizerOptions);
}
