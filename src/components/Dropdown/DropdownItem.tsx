import Link from '@docusaurus/Link';
import isInternalUrl from '@docusaurus/isInternalUrl';
import clsx from 'clsx';
import {
  type MouseEvent,
  type KeyboardEvent,
  type ReactNode,
  type CSSProperties,
  useMemo,
} from 'react';

import { onKeyDownHandler } from '@site/src/utils/a11y';

import styles from './DropdownItem.module.scss';

type Props = {
  readonly onClick?: (event: MouseEvent<HTMLLIElement> | KeyboardEvent<HTMLLIElement>) => void;
  readonly to?: string;
  readonly className?: string;
  readonly children: ReactNode;
  readonly type?: 'default' | 'danger';
  readonly style?: CSSProperties;
};

const DropdownItem = ({ onClick, to, className, children, style, type = 'default' }: Props) => {
  const item = useMemo(
    () => (
      <li
        role="menuitem"
        tabIndex={0}
        className={clsx(styles.item, styles[type], className)}
        style={style}
        onKeyDown={onKeyDownHandler(onClick)}
        onClick={onClick}
      >
        {children}
      </li>
    ),
    [className, children, onClick, style, type]
  );

  return to ? (
    <Link to={to} target={isInternalUrl(to) ? '_self' : '_blank'} className={styles.link}>
      {item}
    </Link>
  ) : (
    item
  );
};

export default DropdownItem;
