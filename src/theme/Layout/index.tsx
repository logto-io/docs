/* eslint-disable max-lines */
/* eslint-disable @silverhand/fp/no-mutation */
import type { WrapperProps } from '@docusaurus/types';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { condString } from '@silverhand/essentials';
import type LayoutType from '@theme/Layout';
import Layout from '@theme-original/Layout';
import type { ReactNode } from 'react';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { z } from 'zod';

import { AuthMessageType, type AuthStatusRequest, type AuthStatusResponse } from './types';

type Props = WrapperProps<typeof LayoutType>;

const oneTapSchema = z
  .object({
    isEnabled: z.boolean().optional(),
    autoSelect: z.boolean().optional(),
    closeOnTapOutside: z.boolean().optional(),
    itpSupport: z.boolean().optional(),
  })
  .optional();

const googleOneTapConfigSchema = z.object({
  clientId: z.string(),
  oneTap: oneTapSchema,
});

type GoogleOneTapConfig = z.infer<typeof googleOneTapConfigSchema>;

const CACHE_KEY = '_logto_google_one_tap_config';
const CACHE_EXPIRY_KEY = '_logto_google_one_tap_config_expiry';
const CACHE_EXPIRY_TIME = 1 * 60 * 60 * 1000; // 1 hour

// Default API base URL
const DEFAULT_API_BASE_PROD_URL = 'https://auth.logto.io';
const DEFAULT_API_BASE_DEV_URL = 'https://auth.logto.dev';

