import {
  Children,
  cloneElement,
  isValidElement,
  useId,
  type HTMLAttributes,
  type ReactElement,
  type ReactNode,
} from 'react';

type ReactElementWithChildren = ReactElement<{ children?: ReactNode }>;

/**
 * Regex for header width hints: captures label + width token.
 * Forms: (25%), (12.5%), (120px), (80.5px)
 * Group1: label (non-greedy). Group2: number + unit (%|px).
 * Must be at end of header text; unit required.
 * Allows optional decimals; no negatives or other units.
 * Example header: | Name (30%) | Path (240px) | Notes |
 */
const columnWidthHintRegex = /^(.*?)\s*\((\d+(?:\.\d+)?(?:%|px))\)\s*$/;

function isElementTag(node: ReactNode, tag: string): node is ReactElementWithChildren {
  return isValidElement(node) && node.type === tag;
}

type HeaderParseResult = {
  element: ReactNode;
  width?: string;
};

function parseHeaderCell(node: ReactNode): HeaderParseResult {
  if (!isElementTag(node, 'th') || typeof node.props.children !== 'string') {
    return { element: node };
  }
  const textContent = node.props.children.trim();

  const match = columnWidthHintRegex.exec(textContent);
  if (!match) {
    return { element: node };
  }
  const width = match[2];
  const cleanedLabel = (match[1] ?? '').trim();

  return { element: cloneElement(node, {}, cleanedLabel), width };
}

/**
 * Table column width hints via header suffix.
 * Supported units: % and px.
 * Example: | Name (25%) | Price (320px) | Notes |
 * - Hint must appear at end of header cell text.
 * - Unit is required; otherwise cell is ignored.
 * - First header row only.
 */
export default function Table(props: HTMLAttributes<HTMLTableElement>) {
  const tableId = useId();
  const { children, ...rest } = props;
  const tableNodes = Children.toArray(children);
  const theadPosition = tableNodes.findIndex((node) => isElementTag(node, 'thead'));
  if (theadPosition === -1) {
    return <table {...rest}>{tableNodes}</table>;
  }
  const theadNode = tableNodes[theadPosition];
  if (!isElementTag(theadNode, 'thead')) {
    return <table {...rest}>{tableNodes}</table>;
  }
  const headRow = Children.toArray(theadNode.props.children)[0];

  if (!headRow || !isElementTag(headRow, 'tr')) {
    return <table {...rest}>{tableNodes}</table>;
  }
  const parsedHeadCells = Children.toArray(headRow.props.children).map((cell) =>
    parseHeaderCell(cell)
  );
  const headCellElements = parsedHeadCells.map(({ element }): ReactNode => element);
  const rebuiltHeadRow = cloneElement(headRow, {}, headCellElements);
  const rebuiltThead = cloneElement(theadNode, {}, rebuiltHeadRow);
  const finalChildren = tableNodes.map(
    (node, index): ReactNode => (index === theadPosition ? rebuiltThead : node)
  );

  const hasWidths = parsedHeadCells.some((cell) => Boolean(cell.width));

  return (
    <table {...rest}>
      {hasWidths && (
        <colgroup>
          {parsedHeadCells.map(({ width }, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <col key={`${tableId}-col-${index}`} style={width ? { width } : undefined} />
          ))}
        </colgroup>
      )}
      {finalChildren}
    </table>
  );
}
