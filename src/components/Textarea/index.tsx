import clsx from 'clsx';
import type { ForwardedRef, HTMLProps } from 'react';
import { forwardRef } from 'react';

import styles from './index.module.scss';

type Props = HTMLProps<HTMLTextAreaElement> & {
  readonly className?: string;
  readonly error?: string | boolean;
};

const Textarea = (
  { className, error, ...rest }: Props,
  reference: ForwardedRef<HTMLTextAreaElement>
) => {
  return (
    <div className={clsx(styles.container, Boolean(error) && styles.error, className)}>
      <textarea {...rest} ref={reference} />
    </div>
  );
};

export default forwardRef(Textarea);
