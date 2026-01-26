import { useCurrentSidebarCategory } from '@docusaurus/plugin-content-docs/client';

import { CardLayout } from '@site/src/theme/DocCard';

import styles from './index.module.scss';

/**
 * Render a mini gallery of items from the current sidebar category.
 * This component should be only used on category index pages.
 */
const MiniGallery = () => {
  const category = useCurrentSidebarCategory();

  return (
    <section className={styles.miniGallery}>
      {category.items.map((item) => {
        if (item.type !== 'link') {
          return null;
        }

        if (item.unlisted) {
          return null;
        }

        return <CardLayout key={item.href} title={item.label} href={item.href} />;
      })}
    </section>
  );
};

export default MiniGallery;
