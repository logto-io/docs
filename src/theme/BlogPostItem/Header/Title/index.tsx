import Link from '@docusaurus/Link';
import { useBlogPost } from '@docusaurus/theme-common/internal';
import type { Props } from '@theme/BlogPostItem/Header/Title';
import clsx from 'clsx';

import styles from './styles.module.css';

const Title = ({ className }: Props): JSX.Element => {
  const { metadata, isBlogPostPage } = useBlogPost();
  const { permalink, title } = metadata;
  const TitleHeading = isBlogPostPage ? 'h1' : 'h2';

  return (
    <TitleHeading
      className={clsx(styles.title, !isBlogPostPage && styles.listTitle, className)}
      itemProp="headline"
    >
      {isBlogPostPage ? (
        title
      ) : (
        <Link itemProp="url" to={permalink}>
          {title}
        </Link>
      )}
    </TitleHeading>
  );
};

export default Title;
