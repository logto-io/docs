import { type PropBlogPostMetadata } from '@docusaurus/plugin-content-blog';
import { condString } from '@silverhand/essentials';

import styles from './index.module.scss';

type Props = {
  readonly metadata: PropBlogPostMetadata;
};

/**
 * Escape potential parentheses in the SDK / connector name.
 * The result will be used for the regex that splits the title into parts.
 */
const normalizeName = (name: string) => name.replaceAll('(', '\\(').replaceAll(')', '\\)');

const TitleWithHighlights = ({ metadata }: Props) => {
  const { frontMatter, title } = metadata;
  const sdkName = condString('sdk' in frontMatter && frontMatter.sdk);
  const connectorName = condString('connector' in frontMatter && frontMatter.connector);

  const titleParts = title
    .split(new RegExp(`(${normalizeName(connectorName)}|${normalizeName(sdkName)})`, 'g'))
    .filter(Boolean);

  return titleParts.map((part) => {
    if (part === sdkName) {
      return (
        <span key={`${frontMatter.slug}-${sdkName}`} className={styles.highlight}>
          {part}
        </span>
      );
    }
    if (part === connectorName) {
      return (
        <span key={`${frontMatter.slug}-${connectorName}`} className={styles.highlight}>
          {part}
        </span>
      );
    }
    return part;
  });
};

export default TitleWithHighlights;
