import Layout from '@theme/Footer/Layout';
import clsx from 'clsx';
import React from 'react';

import styles from './index.module.scss';

type Props = Parameters<typeof Layout>[0];

const FooterLayout = ({ style, links, logo, copyright }: Props) => {
  return (
    <footer
      className={clsx('footer', {
        'footer--dark': style === 'dark',
      })}
    >
      <div className="container container-fluid">
        {logo && <div className={clsx('margin-bottom--lg', styles.logoRow)}>{logo}</div>}
        {links}
        {copyright && <div className="footer__bottom text--center">{copyright}</div>}
      </div>
    </footer>
  );
};

export default FooterLayout;
