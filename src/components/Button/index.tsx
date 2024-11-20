import Link from '@docusaurus/Link';
import clsx from 'clsx';
import type { HTMLProps } from 'react';

import styles from './index.module.scss';

export type Props = Omit<HTMLProps<HTMLAnchorElement>, 'size' | 'title' | 'ref'> & {
  readonly type?: 'primary' | 'gradient' | 'secondary' | 'outline' | 'plain';
  readonly size?: 'small' | 'medium' | 'large';
};

const Button = ({ className, children, size = 'medium', type = 'outline', ...rest }: Props) => {
  return (
    <Link className={clsx(styles.button, styles[type], styles[size], className)} {...rest}>
      <div className={styles.children}>{children}</div>
    </Link>
  );
};

export default Button;
