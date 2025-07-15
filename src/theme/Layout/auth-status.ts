/* eslint-disable @silverhand/fp/no-mutation */
import {
  iframeLoadDelay,
  requestTimeout,
  debugIframeDelay,
  debugIframeTimeoutDelay,
} from './constants';
import type { DebugLogger } from './debug-logger';
import { createStorageAccessChecker } from './storage-access';
import { AuthMessageType, type AuthStatusRequest, type AuthStatusResponse } from './types';

export type AuthStatusCheckerOptions = {
  logtoAdminConsoleUrl?: string;
  enableAuthStatusCheck?: boolean;
  isDebugMode: boolean;
  isIframeVisible: boolean;
  debugLogger: DebugLogger;
};

export type AuthStatusResult = {
  authStatus?: boolean;
  authCheckError?: string;
};

export function createAuthStatusChecker({
  logtoAdminConsoleUrl,
  enableAuthStatusCheck,
  isDebugMode,
  isIframeVisible,
  debugLogger,
}: AuthStatusCheckerOptions) {
  const iframeSrc =
    typeof logtoAdminConsoleUrl === 'string'
      ? `${logtoAdminConsoleUrl}/auth-status${isDebugMode ? '?debug=true' : ''}`
      : undefined;

  const authStatusCheckerHost =
    typeof logtoAdminConsoleUrl === 'string' ? new URL(logtoAdminConsoleUrl).origin : undefined;

  const { checkStorageAccess, requestStorageAccess } = createStorageAccessChecker({
    logtoAdminConsoleUrl,
    enableAuthStatusCheck,
    debugLogger,
  });

  /**
   * Function to check admin token status via cross-domain iframe communication
   *
   * This function creates a hidden iframe, sends a message to check the admin token,
   * and returns a promise that resolves with the token status.
   *
   * @returns Promise that resolves to true if user has admin token, false otherwise
   * @throws Error if auth status checker is not configured or request fails
   */
  const checkAdminTokenStatus = async (): Promise<boolean> => {
    try {
      debugLogger.log('Checking storage access before admin token check');

      const hasStorageAccess = await checkStorageAccess();
      debugLogger.log('Storage access check result:', hasStorageAccess);

      if (!hasStorageAccess) {
        debugLogger.log('Storage access not available, requesting access');
        const storageAccessGranted = await requestStorageAccess();
        debugLogger.log('Storage access request result:', storageAccessGranted);

        if (!storageAccessGranted) {
          throw new Error('Storage access required but not granted');
        }
      }

      debugLogger.log('Storage access confirmed, proceeding with admin token check');
    } catch (error) {
      debugLogger.warn('Storage access check/request failed:', error);
    }

    return new Promise((resolve, reject) => {
      if (typeof document === 'undefined') {
        reject(new Error('Document not available (SSR environment)'));
        return;
      }

      if (!logtoAdminConsoleUrl || !enableAuthStatusCheck || !iframeSrc) {
        reject(new Error('Auth status checker not configured'));
        return;
      }

      const iframe = document.createElement('iframe');
      iframe.src = iframeSrc;
      iframe.sandbox = 'allow-scripts allow-same-origin allow-storage-access-by-user-activation';

      if (isIframeVisible) {
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
          }, debugIframeDelay);
        } else if (document.body.contains(iframe)) {
          iframe.remove();
        }

        switch (data.type) {
          case AuthMessageType.AdminTokenStatus: {
            debugLogger.log('Received admin token status (data):', JSON.stringify(data, null, 2));
            resolve(data.isAuthenticated ?? false);
            break;
          }
          case AuthMessageType.AdminTokenError: {
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
          contentWindow: Boolean(iframe.contentWindow),
          readyState: iframe.contentDocument?.readyState,
        });

        // Add a delay to ensure iframe content is fully ready and message listeners are set up
        setTimeout(() => {
          try {
            const message: AuthStatusRequest = {
              type: AuthMessageType.CheckAdminToken,
              requestId,
            };

            debugLogger.log('Sending message to iframe:', {
              message,
              targetOrigin: authStatusCheckerHost,
              iframeContentWindow: Boolean(iframe.contentWindow),
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
        }, iframeLoadDelay);
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
          }, debugIframeTimeoutDelay);
        } else {
          iframe.remove();
        }

        reject(new Error('Request timeout'));
      }, requestTimeout);
    });
  };

  return {
    checkAdminTokenStatus,
    checkStorageAccess,
    requestStorageAccess,
    authStatusCheckerHost,
    iframeSrc,
  };
}
/* eslint-enable @silverhand/fp/no-mutation */
