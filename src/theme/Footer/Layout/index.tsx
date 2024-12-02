import Link from '@docusaurus/Link';
import { useLocation } from '@docusaurus/router';
import { useAlternatePageUtils } from '@docusaurus/theme-common/internal';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import type { Props } from '@theme/Footer/Layout';
import clsx from 'clsx';
import { useMemo } from 'react';

import Globe from '@site/src/assets/globe-i18n.svg';
import Select from '@site/src/components/Select';

import styles from './index.module.scss';

export default function FooterLayout({ style, links, logo, copyright }: Props): JSX.Element {
  const {
    i18n: { currentLocale, localeConfigs },
  } = useDocusaurusContext();
  const alternatePageUtils = useAlternatePageUtils();
  const { search, hash } = useLocation();

  const languageOptions = useMemo(
    () =>
      Object.entries(localeConfigs).map(([locale, { label }]) => {
        const baseTo = `${alternatePageUtils.createUrl({
          locale,
          fullyQualified: true,
        })}`;

        const to = `${baseTo}${search}${hash}`;

        return { value: locale, title: label, to };
      }),
    [localeConfigs, alternatePageUtils, search, hash]
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
