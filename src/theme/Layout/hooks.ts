import { trySafe, type Optional } from '@silverhand/essentials';
import { useEffect, useMemo, useState } from 'react';

import { defaultApiBaseProdUrl, defaultApiBaseDevUrl } from './constants';
import { createDebugLogger, type DebugLogger } from './debug-logger';
import { type GoogleOneTapConfig, googleOneTapConfigSchema } from './google-one-tap';
import type { SiteConfig } from './types';

export function useDebugLogger(siteConfig: SiteConfig): DebugLogger {
  const isDebugMode = Boolean(siteConfig.customFields?.isDebuggingEnabled);

  return useMemo(() => createDebugLogger(isDebugMode), [isDebugMode]);
}

export function useApiBaseUrl(siteConfig: SiteConfig): {
  baseUrl: string;
  logtoAdminConsoleUrl?: string;
} {
  return useMemo(() => {
    const logtoApiBaseUrl = siteConfig.customFields?.logtoApiBaseUrl;

    const baseUrl =
      typeof logtoApiBaseUrl === 'string'
        ? logtoApiBaseUrl
        : siteConfig.customFields?.isDevFeatureEnabled
          ? defaultApiBaseDevUrl
          : defaultApiBaseProdUrl;

    const logtoAdminConsoleUrl = siteConfig.customFields?.logtoAdminConsoleUrl;

    return {
      baseUrl,
      logtoAdminConsoleUrl,
    };
  }, [
    siteConfig.customFields?.logtoApiBaseUrl,
    siteConfig.customFields?.isDevFeatureEnabled,
    siteConfig.customFields?.logtoAdminConsoleUrl,
  ]);
}

export function useGoogleOneTapConfig(
  siteConfig: SiteConfig,
  debugLogger: DebugLogger
): { config: Optional<GoogleOneTapConfig> } {
  const [config, setConfig] = useState<GoogleOneTapConfig>();

  useEffect(() => {
    const loadConfig = async () => {
      try {
        const rawConfig = siteConfig.customFields?.googleOneTapConfig;
        if (typeof rawConfig !== 'string') {
          throw new TypeError('Google One Tap config is not a string');
        }
        const parsedConfig = googleOneTapConfigSchema.safeParse(
          // eslint-disable-next-line no-restricted-syntax
          trySafe(() => JSON.parse(rawConfig) as unknown)
        );

        if (parsedConfig.success) {
          setConfig(parsedConfig.data);
        } else {
          debugLogger.error('Failed to parse Google One Tap config:', parsedConfig.error);
          setConfig(undefined);
        }
      } catch (error) {
        debugLogger.error('Failed to load Google One Tap config:', error);
        // Don't throw, just set config to undefined to prevent render blocking
        setConfig(undefined);
      }
    };

    void loadConfig();
  }, [siteConfig.customFields?.googleOneTapConfig, debugLogger]);

  return { config };
}
