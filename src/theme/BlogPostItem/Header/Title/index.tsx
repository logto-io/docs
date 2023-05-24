import BrowserOnly from '@docusaurus/BrowserOnly';
import Link from '@docusaurus/Link';
import { useBlogPost } from '@docusaurus/theme-common/internal';
import Admonition from '@theme/Admonition';
import type { Props } from '@theme/BlogPostItem/Header/Title';
import clsx from 'clsx';
import { useCallback, useEffect } from 'react';

import styles from './styles.module.css';

const Content = ({ className }: Props): JSX.Element => {
  const { metadata, isBlogPostPage } = useBlogPost();
  const { permalink, title } = metadata;
  const TitleHeading = isBlogPostPage ? 'h1' : 'h2';
  const shouldReplace = window.location.pathname.startsWith('/blog');

  const getNewBlogUrl = useCallback(() => {
    const url = new URL(
      isBlogPostPage ? window.location.pathname.replace(/^\/blog/, '') : '/',
      'https://blog.logto.io'
    );
    const parameters = new URLSearchParams(window.location.search);

    for (const [key, value] of parameters.entries()) {
      url.searchParams.append(key, value);
    }

    if (!url.pathname.endsWith('/')) {
      // eslint-disable-next-line @silverhand/fp/no-mutation
      url.pathname += '/';
    }

    return url;
  }, [isBlogPostPage]);

  // Redirect to the new blog. The whole component will be removed later.
  useEffect(() => {
    if (!shouldReplace) {
      return;
    }

    // https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics#properly-inject-canonical-links
    // Remove all canonical tags before inserting
    for (const element of document.head.querySelectorAll('link')) {
      if (['canonical', 'alternate'].includes(element.getAttribute('rel') ?? '')) {
        element.parentNode?.removeChild(element);
      }
    }

    // Insert the canonical tag to the new blog
    const linkTag = document.createElement('link');
    linkTag.setAttribute('rel', 'canonical');
    // eslint-disable-next-line @silverhand/fp/no-mutation
    linkTag.href = getNewBlogUrl().href;
    document.head.append(linkTag);
  }, [getNewBlogUrl, shouldReplace]);

  return (
    <>
      {shouldReplace && (
        <>
          <Admonition type="tip">
            Logto Blog has been moved to the new place!{' '}
            <a href={getNewBlogUrl().href}>Click here</a> to see this article in the new blog.
          </Admonition>
          <hr></hr>
        </>
      )}
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
    </>
  );
};

const Title = () => {
  return <BrowserOnly>{() => <Content />}</BrowserOnly>;
};

export default Title;
