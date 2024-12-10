/**
 * Charles note: Nothing is changed in this file. The component is swizzled
 * as I need to override the `codeBlockTitle` class in the CSS.
 */
import { useThemeConfig, usePrismTheme } from '@docusaurus/theme-common';
import {
  parseCodeBlockTitle,
  parseLanguage,
  parseLines,
  containsLineNumbers,
  useCodeWordWrap,
} from '@docusaurus/theme-common/internal';
import Container from '@theme/CodeBlock/Container';
import type { Props } from '@theme/CodeBlock/Content/String';
import CopyButton from '@theme/CodeBlock/CopyButton';
import Line from '@theme/CodeBlock/Line';
import WordWrapButton from '@theme/CodeBlock/WordWrapButton';
import clsx from 'clsx';
import { Highlight } from 'prism-react-renderer';

import styles from './styles.module.css';

// Prism languages are always lowercase
// We want to fail-safe and allow both "php" and "PHP"
// See https://github.com/facebook/docusaurus/issues/9012
function normalizeLanguage(language: string | undefined): string | undefined {
  return language?.toLowerCase();
}

export default function CodeBlockString({
  children,
  className: blockClassName = '',
  metastring,
  title: titleProp,
  showLineNumbers: showLineNumbersProp,
  language: languageProp,
}: Props): JSX.Element {
  const {
    prism: { defaultLanguage, magicComments },
  } = useThemeConfig();
  const language = normalizeLanguage(
    languageProp ?? parseLanguage(blockClassName) ?? defaultLanguage
  );

  const prismTheme = usePrismTheme();
  const wordWrap = useCodeWordWrap();

  // We still parse the metastring in case we want to support more syntax in the
  // future. Note that MDX doesn't strip quotes when parsing metastring:
  // "title=\"xyz\"" => title: "\"xyz\""
  const title = parseCodeBlockTitle(metastring) || titleProp;

  const { lineClassNames, code } = parseLines(children, {
    metastring,
    language,
    magicComments,
  });
  const showLineNumbers = showLineNumbersProp ?? containsLineNumbers(metastring);

  return (
    <Container
      as="div"
      className={clsx(
        blockClassName,
        language && !blockClassName.includes(`language-${language}`) && `language-${language}`
      )}
    >
      {title && <div className={styles.codeBlockTitle}>{title}</div>}
      <div className={styles.codeBlockContent}>
        <Highlight theme={prismTheme} code={code} language={language ?? 'text'}>
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <pre
              ref={wordWrap.codeBlockRef}
              // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
              tabIndex={0}
              className={clsx(className, styles.codeBlock, 'thin-scrollbar')}
              style={style}
            >
              <code
                className={clsx(
                  styles.codeBlockLines,
                  showLineNumbers && styles.codeBlockLinesWithNumbering
                )}
              >
                {tokens.map((line, i) => (
                  <Line
                    // eslint-disable-next-line react/no-array-index-key
                    key={i}
                    line={line}
                    getLineProps={getLineProps}
                    getTokenProps={getTokenProps}
                    classNames={lineClassNames[i]}
                    showLineNumbers={showLineNumbers}
                  />
                ))}
              </code>
            </pre>
          )}
        </Highlight>
        <div className={styles.buttonGroup}>
          {(wordWrap.isEnabled || wordWrap.isCodeScrollable) && (
            <WordWrapButton
              className={styles.codeButton}
              isEnabled={wordWrap.isEnabled}
              onClick={() => {
                wordWrap.toggle();
              }}
            />
          )}
          <CopyButton className={styles.codeButton} code={code} />
        </div>
      </div>
    </Container>
  );
}
