import Link from '@docusaurus/Link';
import { useBlogPost } from '@docusaurus/theme-common/internal';
import type { Props } from '@theme/BlogPostItem/Header/Title';
import clsx from 'clsx';
import { useEffect } from 'react';

import styles from './styles.module.css';

const Title = ({ className }: Props): JSX.Element => {
  const { metadata, isBlogPostPage } = useBlogPost();
  const { permalink, title } = metadata;
  const TitleHeading = isBlogPostPage ? 'h1' : 'h2';

  // Redirect to the new blog. The whole component will be removed later.
  useEffect(() => {
    if (!window.location.pathname.startsWith('/blog')) {
      return;
    }

    const url = new URL(
      isBlogPostPage ? window.location.pathname.replace(/^\/blog/, '') : '/',
      'https://blog.logto.io'
    );
    const parameters = new URLSearchParams(window.location.search);

    for (const [key, value] of parameters.entries()) {
      url.searchParams.append(key, value);
    }

    // eslint-disable-next-line @silverhand/fp/no-mutation
    window.location.href = url.href;
  }, [isBlogPostPage]);

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
