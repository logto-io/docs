import Link from '@docusaurus/Link';
import isInternalUrl from '@docusaurus/isInternalUrl';
import useBaseUrl from '@docusaurus/useBaseUrl';
import type { Props } from '@theme/Footer/LinkItem';
import IconExternalLink from '@theme/Icon/ExternalLink';
import { type ReactNode } from 'react';

type FooterLinkItemProps = {
  readonly item: Props['item'] & { readonly icon: ReactNode };
};

export default function FooterLinkItem({ item }: FooterLinkItemProps): JSX.Element {
  const { to, href, label, prependBaseUrlToHref, ...props } = item;
  const toUrl = useBaseUrl(to);
  const normalizedHref = useBaseUrl(href, { forcePrependBaseUrl: true });

  return (
    <Link
      className="footer__link-item"
      {...(href
        ? {
            href: prependBaseUrlToHref ? normalizedHref : href,
          }
        : {
            to: toUrl,
          })}
      {...props}
    >
      {item.icon}
      <span>{label}</span>
      {href && !isInternalUrl(href) && !item.hideExternalLinkIcon && <IconExternalLink />}
    </Link>
  );
}
