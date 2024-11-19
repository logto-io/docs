import Link from '@docusaurus/Link';
import isInternalUrl from '@docusaurus/isInternalUrl';
import ExternalLinkIcon from '@theme/Icon/ExternalLink';
import clsx from 'clsx';
import { type ComponentProps } from 'react';

import ApiIcon from '@site/src/assets/api.svg';
import DocumentIcon from '@site/src/assets/document.svg';
import VideoIcon from '@site/src/assets/video.svg';

import styles from './index.module.scss';

const isApiDocLink = (href?: string) =>
  href?.startsWith('https://bump.sh/logto/') || href?.startsWith('https://openapi.logto.io/');

const isVideoLink = (href?: string) =>
  href?.startsWith('https://www.youtube.com/') || href?.startsWith('https://youtu.be/');

const isDocLink = (href?: string) =>
  href?.startsWith('https://blog.logto.io/') ||
  href?.startsWith('https://auth.wiki/') ||
  isInternalUrl(href);

export type Props = ComponentProps<'a'> & {
  readonly hasIcon?: boolean;
  readonly type?: 'block' | 'inline';
  readonly wrapperClassName?: string;
  readonly style?: React.CSSProperties;
};

const Url = (props: Props): JSX.Element => {
  const { className, wrapperClassName, children, hasIcon = true, type = 'block', ...rest } = props;
  const isInternal = isInternalUrl(props.href);

  return (
    <span className={clsx(wrapperClassName, styles.linkWrapper, styles[type])}>
      <Link className={clsx(className, styles.link)} {...rest}>
        {hasIcon && isApiDocLink(props.href) && <ApiIcon className={styles.flexWidth} />}
        {hasIcon && isVideoLink(props.href) && <VideoIcon />}
        {hasIcon && isDocLink(props.href) && <DocumentIcon />}
        {children}
        {!isInternal && <ExternalLinkIcon className={styles.externalLink} />}
      </Link>
    </span>
  );
};

export default Url;
