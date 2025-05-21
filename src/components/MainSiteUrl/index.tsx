import useMainSiteUrl from '@site/src/hooks/use-main-site-url';

import Url, { type Props } from '../Url';

/**
 * A `<Url />` wrapper component that generates a URL based on the current site context.
 *
 * It is useful when you want to link to the main site from other sites, but keep the URL relative
 * to the main site.
 *
 * @example
 * If the main site URL is `https://docs.logto.io`, and you want to link to `/docs/quick-start`,
 * you can use this component like this:
 *
 * ```tsx
 * <MainSiteUrl href="/docs/quick-start">Quick Start</MainSiteUrl>
 * ```
 *
 * - When this component is rendered on the main site, it will generate a link to
 * `/docs/quick-start`;
 * - Otherwise, it will generate a link to `https://docs.logto.io/docs/quick-start`.
 *
 * @see {@link useMainSiteUrl} for how the main site URL is retrieved.
 */
const MainSiteUrl = ({ href, type = 'inline', ...rest }: Props) => {
  const { getMainSiteLink } = useMainSiteUrl();

  if (!href) {
    throw new Error('<MainSiteUrl /> requires a `href` prop.');
  }

  if (!href.startsWith('/')) {
    throw new Error('<MainSiteUrl /> requires a `href` prop that starts with `/`.');
  }

  return <Url href={getMainSiteLink(href)} {...rest} />;
};

export default MainSiteUrl;
