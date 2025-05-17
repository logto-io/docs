import { useLocation } from '@docusaurus/router';
import { useAlternatePageUtils } from '@docusaurus/theme-common/internal';
import { useCallback } from 'react';

const useLocalizedUrl = () => {
  const { createUrl } = useAlternatePageUtils();
  const { search, hash } = useLocation();

  return useCallback(
    (locale: string) => {
      const localizedPath = createUrl({
        locale,
        fullyQualified: true,
      });
      return `${localizedPath}${search}${hash}`;
    },
    [createUrl, search, hash]
  );
};

export default useLocalizedUrl;
