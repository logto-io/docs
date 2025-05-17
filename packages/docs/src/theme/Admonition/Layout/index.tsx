import { ThemeClassNames } from '@docusaurus/theme-common';
import type { Props } from '@theme/Admonition/Layout';
import clsx from 'clsx';
import { type ReactNode } from 'react';

import styles from './styles.module.css';

function AdmonitionContainer({
  type,
  className,
  children,
}: Pick<Props, 'type' | 'className'> & { readonly children: ReactNode }) {
  return (
    <div
      className={clsx(
        ThemeClassNames.common.admonition,
        ThemeClassNames.common.admonitionType(type),
        styles.admonition,
        className
      )}
    >
      {children}
    </div>
  );
}

function AdmonitionContent({ children }: Pick<Props, 'children'>) {
  return children ? <div className={styles.admonitionContent}>{children}</div> : null;
}

export default function AdmonitionLayout(props: Props): JSX.Element {
  const { type, title, children, className } = props;
  return (
    <AdmonitionContainer type={type} className={className}>
      <AdmonitionContent>
        <div className={styles.content}>
          <span className={styles.title} data-type="title">
            {title}:
          </span>
          {children}
        </div>
      </AdmonitionContent>
    </AdmonitionContainer>
  );
}
