import Link from '@docusaurus/Link';
import isInternalUrl from '@docusaurus/isInternalUrl';
import useBaseUrl from '@docusaurus/useBaseUrl';
import type { Props } from '@theme/Footer/LinkItem';
import IconExternalLink from '@theme/Icon/ExternalLink';
import { type ReactNode } from 'react';

import DiscordIcon from '@site/src/assets/discord.svg';
import EmailIcon from '@site/src/assets/email.svg';
import GitHubIcon from '@site/src/assets/github.svg';
import RoadmapIcon from '@site/src/assets/roadmap.svg';

const iconMap: Record<string, ReactNode> = Object.freeze({
  discord: <DiscordIcon />,
  email: <EmailIcon />,
  github: <GitHubIcon />,
  roadmap: <RoadmapIcon />,
});

export default function FooterLinkItem({ item }: Props): JSX.Element {
  const { to, href, label, i18nLabel, prependBaseUrlToHref, hideExternalLinkIcon, icon, ...props } =
    item;
  const toUrl = useBaseUrl(to);
  const normalizedHref = useBaseUrl(href, { forcePrependBaseUrl: true });
  const SvgIcon = typeof icon === 'string' ? iconMap[icon] : undefined;

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
      {SvgIcon}
      <span>{label}</span>
      {href && !isInternalUrl(href) && !hideExternalLinkIcon && <IconExternalLink />}
    </Link>
  );
}
