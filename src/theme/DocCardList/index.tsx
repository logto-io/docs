import {
  useCurrentSidebarCategory,
  filterDocCardListItems,
} from '@docusaurus/plugin-content-docs/client';
import DocCard from '@theme/DocCard';
import type { Props } from '@theme/DocCardList';
import clsx from 'clsx';

import styles from './index.module.scss';

function DocCardListForCurrentSidebarCategory({ className }: Props) {
  const category = useCurrentSidebarCategory();
  return <DocCardList items={category.items} className={className} />;
}

export default function DocCardList(props: Props): JSX.Element {
  const { items, className } = props;
  if (!items) {
    return <DocCardListForCurrentSidebarCategory {...props} />;
  }
  const filteredItems = filterDocCardListItems(items);
  return (
    <section className={clsx(styles.section, className)}>
      {filteredItems.map((item, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <article key={index} className={styles.article}>
          <DocCard item={item} />
        </article>
      ))}
    </section>
  );
}
