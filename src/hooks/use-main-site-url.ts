import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { useCallback, useMemo } from 'react';

/**
 * Hook to get the main site URL from Docusaurus context.
 * The URL is defined in the `customFields.mainSiteUrl` property of the site config.
 *
 * @returns {string | undefined} The main site URL or `undefined` if not set.
 */
const useMainSiteUrl = () => {
  const {
    siteConfig: { customFields },
  } = useDocusaurusContext();
  const { mainSiteUrl } = customFields ?? {};
  const url = useMemo(
    () => (typeof mainSiteUrl === 'string' ? mainSiteUrl : undefined),
    [mainSiteUrl]
  );

  const getMainSiteLink = useCallback(
    (pathname: string) => (url ? new URL(pathname, url).href : pathname),
    [url]
  );

  return {
    /**
     * The main site URL.
     *
     * - If it is defined as a string, it means we are in other sites, e.g. tutorials.
     * - If it is not defined, it means we are in the main site and it's safe to use relative URLs.
     */
    url,
    /**
     * Function to generate a URL based on the main site URL.
     *
     * - If the main site URL is defined, it creates a new URL using the pathname and the main site URL.
     * - If the main site URL is not defined, it returns the pathname as is.
     *
     * @param {string} pathname - The pathname to be used for generating the URL.
     * @return {string} The generated URL string or the pathname.
     */
    getMainSiteLink,
  };
};

export default useMainSiteUrl;
