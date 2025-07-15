/* eslint-disable @silverhand/fp/no-mutation */
import { condString, type Optional } from '@silverhand/essentials';
import { useCallback, useEffect, useMemo, useState } from 'react';

import { createAuthStatusChecker } from './auth-status';
import { fetchGoogleOneTapConfig } from './config-fetcher';
import {
  defaultApiBaseProdUrl,
  defaultApiBaseDevUrl,
  authStatusMaxRetries,
  authStatusRetryDelay,
  configLoadDelay,
  initialAuthCheckDelay,
  authCheckFallbackTimeout,
} from './constants';
import { verifyGoogleOneTapCredential } from './credential-verifier';
import { createDebugLogger, type DebugLogger } from './debug-logger';
import type { GoogleOneTapConfig } from './google-one-tap';
import type {
  SiteConfig,
  GoogleOneTapCredentialResponse,
  GoogleOneTapVerifyResponse,
} from './types';

export function useDebugLogger(siteConfig: SiteConfig): DebugLogger {
  const isDebugMode = Boolean(siteConfig.customFields?.isDebuggingEnabled);

  return useMemo(() => createDebugLogger(isDebugMode), [isDebugMode]);
}

export function useApiBaseUrl(siteConfig: SiteConfig): {
  baseUrl: string;
  authUrl: string;
  redirectUri: string;
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
    const authUrl = `${baseUrl}/oidc/auth`;
    const redirectUri = `${typeof logtoApiBaseUrl === 'string' ? `${logtoApiBaseUrl}/${new URL(logtoApiBaseUrl).hostname === 'localhost' ? 'demo-app' : 'callback'}` : `${defaultApiBaseProdUrl}/callback`}`;
    const logtoAdminConsoleUrl = siteConfig.customFields?.logtoAdminConsoleUrl;
    return {
      baseUrl,
      authUrl,
      redirectUri,
      logtoAdminConsoleUrl,
    };
  }, [
    siteConfig.customFields?.logtoApiBaseUrl,
    siteConfig.customFields?.isDevFeatureEnabled,
    siteConfig.customFields?.logtoAdminConsoleUrl,
  ]);
}

