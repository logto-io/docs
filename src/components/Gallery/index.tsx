import { useDocsSidebar } from '@docusaurus/plugin-content-docs/client';

import fallbackImage from './fallback.png';
import styles from './index.module.scss';

type Category = {
  label: string;
  description?: string;
  items: Array<{ label: string; href: string; logoFilename?: string; description?: string }>;
};

const stringIfTruthy = (value: unknown) => (value ? String(value) : undefined);

type Props = {
  readonly path: 'quick-starts' | 'integrations';
};

/**
 * A component that shows a gallery of guide items.
 *
 * Note: This component is only available in the "Quick starts" and "Integrations" tabs of the documentation.
 */
const Gallery = ({ path }: Props) => {
  const guideItemPath = `/${path}/`;
  const sidebar = useDocsSidebar();

  if (!sidebar) {
    return null;
  }

  const sections = sidebar.items.reduce<Category[]>((data, item) => {
    if (item.type !== 'link') {
      return data;
    }

    if (item.unlisted || item.href === guideItemPath) {
      return data;
    }

    if (item.href === '#') {
      return [
        ...data,
        {
          label:
            item.label +
            (item.customProps?.additionalLabel
              ? ` ${String(item.customProps.additionalLabel)}`
              : ''),
          description: stringIfTruthy(item.customProps?.description),
          items: [],
        },
      ];
    }

    if (!item.href.startsWith(guideItemPath)) {
      return data;
    }

    const lastCategory = data.at(-1);

    if (!lastCategory) {
      return data;
    }

    return [
      ...data.slice(0, -1),
      {
        ...lastCategory,
        items: [
          ...lastCategory.items,
          {
            label: item.label,
            href: item.href,
            logoFilename: stringIfTruthy(item.customProps?.logoFilename),
            description: stringIfTruthy(item.customProps?.description),
          },
        ],
      },
    ];
  }, []);

  return (
    <section className={styles.gallery}>
      {sections.map((category) => (
        <div key={category.label}>
          <h2 className={styles.categoryLabel}>{category.label}</h2>
          <section className={styles.list}>
            {category.items.map((item) => (
              <a key={item.href} href={item.href} className={styles.link} title={item.description}>
                <img
                  className={styles.logo}
                  alt="Logo"
                  src={`/img/logo/${item.logoFilename || `${item.href.slice(guideItemPath.length)}.svg`}`}
                  onError={({ currentTarget }) => {
                    // eslint-disable-next-line @silverhand/fp/no-mutation
                    currentTarget.src = fallbackImage;
                  }}
                />
                <span className={styles.title}>{item.label}</span>
                <span className={styles.subtitle}>{item.description}</span>
              </a>
            ))}
          </section>
        </div>
      ))}
    </section>
  );
};

export default Gallery;
