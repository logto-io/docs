import Link from '@docusaurus/Link';
import { useDocById, useLayoutDoc } from '@docusaurus/plugin-content-docs/client';
import clsx from 'clsx';
import { type ReactNode } from 'react';

import styles from './index.module.scss';

type NavItem = {
  readonly icon: ReactNode;
  readonly docId: string;
  readonly title?: string;
};

type Props = {
  readonly label: string;
  readonly items: NavItem[];
};

const NavItem = ({ title, icon, docId }: NavItem) => {
  const doc = useLayoutDoc(docId);
  const { title: docTitle } = useDocById(docId);

  return (
    <span className="col col--6 margin-bottom--md">
      <Link className={styles.navItem} href={doc?.path}>
        {icon}
        {title ?? docTitle}
      </Link>
    </span>
  );
};

const NavGroup = ({ label, items }: Props) => {
  return (
    <>
      <label className={styles.groupLabel}>{label}</label>
      <div className={clsx('row', styles.group)}>
        {items.map((item) => (
          <NavItem key={item.docId} {...item} />
        ))}
      </div>
    </>
  );
};

export default NavGroup;
