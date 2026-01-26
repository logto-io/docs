import ThemedImage from '@theme/ThemedImage';

import { useCurrentLocalePrefix } from '@site/src/hooks/useCurrentLocalePrefix';

import styles from './index.module.scss';

const Topbar = () => {
  const prefix = useCurrentLocalePrefix();

  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <a href={new URL(prefix, 'https://logto.io').href}>
          <ThemedImage
            alt="Logto logo"
            sources={{
              light: '/img/logto.svg',
              dark: '/img/logto_dark.svg',
            }}
          />
        </a>
      </div>
    </div>
  );
};

export default Topbar;
