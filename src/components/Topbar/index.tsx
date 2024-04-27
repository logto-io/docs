import { useColorMode } from '@docusaurus/theme-common';

import styles from './index.module.scss';

const Topbar = () => {
  const { colorMode } = useColorMode();

  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <div className="col col--offset-1">
          <a href="https://logto.io">
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
