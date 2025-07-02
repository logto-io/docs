import { type ReactNode, useCallback, useEffect } from 'react';

import type { DebugLogger } from './debug-logger';
import type { GoogleOneTapConfig } from './google-one-tap';
import { useApiBaseUrl, useGoogleOneTapVerify } from './hooks';
import type {
  SiteConfig,
  GoogleOneTapCredentialResponse,
  GoogleOneTapVerifyResponse,
} from './types';

type GoogleOneTapInitializerProps = {
  readonly config: GoogleOneTapConfig;
  readonly debugLogger: DebugLogger;
  readonly siteConfig: SiteConfig;
};

export default function GoogleOneTapInitializer({
  config,
  debugLogger,
  siteConfig,
}: GoogleOneTapInitializerProps): ReactNode {
  const { baseUrl: apiBaseUrl, authUrl, redirectUri } = useApiBaseUrl(siteConfig);
  const verifyGoogleOneTap = useGoogleOneTapVerify(apiBaseUrl, debugLogger);

  // Function to manually build Logto sign-in URL
  const buildSignInUrl = useCallback(
    ({ oneTimeToken, email, isNewUser }: GoogleOneTapVerifyResponse) => {
      try {
        const signInUrl = new URL(authUrl);

        // Standard OIDC parameters: client_id
        signInUrl.searchParams.set('client_id', 'admin-console');
        signInUrl.searchParams.set('redirect_uri', redirectUri);
        signInUrl.searchParams.set('first_screen', isNewUser ? 'register' : 'sign_in');

        // Add one-time token parameters
        signInUrl.searchParams.set('one_time_token', oneTimeToken);
        signInUrl.searchParams.set('login_hint', email);

        return signInUrl.toString();
      } catch (error) {
        debugLogger.error('Failed to build sign-in URL:', error);
        return null;
      }
    },
    [authUrl, redirectUri, debugLogger]
  );

  const handleCredentialResponse = useCallback(
    async (response: GoogleOneTapCredentialResponse) => {
      debugLogger.log('handleCredentialResponse received response:', response);

      const verifyData = await verifyGoogleOneTap(response);

      if (verifyData) {
        debugLogger.log('Verification completed:', verifyData);

        try {
          // Build Logto sign-in URL with one-time token
          const signInUrl = buildSignInUrl(verifyData);

          if (signInUrl) {
            // Open sign-in URL in new tab
            window.open(signInUrl, '_blank', 'noopener,noreferrer');
            debugLogger.log('Logto sign-in URL opened in new tab with one-time token', signInUrl);
          } else {
            debugLogger.error('Failed to build sign-in URL');
          }
        } catch (error) {
          debugLogger.error('Failed to open sign-in URL:', error);
        }
      }
    },
    [verifyGoogleOneTap, debugLogger, buildSignInUrl]
  );

  useEffect(() => {
    if (config.oneTap?.isEnabled && window.google?.accounts.id) {
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
  }, [config, debugLogger]);

  return null;
}
