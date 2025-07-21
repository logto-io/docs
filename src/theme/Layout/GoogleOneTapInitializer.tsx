import { type ReactNode, useCallback, useEffect, useState } from 'react';

import type { DebugLogger } from './debug-logger';
import type { GoogleOneTapConfig } from './google-one-tap';
import type { GoogleOneTapCredentialResponse, GoogleOneTapVerifyResponse } from './types';
import { appendPath, yes } from '@silverhand/essentials';
import { isGoogleOneTapTriggeredKey } from './constants';

type GoogleOneTapInitializerProps = {
  readonly config: GoogleOneTapConfig;
  readonly debugLogger: DebugLogger;
  readonly logtoAdminConsoleUrl?: string;
};

export default function GoogleOneTapInitializer({
  config,
  debugLogger,
  logtoAdminConsoleUrl,
}: GoogleOneTapInitializerProps): ReactNode {
  const [isGoogleOneTapTriggered, setIsGoogleOneTapTriggered] = useState(false);

  useEffect(() => {
    const isTriggered = yes(localStorage.getItem(isGoogleOneTapTriggeredKey));
    setIsGoogleOneTapTriggered(isTriggered);
  }, []);

  // Function to manually build Logto sign-in URL
  const buildSignInUrl = useCallback(
    ({ credential }: GoogleOneTapVerifyResponse) => {
      try {
        if (!logtoAdminConsoleUrl) {
          throw new Error('Logto admin console URL is not set');
        }

        const signInUrl = new URL(appendPath(new URL(logtoAdminConsoleUrl), 'external-google-one-tap'));

        signInUrl.searchParams.set('credential', credential);

        return signInUrl.toString();
      } catch (error) {
        debugLogger.error('Failed to build sign-in URL:', error);
        return null;
      }
    },
    [logtoAdminConsoleUrl, debugLogger]
  );

  const handleCredentialResponse = useCallback(
    async (response: GoogleOneTapCredentialResponse) => {
      debugLogger.log('handleCredentialResponse received response:', response);

      try {
        // Build Logto sign-in URL with credential
        const signInUrl = buildSignInUrl(response);

        localStorage.setItem(isGoogleOneTapTriggeredKey, '1');

        if (signInUrl) {
          // Directly navigate to sign-in URL in current window
          window.location.href = signInUrl;
          debugLogger.log('Redirecting to Logto sign-in URL', signInUrl);
        } else {
          debugLogger.error('Failed to build sign-in URL');
        }
      } catch (error) {
        debugLogger.error('Failed to open sign-in URL:', error);
      }
    },
    [debugLogger, buildSignInUrl]
  );

  useEffect(() => {
    if (!isGoogleOneTapTriggered && logtoAdminConsoleUrl && config.oneTap?.isEnabled && window.google?.accounts.id) {
      debugLogger.log('Initializing Google One Tap');

      try {
        // Initialize Google One Tap
        window.google.accounts.id.initialize({
          client_id: config.clientId,
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          callback: handleCredentialResponse,
          auto_select: config.oneTap.autoSelect,
          cancel_on_tap_outside: config.oneTap.closeOnTapOutside,
          itp_support: config.oneTap.itpSupport,
        });

        // Show One Tap prompt
        window.google.accounts.id.prompt();
      } catch (error) {
        console.error('Error initializing Google One Tap:', error);
      }
    }
  }, [config, debugLogger, logtoAdminConsoleUrl]);

  return null;
}