export default function LayoutWrapper(props: Props): ReactNode {
  const [config, setConfig] = useState<GoogleOneTapConfig>();
  const [authStatus, setAuthStatus] = useState<boolean>();
  const [authCheckError, setAuthCheckError] = useState<string>();
  const { siteConfig } = useDocusaurusContext();

  // Check if debug mode is enabled
  const isDebugMode = Boolean(siteConfig.customFields?.isDebuggingEnabled);

  // Debug logger that only logs when debug mode is enabled
  const debugLogger = useMemo(
    () => ({
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
    }),
    [isDebugMode]
  );

  debugLogger.log('siteConfig.customFields', siteConfig.customFields);

  // Get the API base URL from customFields, or use the default value if it doesn't exist
  const logtoApiBaseUrl = siteConfig.customFields?.logtoApiBaseUrl;
  const apiBaseUrl =
    typeof logtoApiBaseUrl === 'string'
      ? logtoApiBaseUrl
      : siteConfig.customFields?.isDevFeatureEnabled
        ? DEFAULT_API_BASE_DEV_URL
        : DEFAULT_API_BASE_PROD_URL;

  // Get auth status checker configuration
  const logtoAdminConsoleUrl = siteConfig.customFields?.logtoAdminConsoleUrl;
  const enableAuthStatusCheck = siteConfig.customFields?.enableAuthStatusCheck;

  const iframeSrc =
    typeof logtoAdminConsoleUrl === 'string'
      ? `${logtoAdminConsoleUrl}/auth-status-checker${condString(siteConfig.customFields?.isDebuggingEnabled && '?debug=true')}`
      : undefined;
  const authStatusCheckerHost =
    typeof logtoAdminConsoleUrl === 'string' ? new URL(logtoAdminConsoleUrl).origin : undefined;

  /**
   * Function to check admin token status via cross-domain iframe communication
   *
   * This function creates a hidden iframe, sends a message to check the admin token,
   * and returns a promise that resolves with the token status.
   *
   * @returns Promise that resolves to true if user has admin token, false otherwise
   * @throws Error if auth status checker is not configured or request fails
   */
  const checkAdminTokenStatus = useCallback(async (): Promise<boolean> => {
    return new Promise((resolve, reject) => {
      if (!logtoAdminConsoleUrl || !enableAuthStatusCheck || !iframeSrc) {
        reject(new Error('Auth status checker not configured'));
        return;
      }

      const iframe = document.createElement('iframe');
      iframe.src = iframeSrc;

      if (isDebugMode) {
        // Temporarily show iframe for debugging
        iframe.style.position = 'fixed';
        iframe.style.top = '10px';
        iframe.style.right = '10px';
        iframe.style.width = '1000px';
        iframe.style.height = '1000px';
        iframe.style.border = '2px solid red';
        iframe.style.zIndex = '9999';
        iframe.style.backgroundColor = 'white';
      } else {
        iframe.style.display = 'none';
      }

      document.body.append(iframe);

      const requestId = Math.random().toString(36).slice(7);
      // eslint-disable-next-line @silverhand/fp/no-let, prefer-const
      let timeoutId: NodeJS.Timeout;
      // eslint-disable-next-line @silverhand/fp/no-let
      let messageHandlerAdded = false;

      const handleMessage = (event: MessageEvent<AuthStatusResponse>) => {
        debugLogger.log('handleMessage received:', {
          origin: event.origin,
          expectedOrigin: authStatusCheckerHost,
          data: event.data,
          requestId,
          dataType: typeof event.data,
          dataKeys: Object.keys(event.data),
        });

        // Validate origin for security
        if (event.origin !== authStatusCheckerHost) {
          debugLogger.warn('Origin mismatch:', event.origin, 'vs', authStatusCheckerHost);
          return;
        }

        const { data } = event;

        // Validate data structure
        if (typeof data !== 'object') {
          debugLogger.warn('Invalid message data structure:', data);
          return;
        }

        if (data.requestId !== requestId) {
          debugLogger.log(
            'Request ID mismatch, ignoring message:',
            data.requestId,
            'vs',
            requestId
          );
          return;
        }

        debugLogger.log('Processing valid response for request:', requestId);

        clearTimeout(timeoutId);
        if (messageHandlerAdded) {
          window.removeEventListener('message', handleMessage);
          messageHandlerAdded = false;
        }

        // In debug mode (when iframe is visible), don't remove iframe immediately
        const isIframeVisible = iframe.style.display !== 'none';
        if (isIframeVisible) {
          // In debug mode, delay removal to allow inspection
          iframe.style.border = '2px solid green'; // Change border color to indicate success
          setTimeout(() => {
            if (document.body.contains(iframe)) {
              iframe.remove();
            }
          }, 5000); // Keep iframe for 5 seconds in debug mode
        } else if (document.body.contains(iframe)) {
          iframe.remove();
        }

        switch (data.type) {
          case AuthMessageType.ADMIN_TOKEN_STATUS: {
            debugLogger.log('Received admin token status:', data.hasToken);
            resolve(data.hasToken ?? false);
            break;
          }
          case AuthMessageType.ADMIN_TOKEN_ERROR: {
            console.error('Received auth error:', data.error);
            reject(new Error(data.error || 'Unknown auth error'));
            break;
          }
        }
      };

      // Add message listener
      window.addEventListener('message', handleMessage);
      messageHandlerAdded = true;

      iframe.addEventListener('load', () => {
        debugLogger.log('iframe loaded successfully, preparing to send message');
        debugLogger.log('iframe details:', {
          src: iframe.src,
          contentWindow: !!iframe.contentWindow,
          readyState: iframe.contentDocument?.readyState,
        });

        // Add a longer delay to ensure iframe content is fully ready and message listeners are set up
        setTimeout(() => {
          try {
            const message: AuthStatusRequest = {
              type: AuthMessageType.CHECK_ADMIN_TOKEN,
              requestId,
            };

            debugLogger.log('Sending message to iframe:', {
              message,
              targetOrigin: authStatusCheckerHost,
              iframeContentWindow: !!iframe.contentWindow,
            });

            iframe.contentWindow?.postMessage(message, authStatusCheckerHost ?? '');
          } catch (error) {
            clearTimeout(timeoutId);
            if (messageHandlerAdded) {
              window.removeEventListener('message', handleMessage);
              messageHandlerAdded = false;
            }
            if (document.body.contains(iframe)) {
              iframe.remove();
            }
            reject(
              new Error(
                `Failed to send message to iframe: ${error instanceof Error ? error.message : 'Unknown error'}`
              )
            );
          }
        }, 5000); // Increased delay to 5 seconds to ensure iframe is fully ready
      });

      // eslint-disable-next-line unicorn/prefer-add-event-listener
      iframe.onerror = () => {
        clearTimeout(timeoutId);
        window.removeEventListener('message', handleMessage);
        if (document.body.contains(iframe)) {
          iframe.remove();
        }
        reject(new Error('iframe failed to load'));
      };

      // Set timeout for the request
      timeoutId = setTimeout(() => {
        window.removeEventListener('message', handleMessage);

        // In debug mode, don't remove iframe immediately on timeout
        const isIframeVisible = iframe.style.display !== 'none';
        if (isIframeVisible) {
          // In debug mode, keep iframe visible for inspection
          iframe.style.border = '2px solid orange'; // Change border color to indicate timeout
          setTimeout(() => {
            if (document.body.contains(iframe)) {
              iframe.remove();
            }
          }, 10_000); // Keep iframe for 10 seconds on timeout in debug mode
        } else {
          iframe.remove();
        }

        reject(new Error('Request timeout'));
      }, 5000);
    });
  }, [
    logtoAdminConsoleUrl,
    enableAuthStatusCheck,
    iframeSrc,
    authStatusCheckerHost,
    isDebugMode,
    debugLogger,
  ]);

  useEffect(() => {
    const fetchConfig = async () => {
      try {
        const cachedConfig = localStorage.getItem(CACHE_KEY);
        const cachedExpiry = localStorage.getItem(CACHE_EXPIRY_KEY);

        if (cachedConfig && cachedExpiry && Number(cachedExpiry) > Date.now()) {
          try {
            const parsedConfig = googleOneTapConfigSchema.parse(JSON.parse(cachedConfig));
            setConfig(parsedConfig);
            return;
          } catch (parseError) {
            debugLogger.error('Cached config validation failed:', parseError);
          }
        }

        const response = await fetch(`${apiBaseUrl}/api/google-one-tap/config`, {
          headers: {
            Origin: window.location.origin,
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch Google One Tap config');
        }

        const data = await response.json();
        const validatedConfig = googleOneTapConfigSchema.parse(data);

        localStorage.setItem(CACHE_KEY, JSON.stringify(validatedConfig));
        localStorage.setItem(CACHE_EXPIRY_KEY, String(Date.now() + CACHE_EXPIRY_TIME));

        setConfig(validatedConfig);
      } catch (error) {
        debugLogger.error('Error fetching or validating Google One Tap config:', error);
      }
    };

    void fetchConfig();
  }, [apiBaseUrl, debugLogger]);

  // Check auth status on component mount and set up polling
  useEffect(() => {
    if (!enableAuthStatusCheck || !authStatusCheckerHost) {
      return;
    }

    const performAuthCheck = async () => {
      try {
        setAuthCheckError(undefined);
        const hasToken = await checkAdminTokenStatus();
        setAuthStatus(hasToken);
      } catch (error) {
        debugLogger.error('Failed to check auth status:', error);
        setAuthCheckError(error instanceof Error ? error.message : 'Unknown error');
        setAuthStatus(false);
      }
    };

    // Initial check
    void performAuthCheck();

    // Set up polling every 30 seconds
    const pollInterval = setInterval(() => {
      void performAuthCheck();
    }, 30_000);

    // Cleanup interval on unmount
    return () => {
      clearInterval(pollInterval);
    };
  }, [enableAuthStatusCheck, authStatusCheckerHost, checkAdminTokenStatus, debugLogger]);

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

  // Debug logging in development
  useEffect(() => {
    debugLogger.log('Logto Auth Status Debug Info:', {
      authStatus,
      authCheckError,
      logtoAdminConsoleUrl,
      enableAuthStatusCheck,
      authStatusCheckerHost,
      iframeSrc,
      currentOrigin: window.location.origin,
    });
  }, [
    authStatus,
    authCheckError,
    logtoAdminConsoleUrl,
    enableAuthStatusCheck,
    authStatusCheckerHost,
    iframeSrc,
    debugLogger,
  ]);

  return (
    <Layout {...props}>
      {/*
       * Show Google One Tap if:
       * 1. user is not authenticated
       * 2. Google One Tap is enabled
       */}
      {authStatus === false && config && config.oneTap?.isEnabled && (
        <div
          data-itp_support={Boolean(config.oneTap.itpSupport)}
          data-auto_select={Boolean(config.oneTap.autoSelect)}
          data-cancel_on_tap_outside={Boolean(config.oneTap.closeOnTapOutside)}
          id="g_id_onload"
          data-client_id={config.clientId}
          // TODO: implement handleCredentialResponse page
          data-callback="handleCredentialResponse"
          data-context="signin"
        ></div>
      )}
    </Layout>
  );
}
/* eslint-enable @silverhand/fp/no-mutation */
/* eslint-enable max-lines */
