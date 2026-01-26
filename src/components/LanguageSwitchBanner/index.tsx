import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
import Link from '@docusaurus/Link';
import { translate } from '@docusaurus/Translate';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { cond } from '@silverhand/essentials';
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';

import useLocalizedUrl from '@site/src/hooks/use-localized-url';

import Banner from '../Banner';

import styles from './index.module.scss';

const storageKey = 'disableLanguageDetectionBanner';

const LanguageSwitchBanner = () => {
  const {
    i18n: { currentLocale, locales, localeConfigs },
  } = useDocusaurusContext();
  const getLocalizedPageUrl = useLocalizedUrl();

  const [targetLocale, setTargetLocale] = useState<string>();
  const userLocale = cond(ExecutionEnvironment.canUseDOM && navigator.language);

  useEffect(() => {
    if (!userLocale || Cookies.get(storageKey) === 'true') {
      return;
    }
    const detectedBaseLanguageCode = userLocale.split('-')[0];
    const foundMatchingLocale = locales.find(
      (locale) =>
        locale === userLocale ||
        locale === detectedBaseLanguageCode ||
        locale.startsWith(`${detectedBaseLanguageCode}-`)
    );
    if (foundMatchingLocale && foundMatchingLocale !== currentLocale) {
      setTargetLocale(foundMatchingLocale);
    }
  }, [userLocale, currentLocale, locales]);

  return (
    targetLocale && (
      <Banner
        onClose={() => {
          Cookies.set(storageKey, 'true', { expires: 365 });
          setTargetLocale(undefined);
        }}
      >
        <span className={styles.message}>
          {translate({
            id: 'theme.languageSwitchBanner.message',
            message: 'A version matching your device language is available. Switch to ',
            description: 'The prompt message displayed in the language switch banner',
          })}
          <Link className={styles.link} href={getLocalizedPageUrl(targetLocale)} target="_self">
            {localeConfigs[targetLocale]?.label}
          </Link>
        </span>
      </Banner>
    )
  );
};

export default LanguageSwitchBanner;
