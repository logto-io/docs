/**
 * Split trailing text after closing custom component tags into the next line.
 *
 * This prevents invalid MDX like:
 * </CloudLink> some text
 *
 * which may trigger `end-tag-mismatch` lint errors after translation.
 *
 * @param {string} content
 * @returns {string}
 */
export const normalizeTranslatedMdx = (content) =>
  content
    // Normalize irregular whitespace that may slip in from model output, e.g. French `U+202F`.
    .replaceAll(/[\u00A0\u2002-\u200A\u202F]/g, ' ')
    .replaceAll(/[\u2060\uFEFF]/g, '')
    .split('\n')
    .flatMap((line) => {
      // Fix headings like `### Title{slug} \{#slug}` where the model accidentally injects
      // a bare `{slug}` before the real escaped anchor. The replacement keeps only `\{#slug}`.
      const normalizedHeadingLine = line.replace(
        /^(#{1,6}\s+.*?)(?<!\\){([\w-]+)}\s+(\\{#\2})$/,
        '$1 $3'
      );
      // Fix translated MDX where a custom component closing tag is followed by trailing text on
      // the same line, e.g. `</CloudLink> more text`, by moving that text onto the next line.
      // This also supports list items like `- </CloudLink> more text` or `1. </CloudLink> more text`.
      const match =
        /^(?<indent>\s*)(?<listPrefix>(?:(?:[*+-]|\d+\.)\s+)?)?(?<closingTag><\/[A-Z][\dA-Za-z]*>)\s+(?<trailingText>\S.*)$/.exec(
          normalizedHeadingLine
        );

      if (!match?.groups) {
        return [normalizedHeadingLine];
      }

      const { indent, listPrefix = '', closingTag, trailingText } = match.groups;
      const trailingIndent = `${indent}${' '.repeat(listPrefix.length)}`;

      return [`${indent}${listPrefix}${closingTag}`, `${trailingIndent}${trailingText}`];
    })
    .join('\n');
