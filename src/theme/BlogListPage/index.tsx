import Translate from '@docusaurus/Translate';
import { useHistory, useLocation } from '@docusaurus/router';
import { PageMetadata, HtmlClassNameProvider, ThemeClassNames } from '@docusaurus/theme-common';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { conditional } from '@silverhand/essentials';
import BlogLayout from '@theme/BlogLayout';
import type { Props } from '@theme/BlogListPage';
import BlogListPageStructuredData from '@theme/BlogListPage/StructuredData';
import BlogListPaginator from '@theme/BlogListPaginator';
import BlogPostItems from '@theme/BlogPostItems';
import SearchMetadata from '@theme/SearchMetadata';
import clsx from 'clsx';
import { useMemo } from 'react';

import { getConnectorPath, getSdkPath } from '@site/plugins/tutorial-generator/utils';

import TitleWithSelectionDropdown from '../BlogPostItem/Header/TitleWithSelectionDropdown';

import styles from './index.module.scss';

function BlogListPageMetadata(props: Props): JSX.Element {
  const { metadata } = props;
  const {
    siteConfig: { title: siteTitle },
  } = useDocusaurusContext();

  const { blogDescription, blogTitle, permalink } = metadata;
  const isBlogOnlyMode = permalink === '/';
  const title = isBlogOnlyMode ? siteTitle : blogTitle;
  return (
    <>
      <PageMetadata title={title} description={blogDescription} />
      <SearchMetadata tag="blog_posts_list" />
    </>
  );
}

function BlogListPageContent(props: Props): JSX.Element {
  const { metadata, items, sidebar } = props;
  const { search } = useLocation();
  const { push } = useHistory();
  const searchParams = new URLSearchParams(search);
  const sdk = conditional(searchParams.get('sdk'));
  const connector = conditional(searchParams.get('connector'));

  const filteredItems = useMemo(() => {
    if (!sdk && !connector) {
      return items;
    }
    if (!sdk && connector) {
      return items.filter((item) => item.content.metadata.tags[1]?.label === connector);
    }
    if (sdk && !connector) {
      return items.filter((item) => item.content.metadata.tags[2]?.label === sdk);
    }
    return items.filter(
      (item) =>
        item.content.metadata.tags[1]?.label === connector &&
        item.content.metadata.tags[2]?.label === sdk
    );
  }, [items, sdk, connector]);

  return (
    <BlogLayout sidebar={sidebar}>
      <h1 className={styles.title}>
        <TitleWithSelectionDropdown
          defaultConnectorSlugPart={connector}
          defaultSdkSlugPart={sdk}
          onSelectConnector={(selection) => {
            if (selection) {
              searchParams.set('connector', getConnectorPath(selection));
            } else {
              searchParams.delete('connector');
            }
            push({
              search: searchParams.toString(),
            });
          }}
          onSelectSdk={(selection) => {
            if (selection) {
              searchParams.set('sdk', getSdkPath(selection));
            } else {
              searchParams.delete('sdk');
            }
            push({
              search: searchParams.toString(),
            });
          }}
        />
      </h1>
      <h2 className={styles.subtitle}>
        <Translate id="theme.blog.tutorial.subtitle">
          Follow our step-by-step tutorial to set up an authentication system right away.
        </Translate>
      </h2>
      <BlogPostItems items={filteredItems} />
      <BlogListPaginator metadata={metadata} />
    </BlogLayout>
  );
}

export default function BlogListPage(props: Props): JSX.Element {
  return (
    <HtmlClassNameProvider
      className={clsx(ThemeClassNames.wrapper.blogPages, ThemeClassNames.page.blogListPage)}
    >
      <BlogListPageMetadata {...props} />
      <BlogListPageStructuredData {...props} />
      <BlogListPageContent {...props} />
    </HtmlClassNameProvider>
  );
}
