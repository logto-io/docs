import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export const useCurrentLocalePrefix = () => {
  const { i18n } = useDocusaurusContext();
  return i18n.currentLocale === 'en' ? '' : `/${i18n.currentLocale}`;
};
