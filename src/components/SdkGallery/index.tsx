import { useDocsSidebar } from '@docusaurus/theme-common/internal';

import fallbackImage from './fallback.png';
import styles from './index.module.scss';

type Category = {
  label: string;
  description?: string;
  items: Array<{ label: string; href: string; logoFilename?: string }>;
};

const sdkPath = '/sdk/';

const stringIfTruthy = (value: unknown) => (value ? String(value) : undefined);

/**
 * A component that shows the gallery of SDKs.
 *
 * Note: This component is only available in the "SDK" tab of the documentation.
 */
const SdkGallery = () => {
  const sidebar = useDocsSidebar();

  if (!sidebar) {
    return null;
  }

  const sections = sidebar.items.reduce<Category[]>((data, item) => {
    if (item.type !== 'link') {
      return data;
    }

    if (item.unlisted || item.href === sdkPath) {
      return data;
    }

    if (item.href === '#') {
      return [
        ...data,
        {
          label: item.label,
          description: stringIfTruthy(item.customProps?.description),
          items: [],
        },
      ];
    }

    if (!item.href.startsWith(sdkPath)) {
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
          },
        ],
      },
    ];
  }, []);

  return (
    <section className={styles.gallery}>
      {sections.map((category) => (
        <div key={category.label}>
          <h2>{category.label}</h2>
          {category.description && <p className={styles.description}>{category.description}</p>}
          <section className={styles.list}>
            {category.items.map((item) => (
              <a key={item.href} href={item.href} className={styles.link}>
                <img
                  className={styles.logo}
                  alt="Logo"
                  src={`/img/logo/${item.logoFilename || `${item.href.slice(sdkPath.length)}.svg`}`}
                  onError={({ currentTarget }) => {
                    // eslint-disable-next-line @silverhand/fp/no-mutation
                    currentTarget.src = fallbackImage;
                  }}
                />
                <span>{item.label}</span>
              </a>
            ))}
          </section>
        </div>
      ))}
    </section>
  );
};

export default SdkGallery;
