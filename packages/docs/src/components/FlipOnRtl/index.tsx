import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import clsx from 'clsx';
import { cloneElement, isValidElement, type ReactElement } from 'react';

import styles from './index.module.scss';

type Props = {
  readonly children: ReactElement<HTMLElement>;
};

/**
 * This component flips its child element horizontally if the browser's text direction is RTL (right-to-left).
 *
 * @component
 * @example
 * ```tsx
 * <FlipOnRtl>
 *   <SVG />
 * </FlipOnRtl>
 * ```
 *
 * @param {React.ReactNode} children - The SVG or other HTML content to render and flip if RTL.
 * @returns {JSX.Element} The flipped content.
 */
function FlipOnRtl({ children }: Props) {
  const { i18n } = useDocusaurusContext();

  const isRtl = i18n.localeConfigs[i18n.currentLocale]?.direction === 'rtl';

  if (!isValidElement(children)) {
    return children;
  }

  return cloneElement(children, {
    className: clsx(children.props.className, isRtl && styles.flip),
  });
}

export default FlipOnRtl;
