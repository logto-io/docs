import clsx from 'clsx';
import { type PropsWithChildren } from 'react';

import CrossIcon from '@site/src/assets/cross.svg';
import { onKeyDownHandler } from '@site/src/utils/a11y';

import styles from './index.module.scss';

type Props = PropsWithChildren<{
  readonly className?: string;
  readonly onClose?: () => void;
}>;

const Banner = ({ className, children, onClose }: Props) => {
  return (
    <div className={clsx(styles.banner, className)}>
      {children}
      <div
        tabIndex={0}
        role="button"
        className={styles.close}
        onClick={onClose}
        onKeyDown={onKeyDownHandler(onClose)}
      >
        <CrossIcon />
      </div>
    </div>
  );
};

export default Banner;
