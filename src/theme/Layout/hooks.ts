import { useEffect, useState } from 'react';

import { createAuthStatusChecker } from './auth-status';
import { fetchGoogleOneTapConfig } from './config-fetcher';
import { authCheckDelay, defaultApiBaseDevUrl, defaultApiBaseProdUrl } from './constants';
import type { GoogleOneTapConfig, SiteConfig } from './types';

export function useApiBaseUrl(siteConfig: SiteConfig): string {
  const logtoApiBaseUrl = siteConfig.customFields?.logtoApiBaseUrl;
  return typeof logtoApiBaseUrl === 'string'
    ? logtoApiBaseUrl
    : siteConfig.customFields?.isDevFeatureEnabled
      ? defaultApiBaseDevUrl
      : defaultApiBaseProdUrl;
}

export function useGoogleOneTapConfig(apiBaseUrl: string): GoogleOneTapConfig | undefined {
  const [config, setConfig] = useState<GoogleOneTapConfig>();

  useEffect(() => {
    const loadConfig = async () => {
      const fetchedConfig = await fetchGoogleOneTapConfig(apiBaseUrl);
      setConfig(fetchedConfig);
    };

    void loadConfig();
  }, [apiBaseUrl]);

  return config;
}

export function useAuthStatus(siteConfig: SiteConfig): boolean | undefined {
  const [authStatus, setAuthStatus] = useState<boolean>();

  useEffect(() => {
    const enableAuthStatusCheck = siteConfig.customFields?.enableAuthStatusCheck;

    if (!enableAuthStatusCheck) {
      return;
    }

    // Delay auth check to not block initial render
    const timeoutId = setTimeout(() => {
      const cleanup = createAuthStatusChecker(siteConfig, setAuthStatus);
      return cleanup;
    }, authCheckDelay);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [siteConfig]);

  return authStatus;
}
