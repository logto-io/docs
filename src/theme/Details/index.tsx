import { useColorMode } from '@docusaurus/theme-common';
import { Details as DetailsGeneric } from '@docusaurus/theme-common/Details';
import useIsBrowser from '@docusaurus/useIsBrowser';
import type { Props } from '@theme/Details';
import clsx from 'clsx';

import styles from './index.module.scss';

export default function Details({ ...props }: Props): JSX.Element {
  const { isDarkTheme } = useColorMode();
  const isBrowser = useIsBrowser();

  return (
    <DetailsGeneric
      {...props}
      className={clsx(
        styles.details,
        props.className,
        isDarkTheme && styles.dark,
        isBrowser && styles.isBrowser
      )}
    />
  );
}
