import { useThemeConfig } from '@docusaurus/theme-common';
import { memo } from 'react';

import FooterLayout from './FooterLayout';

const Footer = () => {
  const { footer } = useThemeConfig();

  if (!footer) {
    return null;
  }
  const { copyright, links, logo } = footer;

  return <FooterLayout logo={logo} copyright={copyright} links={links} />;
};

export default memo(Footer);
