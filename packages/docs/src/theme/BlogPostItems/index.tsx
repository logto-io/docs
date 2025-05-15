import Link from '@docusaurus/Link';
import { BlogPostProvider } from '@docusaurus/plugin-content-blog/client';
import BlogPostItem from '@theme/BlogPostItem';
import type { Props } from '@theme/BlogPostItems';

import styles from './index.module.scss';

export default function BlogPostItems({
  items,
  component: BlogPostItemComponent = BlogPostItem,
}: Props): JSX.Element {
  return (
    <>
      {items.map(({ content: BlogPostContent }) => (
        <BlogPostProvider key={BlogPostContent.metadata.permalink} content={BlogPostContent}>
          <Link className={styles.link} to={BlogPostContent.metadata.permalink}>
            <BlogPostItemComponent>
              <BlogPostContent />
            </BlogPostItemComponent>
          </Link>
        </BlogPostProvider>
      ))}
    </>
  );
}
