import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { trySafe, type Optional } from '@silverhand/essentials';
import { useEffect, useMemo, useState } from 'react';

import { defaultApiBaseProdUrl, defaultApiBaseDevUrl } from './constants';
import { type GoogleOneTapConfig, googleOneTapConfigSchema } from './google-one-tap';
import { type RawSiteConfig, rawSiteConfigSchema } from './types';

type DebugLogger = {
  log: (...args: unknown[]) => void;
  warn: (...args: unknown[]) => void;
  error: (...args: unknown[]) => void;
};

const createDebugLogger = (isDebugMode: boolean): DebugLogger => {
  return {
    log: (...args: unknown[]) => {
      if (isDebugMode) {
        console.log(...args);
      }
    },
    warn: (...args: unknown[]) => {
      if (isDebugMode) {
        console.warn(...args);
      }
    },
    error: (...args: unknown[]) => {
      if (isDebugMode) {
        console.error(...args);
      }
    },
  };
};

const useSiteConfig = (): { siteConfig: RawSiteConfig } => {
  const { siteConfig: rawSiteConfig } = useDocusaurusContext();
  const parsedRawSiteConfig = rawSiteConfigSchema.safeParse(rawSiteConfig);
  if (!parsedRawSiteConfig.success) {
    throw new Error('Invalid site config');
  }
  return { siteConfig: parsedRawSiteConfig.data };
};

export function useDebugLogger(): { debugLogger: DebugLogger } {
  const {
    siteConfig: { customFields },
  } = useSiteConfig();
  const isDebugMode = Boolean(customFields?.isDebuggingEnabled);

  return { debugLogger: useMemo(() => createDebugLogger(isDebugMode), [isDebugMode]) };
}

export function useApiBaseUrl(): {
  baseUrl: string;
  logtoAdminConsoleUrl?: string;
} {
  const {
    siteConfig: { customFields },
  } = useSiteConfig();
  const { logtoApiBaseUrl, isDevFeatureEnabled, logtoAdminConsoleUrl } = customFields ?? {};

  return useMemo(() => {
    const baseUrl =
      typeof logtoApiBaseUrl === 'string'
        ? logtoApiBaseUrl
        : isDevFeatureEnabled
          ? defaultApiBaseDevUrl
          : defaultApiBaseProdUrl;

    return {
      baseUrl,
      logtoAdminConsoleUrl,
    };
  }, [logtoApiBaseUrl, isDevFeatureEnabled, logtoAdminConsoleUrl]);
}

export function useGoogleOneTapConfig(): {
  config: Optional<GoogleOneTapConfig>;
} {
  const [config, setConfig] = useState<GoogleOneTapConfig>();
  const { debugLogger } = useDebugLogger();
  const {
    siteConfig: { customFields },
  } = useSiteConfig();

  useEffect(() => {
    const loadConfig = async () => {
      const rawConfig = customFields?.googleOneTapConfig;
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
    };

    void loadConfig();
  }, [customFields?.googleOneTapConfig, debugLogger]);

  return { config };
}
