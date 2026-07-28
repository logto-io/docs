/**
 * Collapse a simple multiline custom component used inside a Markdown list item.
 *
 * MDX treats the opening tag as part of the list-item paragraph, so translated output like:
 *
 * - <CloudLink>
 *     translated text
 *   </CloudLink> trailing text
 *
 * cannot be parsed. Keep the component and its plain-text child in the same paragraph.
 *
 * @param {string} content
 * @returns {string}
 */
const normalizeMultilineCustomComponents = (content) =>
  content.replaceAll(
    /^(?<indent>[\t ]*)(?<listPrefix>(?:[*+-]|\d+\.)\s+)(?<openingTag><(?<tagName>[A-Z][\dA-Za-z]*)\b[^\n>]*>)\n[\t ]+(?<childText>[^\n<]+)\n[\t ]*<\/\k<tagName>>(?<trailingText>[\t ]+\S[^\n]*)$/gm,
    (...arguments_) => {
      const { indent, listPrefix, openingTag, tagName, childText, trailingText } =
        arguments_.at(-1);

      return [
        `${indent}{/* prettier-ignore */}`,
        `${indent}${listPrefix}${openingTag}${childText.trim()}</${tagName}>${trailingText}`,
      ].join('\n');
    }
  );

/**
 * Repair an unambiguous translated HTML tag mismatch in details blocks.
 *
 * Once </summary> has closed the summary and <details> is the current open tag, another
 * </summary> can only be the translated form of the expected </details>.
 *
 * @param {string} content
 * @returns {string}
 */
const normalizeDetailsClosingTags = (content) =>
  content
    .split('\n')
    .reduce(
      (state, line) => {
        if (/^\s*(?:`{3,}|~{3,})/.test(line)) {
          return {
            ...state,
            inCodeFence: !state.inCodeFence,
            lines: [...state.lines, line],
          };
        }

        if (state.inCodeFence) {
          return { ...state, lines: [...state.lines, line] };
        }

        const match = /^(?<indent>\s*)<(?<closing>\/?)(?<tagName>details|summary)>$/.exec(line);

        if (!match?.groups) {
          return { ...state, lines: [...state.lines, line] };
        }

        const { indent, closing, tagName } = match.groups;

        if (!closing) {
          return {
            ...state,
            openTags: [...state.openTags, tagName],
            lines: [...state.lines, line],
          };
        }

        const currentOpenTag = state.openTags.at(-1);

        if (currentOpenTag === tagName) {
          return {
            ...state,
            openTags: state.openTags.slice(0, -1),
            lines: [...state.lines, line],
          };
        }

        if (tagName === 'summary' && currentOpenTag === 'details') {
          return {
            ...state,
            openTags: state.openTags.slice(0, -1),
            lines: [...state.lines, `${indent}</details>`],
          };
        }

        return { ...state, lines: [...state.lines, line] };
      },
      { inCodeFence: false, lines: [], openTags: [] }
    )
    .lines.join('\n');

export const normalizeTranslatedMdxAfterAutofix = (content) =>
  normalizeDetailsClosingTags(normalizeMultilineCustomComponents(content));

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
  normalizeTranslatedMdxAfterAutofix(
    content
      // Normalize irregular whitespace that may slip in from model output, e.g. French `U+202F`.
      .replaceAll(/[\u00A0\u2002-\u200A\u202F]/g, ' ')
      .replaceAll(/[\u2060\uFEFF]/g, '')
  )
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
