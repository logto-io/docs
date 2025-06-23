/* eslint-disable @silverhand/fp/no-mutation */
import { condString } from '@silverhand/essentials';
import { useCallback, useEffect, useMemo, useState } from 'react';

import { createAuthStatusChecker } from './auth-status';
import { fetchGoogleOneTapConfig } from './config-fetcher';
import { defaultApiBaseProdUrl, defaultApiBaseDevUrl, authStatusPollInterval } from './constants';
import { createDebugLogger, type DebugLogger } from './debug-logger';
import type { GoogleOneTapConfig } from './google-one-tap';

export type SiteConfig = {
  customFields?: {
    isDebuggingEnabled?: boolean;
    logtoApiBaseUrl?: string;
    isDevFeatureEnabled?: boolean;
    logtoAdminConsoleUrl?: string;
    enableAuthStatusCheck?: boolean;
    isIframeVisible?: boolean;
  };
};

export function useDebugLogger(siteConfig: SiteConfig): DebugLogger {
  const isDebugMode = Boolean(siteConfig.customFields?.isDebuggingEnabled);

  return useMemo(() => createDebugLogger(isDebugMode), [isDebugMode]);
}

export function useApiBaseUrl(siteConfig: SiteConfig): string {
  return useMemo(() => {
    const logtoApiBaseUrl = siteConfig.customFields?.logtoApiBaseUrl;
    return typeof logtoApiBaseUrl === 'string'
      ? logtoApiBaseUrl
      : siteConfig.customFields?.isDevFeatureEnabled
        ? defaultApiBaseDevUrl
        : defaultApiBaseProdUrl;
  }, [siteConfig.customFields?.logtoApiBaseUrl, siteConfig.customFields?.isDevFeatureEnabled]);
}

export function useGoogleOneTapConfig(
  apiBaseUrl: string,
  debugLogger: DebugLogger
): GoogleOneTapConfig | undefined {
  const [config, setConfig] = useState<GoogleOneTapConfig>();

  useEffect(() => {
    const loadConfig = async () => {
      const fetchedConfig = await fetchGoogleOneTapConfig({ apiBaseUrl, debugLogger });
      setConfig(fetchedConfig);
    };

    void loadConfig();
  }, [apiBaseUrl, debugLogger]);

  return config;
}

export type AuthStatusResult = {
  authStatus?: boolean;
  authCheckError?: string;
  checkAdminTokenStatus: () => Promise<boolean>;
};

export function useAuthStatus(siteConfig: SiteConfig, debugLogger: DebugLogger): AuthStatusResult {
  const [authStatus, setAuthStatus] = useState<boolean>();
  const [authCheckError, setAuthCheckError] = useState<string>();
  const [isChecking, setIsChecking] = useState(false);

  const logtoAdminConsoleUrl = siteConfig.customFields?.logtoAdminConsoleUrl;
  const enableAuthStatusCheck = siteConfig.customFields?.enableAuthStatusCheck;
  const isDebugMode = Boolean(siteConfig.customFields?.isDebuggingEnabled);
  const isIframeVisible = Boolean(siteConfig.customFields?.isIframeVisible);

  const { checkAdminTokenStatus, authStatusCheckerHost } = useMemo(
    () =>
      createAuthStatusChecker({
        logtoAdminConsoleUrl:
          typeof logtoAdminConsoleUrl === 'string' ? logtoAdminConsoleUrl : undefined,
        enableAuthStatusCheck: Boolean(enableAuthStatusCheck),
        isDebugMode,
        isIframeVisible,
        debugLogger,
      }),
    [logtoAdminConsoleUrl, enableAuthStatusCheck, isDebugMode, isIframeVisible, debugLogger]
  );

  const performAuthCheck = useCallback(async () => {
    if (isChecking) {
      debugLogger.log('Auth check already in progress, skipping...');
      return;
    }

    try {
      setIsChecking(true);
      setAuthCheckError(undefined);
      debugLogger.log('Starting auth check...');
      const isAuthenticated = await checkAdminTokenStatus();
      debugLogger.log('Auth check completed with result:', isAuthenticated);
      setAuthStatus(isAuthenticated);
    } catch (error) {
      debugLogger.error('Failed to check auth status:', error);
      setAuthCheckError(error instanceof Error ? error.message : 'Unknown error');
      setAuthStatus(false);
    } finally {
      setIsChecking(false);
    }
  }, [checkAdminTokenStatus, debugLogger, isChecking]);

  // Check auth status on component mount and set up polling
  useEffect(() => {
    if (!enableAuthStatusCheck || !authStatusCheckerHost) {
      return;
    }

    // Initial check
    void performAuthCheck();

    // Set up polling
    const pollInterval = setInterval(() => {
      void performAuthCheck();
    }, authStatusPollInterval);

    // Cleanup interval on unmount
    return () => {
      clearInterval(pollInterval);
    };
  }, [enableAuthStatusCheck, authStatusCheckerHost, performAuthCheck]);

  // Expose auth status to global scope for external access
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.__logtoAuthStatus = {
        authStatus,
        authCheckError,
        checkAdminTokenStatus,
      };
    }
  }, [authStatus, authCheckError, checkAdminTokenStatus]);

  // Debug logging
  useEffect(() => {
    const iframeSrc =
      typeof logtoAdminConsoleUrl === 'string'
        ? `${logtoAdminConsoleUrl}/auth-status${condString(siteConfig.customFields?.isDebuggingEnabled && '?debug=true')}`
        : undefined;

    debugLogger.log('Logto Auth Status Debug Info:', {
      authStatus,
      authCheckError,
      logtoAdminConsoleUrl,
      enableAuthStatusCheck,
      authStatusCheckerHost,
      iframeSrc,
      currentOrigin: typeof window === 'undefined' ? undefined : window.location.origin,
    });
  }, [
    authStatus,
    authCheckError,
    logtoAdminConsoleUrl,
    enableAuthStatusCheck,
    authStatusCheckerHost,
    siteConfig.customFields?.isDebuggingEnabled,
    debugLogger,
  ]);

  return {
    authStatus,
    authCheckError,
    checkAdminTokenStatus,
  };
}
/* eslint-enable @silverhand/fp/no-mutation */
