import LinkItem from '@theme/Footer/LinkItem';
import type { Props } from '@theme/Footer/Links/MultiColumn';

import DiscordIcon from '@site/src/assets/discord.svg';
import EmailIcon from '@site/src/assets/email.svg';
import GitHubIcon from '@site/src/assets/github.svg';
import RoadmapIcon from '@site/src/assets/roadmap.svg';

type ColumnType = Props['columns'][number];
type ColumnItemType = ColumnType['items'][number];

const supportColumn: ColumnType = {
  title: 'Need help?',
  items: [
    {
      label: 'Contact support',
      href: 'https://logto.io/contact',
      icon: <EmailIcon />,
      hideExternalLinkIcon: true,
    },
    {
      label: 'Open a GitHub issue',
      href: 'https://github.com/logto-io/logto/issues/new/choose',
      icon: <GitHubIcon />,
      hideExternalLinkIcon: true,
    },
    {
      label: 'Request a new feature',
      href: 'https://logto.productlane.com/roadmap',
      icon: <RoadmapIcon />,
      hideExternalLinkIcon: true,
    },
    {
      label: 'Ask the Discord community',
      href: 'https://discord.gg/UEPaF3j5e6',
      icon: <DiscordIcon />,
      hideExternalLinkIcon: true,
    },
  ],
} as const;

function ColumnLinkItem({ item }: { readonly item: ColumnItemType }) {
  return (
    <li key={item.href ?? item.to} className="footer__item">
      <LinkItem item={item} />
    </li>
  );
}

function Column({ column }: { readonly column: ColumnType }) {
  return (
    <div className="col footer__col">
      <div className="footer__title">{column.title}</div>
      <ul className="footer__items clean-list">
        {column.items.map((item) => (
          <ColumnLinkItem key={item.label} item={item} />
        ))}
      </ul>
    </div>
  );
}

export default function FooterLinksMultiColumn({ columns }: Props): JSX.Element {
  return (
    <div className="row footer__links">
      {columns.map((column) => (
        <Column key={column.title} column={column} />
      ))}
      <Column column={supportColumn} />
    </div>
  );
}
