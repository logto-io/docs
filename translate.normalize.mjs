/** Keep fenced examples opaque while repairing prose across the whole document. */
const outsideCodeFences = (content, normalize) => {
  const protectedBlocks = [];
  const lines = [];
  let fence;
  let block = [];
  let prefix = '<!-- logto-protected-code';

  while (content.includes(prefix)) prefix += '-';

  const protectBlock = () => {
    const placeholder = `${prefix}-${protectedBlocks.length} -->`;
    protectedBlocks.push({ placeholder, content: block.join('\n') });
    lines.push(placeholder);
    block = [];
  };

  for (const line of content.split('\n')) {
    const marker =
      /^[\t ]*(?:>[\t ]*)*(?:(?:[-+*]|\d+[.)])[\t ]+)?(?<marker>`{3,}|~{3,})(?<info>.*)$/.exec(
        line
      )?.groups;

    if (fence) {
      block.push(line);
      if (
        marker &&
        marker.marker[0] === fence[0] &&
        marker.marker.length >= fence.length &&
        !marker.info.trim()
      ) {
        protectBlock();
        fence = undefined;
      }
    } else if (marker && !(marker.marker[0] === '`' && marker.info.includes('`'))) {
      block.push(line);
      fence = marker.marker;
    } else {
      lines.push(line);
    }
  }

  if (block.length > 0) protectBlock();

  return protectedBlocks.reduce(
    (result, block) => result.replace(block.placeholder, () => block.content),
    normalize(lines.join('\n'))
  );
};

/**
 * Collapse a simple multiline custom component used in a paragraph or Markdown list item.
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
    /^(?<indent>[\t ]*)(?<listPrefix>(?:(?:[*+-]|\d+\.)\s+)?)(?<openingTag><(?<tagName>[A-Z][\dA-Za-z]*)\b[^\n>]*>)\n[\t ]+(?<childText>[^\n<]+)\n[\t ]*<\/\k<tagName>>(?<trailingText>[\t ]+\S[^\n]*)$/gm,
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
      { lines: [], openTags: [] }
    )
    .lines.join('\n');

/**
 * Repair translated inline code followed by a Markdown link when the model swaps their targets.
 *
 * Source like:
 *
 * `Grant.LimitExceeded` [webhook event](/developers/webhooks/webhooks-events)
 *
 * can become:
 *
 * [webhook](Grant.LimitExceeded) (/developers/webhooks/webhooks-events)
 *
 * A dotted PascalCase identifier is not a valid docs destination, while the following
 * root-relative path is. Restore the identifier as inline code and attach the real path
 * to the translated link label.
 *
 * @param {string} content
 * @returns {string}
 */
const normalizeMisplacedInlineCodeLinks = (content) =>
  content.replaceAll(
    /\[(?<label>[^\n\]]+)]\((?<identifier>[A-Z][\dA-Za-z]*(?:\.[A-Z][\dA-Za-z]*)+)\)[\t ]+\((?<destination>\/[^\s)]+)\)/g,
    '`$<identifier>` [$<label>]($<destination>)'
  );

const normalizeStructure = (content) =>
  normalizeMisplacedInlineCodeLinks(
    normalizeDetailsClosingTags(normalizeMultilineCustomComponents(content))
  );

export const normalizeTranslatedMdxAfterAutofix = (content) =>
  outsideCodeFences(content, normalizeStructure);

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
const normalizeProse = (content) =>
  normalizeStructure(
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

export const normalizeTranslatedMdx = (content) => outsideCodeFences(content, normalizeProse);
