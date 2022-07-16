import { FooterLogo, FooterLinkItem } from '@docusaurus/theme-common';

import LinkItem from './LinkItem';
import styles from './index.module.scss';

type Props = {
  links: FooterLinkItem[];
  logo?: FooterLogo;
  copyright?: string;
};

const FooterLayout = ({ links, logo, copyright }: Props) => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {logo && (
          <div className={styles.logoRow}>
            <img src={logo.src} alt={logo.alt} />
          </div>
        )}
        <div className={styles.footerRow}>
          {copyright && <div className={styles.copyRight}>{copyright}</div>}
          <div className={styles.links}>
            {links.map((item) => (
              <LinkItem key={item.label} item={item} />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterLayout;
