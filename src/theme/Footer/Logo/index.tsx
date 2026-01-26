import Link from '@docusaurus/Link';
import { useBaseUrlUtils } from '@docusaurus/useBaseUrl';
import type { Props } from '@theme/Footer/Logo';
import ThemedImage from '@theme/ThemedImage';
import clsx from 'clsx';

import styles from './styles.module.css';

function LogoImage({ logo }: Props) {
  const { withBaseUrl } = useBaseUrlUtils();
  const sources = {
    light: withBaseUrl(logo.src),
    dark: withBaseUrl(logo.srcDark ?? logo.src),
  };
  return (
    <ThemedImage
      className={clsx('footer__logo', logo.className)}
      alt={logo.alt}
      sources={sources}
      width={logo.width}
      height={logo.height}
      style={logo.style}
      // Charles note: Defer loading off-screen images
      loading="lazy"
    />
  );
}

export default function FooterLogo({ logo }: Props): JSX.Element {
  return logo.href ? (
    <Link href={logo.href} className={styles.footerLogoLink} target={logo.target}>
      <LogoImage logo={logo} />
    </Link>
  ) : (
    <LogoImage logo={logo} />
  );
}
