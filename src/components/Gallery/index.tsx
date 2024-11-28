import { useDocsSidebar } from '@docusaurus/plugin-content-docs/client';
import ThemedImage from '@theme/ThemedImage';

import styles from './index.module.scss';

type Category = {
  label: string;
  description?: string;
  items: Array<{
    label: string;
    href: string;
    logoFilename: string;
    darkLogoFilename?: string;
    description?: string;
  }>;
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
            logoFilename:
              stringIfTruthy(item.customProps?.logoFilename) ??
              `${item.href.slice(guideItemPath.length)}.svg`,
            darkLogoFilename: stringIfTruthy(item.customProps?.darkLogoFilename),
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
                <ThemedImage
                  className={styles.logo}
                  alt="Logo"
                  sources={{
                    light: `/img/logo/${item.logoFilename}`,
                    dark: `/img/logo/${item.darkLogoFilename ?? item.logoFilename}`,
                  }}
                  onError={({ currentTarget }) => {
                    // eslint-disable-next-line @silverhand/fp/no-mutation
                    currentTarget.src = '/img/logo/broken-image.svg';
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
