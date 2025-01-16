import { useBlogPost } from '@docusaurus/plugin-content-blog/client';
import type { Props } from '@theme/BlogPostItem';
import BlogPostItemContainer from '@theme/BlogPostItem/Container';
import BlogPostItemContent from '@theme/BlogPostItem/Content';
import BlogPostItemFooter from '@theme/BlogPostItem/Footer';
import BlogPostItemHeader from '@theme/BlogPostItem/Header';
import clsx from 'clsx';

import styles from './index.module.scss';

// Apply a bottom margin in list view - Charles commented out
// function useContainerClassName() {
//   const {isBlogPostPage} = useBlogPost();
//   return !isBlogPostPage ? 'margin-bottom--xl' : undefined;
// }

export default function BlogPostItem({ children, className }: Props): JSX.Element {
  const { isBlogPostPage } = useBlogPost();
  return (
    <BlogPostItemContainer
      className={clsx(!isBlogPostPage && styles.listViewItemContainer, className)}
    >
      <BlogPostItemHeader />
      <BlogPostItemContent>{children}</BlogPostItemContent>
      <BlogPostItemFooter />
    </BlogPostItemContainer>
  );
}
