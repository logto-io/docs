import Link from '@docusaurus/Link';
import { translate } from '@docusaurus/Translate';
import isInternalUrl from '@docusaurus/isInternalUrl';
import type { PropSidebarItemCategory, PropSidebarItemLink } from '@docusaurus/plugin-content-docs';
import { useDocById, findFirstSidebarItemLink } from '@docusaurus/plugin-content-docs/client';
import { usePluralForm } from '@docusaurus/theme-common';
import type { Props } from '@theme/DocCard';
import clsx from 'clsx';
import { type ReactNode } from 'react';

import styles from './styles.module.scss';

function useCategoryItemsPlural() {
  const { selectMessage } = usePluralForm();
  return (count: number) =>
    selectMessage(
      count,
      translate(
        {
          message: '1 item|{count} items',
          id: 'theme.docs.DocCard.categoryDescription.plurals',
          description:
            'The default description for a category card in the generated index about how many items this category includes',
        },
        { count }
      )
    );
}

function CardContainer({
  href,
  children,
}: {
  readonly href: string;
  readonly children: ReactNode;
}): JSX.Element {
  return (
    <Link href={href} className={clsx('card padding--lg', styles.cardContainer)}>
      {children}
    </Link>
  );
}

export function CardLayout({
  href,
  icon,
  title,
  description,
}: {
  readonly href: string;
  readonly icon?: ReactNode;
  readonly title: string;
  readonly description?: string;
}): JSX.Element {
  return (
    <CardContainer href={href}>
      {icon}
      <label className={styles.cardTitle} title={title}>
        {title}
      </label>
      {description && (
        <p className={styles.cardDescription} title={description}>
          {description}
        </p>
      )}
    </CardContainer>
  );
}

function CardCategory({
  item,
}: {
  readonly item: PropSidebarItemCategory;
  // eslint-disable-next-line @typescript-eslint/ban-types
}): JSX.Element | null {
  const href = findFirstSidebarItemLink(item);
  const categoryItemsPlural = useCategoryItemsPlural();

  // Unexpected: categories that don't have a link have been filtered upfront
  if (!href) {
    return null;
  }

  return (
    <CardLayout
      href={href}
      icon="🗃️"
      title={item.label}
      description={item.description ?? categoryItemsPlural(item.items.length)}
    />
  );
}

function CardLink({
  item,
}: {
  readonly item: PropSidebarItemLink & { customProps?: { icon?: ReactNode } };
}): JSX.Element {
  const icon = isInternalUrl(item.href) ? '📄️' : '🔗';
  const doc = useDocById(item.docId ?? undefined);
  return (
    <CardLayout
      href={item.href}
      icon={item.customProps?.icon ?? icon}
      title={item.label}
      description={item.description ?? doc?.description}
    />
  );
}

export default function DocCard({ item }: Props): JSX.Element {
  switch (item.type) {
    case 'link': {
      return <CardLink item={item} />;
    }
    case 'category': {
      return <CardCategory item={item} />;
    }
    default: {
      throw new Error(`unknown item type ${JSON.stringify(item)}`);
    }
  }
}
