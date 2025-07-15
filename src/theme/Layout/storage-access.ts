/* eslint-disable @silverhand/fp/no-mutation */
import { iframeLoadDelay, requestTimeout } from './constants';
import type { DebugLogger } from './debug-logger';
import { AuthMessageType, type StorageAccessRequest, type StorageAccessResponse } from './types';

export type StorageAccessCheckerOptions = {
  logtoAdminConsoleUrl?: string;
  enableAuthStatusCheck?: boolean;
  debugLogger: DebugLogger;
};

export function createStorageAccessChecker({
  logtoAdminConsoleUrl,
  enableAuthStatusCheck,
  debugLogger,
}: StorageAccessCheckerOptions) {
  const iframeSrc =
    typeof logtoAdminConsoleUrl === 'string' ? `${logtoAdminConsoleUrl}/auth-status` : undefined;

  const authStatusCheckerHost =
    typeof logtoAdminConsoleUrl === 'string' ? new URL(logtoAdminConsoleUrl).origin : undefined;

  const checkStorageAccess = async (): Promise<boolean> => {
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
      iframe.style.display = 'none';
      document.body.append(iframe);

      const requestId = Math.random().toString(36).slice(7);
      // eslint-disable-next-line @silverhand/fp/no-let, prefer-const
      let timeoutId: NodeJS.Timeout;
      // eslint-disable-next-line @silverhand/fp/no-let
      let messageHandlerAdded = false;

      const handleMessage = (event: MessageEvent<StorageAccessResponse>) => {
        if (event.origin !== authStatusCheckerHost) {
          debugLogger.warn(
            'Storage access check: Origin mismatch:',
            event.origin,
            'vs',
            authStatusCheckerHost
          );
          return;
        }

        const { data } = event;
        if (typeof data !== 'object' || data.requestId !== requestId) {
          return;
        }

        debugLogger.log('Storage access check response:', data);

        clearTimeout(timeoutId);
        if (messageHandlerAdded) {
          window.removeEventListener('message', handleMessage);
          messageHandlerAdded = false;
        }

        if (document.body.contains(iframe)) {
          iframe.remove();
        }

        switch (data.type) {
          case AuthMessageType.StorageAccessStatus: {
            resolve(Boolean(data.hasStorageAccess));
            break;
          }
          case AuthMessageType.StorageAccessError: {
            reject(new Error(String(data.error || 'Storage access check failed')));
            break;
          }
        }
      };

      window.addEventListener('message', handleMessage);
      messageHandlerAdded = true;

      iframe.addEventListener('load', () => {
        setTimeout(() => {
          try {
            const message: StorageAccessRequest = {
              type: AuthMessageType.CheckStorageAccess,
              requestId,
            };

            debugLogger.log('Sending storage access check message:', message);
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
                `Failed to send storage access check message: ${
                  error instanceof Error ? error.message : 'Unknown error'
                }`
              )
            );
          }
        }, iframeLoadDelay);
      });

      // eslint-disable-next-line unicorn/prefer-add-event-listener
      iframe.onerror = () => {
        clearTimeout(timeoutId);
        if (messageHandlerAdded) {
          window.removeEventListener('message', handleMessage);
        }
        if (document.body.contains(iframe)) {
          iframe.remove();
        }
        reject(new Error('Storage access check: iframe failed to load'));
      };

      timeoutId = setTimeout(() => {
        if (messageHandlerAdded) {
          window.removeEventListener('message', handleMessage);
        }
        if (document.body.contains(iframe)) {
          iframe.remove();
        }
        reject(new Error('Storage access check: Request timeout'));
      }, requestTimeout);
    });
  };

  const requestStorageAccess = async (): Promise<boolean> => {
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
      iframe.style.display = 'none';
      document.body.append(iframe);

      const requestId = Math.random().toString(36).slice(7);
      // eslint-disable-next-line @silverhand/fp/no-let, prefer-const
      let timeoutId: NodeJS.Timeout;
      // eslint-disable-next-line @silverhand/fp/no-let
      let messageHandlerAdded = false;

      const handleMessage = (event: MessageEvent<StorageAccessResponse>) => {
        if (event.origin !== authStatusCheckerHost) {
          debugLogger.warn(
            'Storage access request: Origin mismatch:',
            event.origin,
            'vs',
            authStatusCheckerHost
          );
          return;
        }

        const { data } = event;
        if (typeof data !== 'object' || data.requestId !== requestId) {
          return;
        }

        debugLogger.log('Storage access request response:', data);

        clearTimeout(timeoutId);
        if (messageHandlerAdded) {
          window.removeEventListener('message', handleMessage);
          messageHandlerAdded = false;
        }

        if (document.body.contains(iframe)) {
          iframe.remove();
        }

        switch (data.type) {
          case AuthMessageType.StorageAccessStatus: {
            resolve(Boolean(data.storageAccessGranted));
            break;
          }
          case AuthMessageType.StorageAccessError: {
            reject(new Error(String(data.error || 'Storage access request failed')));
            break;
          }
        }
      };

      window.addEventListener('message', handleMessage);
      messageHandlerAdded = true;

      iframe.addEventListener('load', () => {
        setTimeout(() => {
          try {
            const message: StorageAccessRequest = {
              type: AuthMessageType.RequestStorageAccess,
              requestId,
            };

            debugLogger.log('Sending storage access request message:', message);
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
                `Failed to send storage access request message: ${
                  error instanceof Error ? error.message : 'Unknown error'
                }`
              )
            );
          }
        }, iframeLoadDelay);
      });

      // eslint-disable-next-line unicorn/prefer-add-event-listener
      iframe.onerror = () => {
        clearTimeout(timeoutId);
        if (messageHandlerAdded) {
          window.removeEventListener('message', handleMessage);
        }
        if (document.body.contains(iframe)) {
          iframe.remove();
        }
        reject(new Error('Storage access request: iframe failed to load'));
      };

      timeoutId = setTimeout(() => {
        if (messageHandlerAdded) {
          window.removeEventListener('message', handleMessage);
        }
        if (document.body.contains(iframe)) {
          iframe.remove();
        }
        reject(new Error('Storage access request: Request timeout'));
      }, requestTimeout);
    });
  };

  return {
    checkStorageAccess,
    requestStorageAccess,
    authStatusCheckerHost,
    iframeSrc,
  };
}
/* eslint-enable @silverhand/fp/no-mutation */