export function useGoogleOneTapConfig(
  apiBaseUrl: string,
  debugLogger: DebugLogger
): Optional<GoogleOneTapConfig> {
  const [config, setConfig] = useState<GoogleOneTapConfig>();

  useEffect(() => {
    const loadConfig = async () => {
      try {
        const fetchedConfig = await fetchGoogleOneTapConfig({ apiBaseUrl, debugLogger });
        setConfig(fetchedConfig);
      } catch (error) {
        debugLogger.error('Failed to load Google One Tap config:', error);
        // Don't throw, just set config to undefined to prevent render blocking
        setConfig(undefined);
      }
    };

    // Add a small delay to prevent blocking initial render
    const timeoutId = setTimeout(() => {
      void loadConfig();
    }, configLoadDelay);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [apiBaseUrl, debugLogger]);

  return config;
}

export function useGoogleOneTapVerify(
  apiBaseUrl: string,
  debugLogger: DebugLogger
): (response: GoogleOneTapCredentialResponse) => Promise<Optional<GoogleOneTapVerifyResponse>> {
  return useCallback(
    async (response: GoogleOneTapCredentialResponse) => {
      return verifyGoogleOneTapCredential({ apiBaseUrl, debugLogger }, response);
    },
    [apiBaseUrl, debugLogger]
  );
}

export type AuthStatusResult = {
  authStatus?: boolean;
  authCheckError?: string;
  checkAdminTokenStatus: () => Promise<boolean>;
  checkStorageAccess: () => Promise<boolean>;
  requestStorageAccess: () => Promise<boolean>;
};

export function useAuthStatus(siteConfig: SiteConfig, debugLogger: DebugLogger): AuthStatusResult {
  const [authStatus, setAuthStatus] = useState<boolean>();
  const [authCheckError, setAuthCheckError] = useState<string>();
  const [isChecking, setIsChecking] = useState(false);

  const logtoAdminConsoleUrl = siteConfig.customFields?.logtoAdminConsoleUrl;
  const enableAuthStatusCheck = siteConfig.customFields?.enableAuthStatusCheck;
  const isDebugMode = Boolean(siteConfig.customFields?.isDebuggingEnabled);
  const isIframeVisible = Boolean(siteConfig.customFields?.isIframeVisible);

  const { checkAdminTokenStatus, checkStorageAccess, requestStorageAccess, authStatusCheckerHost } =
    useMemo(
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

  const performAuthCheckWithRetry = useCallback(
    async (retryCount = 0): Promise<void> => {
      if (isChecking) {
        debugLogger.log('Auth check already in progress, skipping...');
        return;
      }

      try {
        setIsChecking(true);
        setAuthCheckError(undefined);
        debugLogger.log(
          `Starting auth check... (attempt ${retryCount + 1}/${authStatusMaxRetries + 1})`
        );
        const isAuthenticated = await checkAdminTokenStatus();
        debugLogger.log('Auth check completed with result:', isAuthenticated);
        setAuthStatus(isAuthenticated);
      } catch (error) {
        debugLogger.error(`Failed to check auth status (attempt ${retryCount + 1}):`, error);

        if (retryCount < authStatusMaxRetries) {
          debugLogger.log(`Retrying auth check in ${authStatusRetryDelay}ms...`);
          setTimeout(() => {
            setIsChecking(false);
            void performAuthCheckWithRetry(retryCount + 1);
          }, authStatusRetryDelay);
        } else {
          debugLogger.error('Auth check failed, setting authStatus to false');
          setAuthCheckError(error instanceof Error ? error.message : 'Unknown error');
          setAuthStatus(false);
          setIsChecking(false);
        }
      } finally {
        // Ensure isChecking is always reset
        if (retryCount >= authStatusMaxRetries) {
          setIsChecking(false);
        }
      }
    },
    [checkAdminTokenStatus, debugLogger, isChecking]
  );

  // Check auth status only on component mount (no polling)
  useEffect(() => {
    if (!enableAuthStatusCheck || !authStatusCheckerHost) {
      debugLogger.log('Auth status check disabled, setting authStatus to false');
      setAuthStatus(false);
      return;
    }

    // Only run if authStatus is undefined (initial state)
    if (authStatus !== undefined) {
      return;
    }

    // Delay initial check to prevent blocking initial render
    const initialCheckTimeout = setTimeout(() => {
      void performAuthCheckWithRetry();
    }, initialAuthCheckDelay);

    // Fallback timeout to ensure authStatus is set to false if no response
    const fallbackTimeout = setTimeout(() => {
      setAuthStatus((currentStatus) => {
        if (currentStatus === undefined) {
          debugLogger.warn('Auth check timeout reached, setting authStatus to false');
          setAuthCheckError('Authentication check timeout');
          return false;
        }
        return currentStatus;
      });
    }, authCheckFallbackTimeout);

    // Cleanup timeouts on unmount
    return () => {
      clearTimeout(initialCheckTimeout);
      clearTimeout(fallbackTimeout);
    };
  }, [
    enableAuthStatusCheck,
    authStatusCheckerHost,
    debugLogger,
    performAuthCheckWithRetry,
    authStatus,
  ]);

  // Expose auth status to global scope for external access
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.__logtoAuthStatus = {
        authStatus,
        authCheckError,
        checkAdminTokenStatus,
        checkStorageAccess,
        requestStorageAccess,
      };
    }
  }, [authStatus, authCheckError, checkAdminTokenStatus, checkStorageAccess, requestStorageAccess]);

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
    checkStorageAccess,
    requestStorageAccess,
  };
}
/* eslint-enable @silverhand/fp/no-mutation */
