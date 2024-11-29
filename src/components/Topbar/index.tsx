import { useColorMode } from '@docusaurus/theme-common';

import { useCurrentLocalePrefix } from '@site/src/hooks/useCurrentLocalePrefix';

import styles from './index.module.scss';

const Topbar = () => {
  const { colorMode } = useColorMode();
  const prefix = useCurrentLocalePrefix();

  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <div className="col col--offset-1">
          <a href={new URL(prefix, 'https://logto.io').href}>
            <img
              src={`/img/logto${colorMode === 'dark' ? '_dark' : ''}.svg`}
              alt="Logto logo"
            ></img>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
