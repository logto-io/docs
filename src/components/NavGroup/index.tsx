import Link from '@docusaurus/Link';
import { useDocById, useLayoutDoc } from '@docusaurus/plugin-content-docs/client';
import { type ReactNode } from 'react';

import styles from './index.module.scss';

type NavItem = {
  readonly icon: ReactNode;
  readonly docId: string;
};

type Props = {
  readonly label: string;
  readonly items: NavItem[];
};

const NavItem = ({ icon, docId }: NavItem) => {
  const doc = useLayoutDoc(docId);
  const { title } = useDocById(docId);

  return (
    <span className="col col--6 margin-bottom--md">
      <Link className={styles.navItem} href={doc?.path}>
        {icon}
        {title}
      </Link>
    </span>
  );
};

const NavGroup = ({ label, items }: Props) => {
  return (
    <>
      <label className={styles.groupLabel}>{label}</label>
      <div className="row">
        {items.map((item) => (
          <NavItem key={item.docId} {...item} />
        ))}
      </div>
    </>
  );
};

export default NavGroup;
