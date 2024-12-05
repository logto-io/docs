import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import type { Props } from '@theme/Footer/Layout';
import clsx from 'clsx';
import { useMemo } from 'react';

import Globe from '@site/src/assets/globe-i18n.svg';
import Select from '@site/src/components/Select';
import useLocalizedUrl from '@site/src/hooks/use-localized-url';

import styles from './index.module.scss';

export default function FooterLayout({ style, links, logo, copyright }: Props): JSX.Element {
  const {
    i18n: { currentLocale, localeConfigs },
  } = useDocusaurusContext();
  const getLocalizedPageUrl = useLocalizedUrl();

  const languageOptions = useMemo(
    () =>
      Object.entries(localeConfigs).map(([locale, { label }]) => ({
        value: locale,
        title: label,
        to: getLocalizedPageUrl(locale),
      })),
    [localeConfigs, getLocalizedPageUrl]
  );

  return (
    <footer
      className={clsx('footer', {
        'footer--dark': style === 'dark',
      })}
    >
      <div className="container container-fluid">
        {links}
        <div className="footer__bottom text--center">
          {logo && <div className="margin-bottom--sm">{logo}</div>}
          {copyright}
          <Link className="footer__link-item" to="https://logto.io/trust-and-security">
            Hosted in 🇪🇺🇺🇸🇦🇺
          </Link>
          <Link className="footer__link-item" to="/terms/of-service">
            Terms
          </Link>
          <Link className="footer__link-item" to="/terms/privacy-policy">
            Privacy
          </Link>
          <Select
            className={styles.languageSelector}
            optionContainerStyles={{ border: 'none' }}
            optionStyles={{ padding: '8px 16px' }}
            icon={<Globe />}
            value={currentLocale}
            options={languageOptions}
            size="small"
          />
        </div>
      </div>
    </footer>
  );
}
