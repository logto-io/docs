import type { Props } from '@theme/BlogLayout';
import BlogSidebar from '@theme/BlogSidebar';
import Layout from '@theme/Layout';
import ReactModal from 'react-modal';

import styles from './index.module.scss';

ReactModal.setAppElement('#__docusaurus');

export default function BlogLayout(props: Props): JSX.Element {
  const { sidebar, toc, children, ...layoutProps } = props;
  const hasSidebar = sidebar && sidebar.items.length > 0;

  return (
    <Layout {...layoutProps}>
      <div className={styles.container}>
        <div className={styles.row}>
          {hasSidebar && <BlogSidebar sidebar={sidebar} />}
          <main className={styles.main}>{children}</main>
          {toc && <div className={styles.toc}>{toc}</div>}
        </div>
      </div>
    </Layout>
  );
}
