import MDXComponents from '@theme-original/MDXComponents';

import CloudLink from '@site/src/components/CloudLink';
import MainSiteUrl from '@site/src/components/MainSiteUrl';
import NavGroup from '@site/src/components/NavGroup';
import Url from '@site/src/components/Url';

import DocCardList from '../DocCardList';

const components = {
  ...MDXComponents,
  CloudLink,
  DocCardList,
  NavGroup,
  Url,
  MainSiteUrl,
};

export default components;
