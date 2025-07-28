import { appendPath, yes } from '@silverhand/essentials';
import { type ReactNode, useCallback, useEffect, useState } from 'react';

import { isGoogleOneTapTriggeredKey } from './constants';
import { useApiBaseUrl, useDebugLogger, useGoogleOneTapConfig } from './hooks';
import type { GoogleOneTapCredentialResponse } from './types';

export default function GoogleOneTapInitializer(): ReactNode {
  const [isGoogleOneTapTriggered, setIsGoogleOneTapTriggered] = useState(false);
  const { logtoAdminConsoleUrl, baseUrl } = useApiBaseUrl();
  const { config } = useGoogleOneTapConfig();
  const { debugLogger } = useDebugLogger();

  useEffect(() => {
    const isTriggered = yes(localStorage.getItem(isGoogleOneTapTriggeredKey));
    setIsGoogleOneTapTriggered(isTriggered);
  }, []);

  // Function to manually build Logto sign-in URL
  const buildSignInUrl = useCallback(
    ({ credential }: GoogleOneTapCredentialResponse) => {
      try {
        if (!logtoAdminConsoleUrl) {
          throw new Error('Logto admin console URL is not set');
        }

        const signInUrl = new URL(
          appendPath(new URL(logtoAdminConsoleUrl), 'external-google-one-tap')
        );

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

      // // Build Logto sign-in URL with credential
      // const signInUrl = buildSignInUrl(response);

      // if (signInUrl) {
      //   localStorage.setItem(isGoogleOneTapTriggeredKey, '1');
      //   // Directly navigate to sign-in URL in current window
      //   // eslint-disable-next-line @silverhand/fp/no-mutation
      //   // window.location.href = signInUrl;
      //   debugLogger.log('Redirecting to Logto sign-in URL', signInUrl);
      // }

      const formData = new URLSearchParams({
        credential: response.credential,
      });
      
      const fetchResponse = await fetch(
        'https://cloud.logto.dev/api/anonymous/external-google-one-tap',
        {
          method: 'POST',
          credentials: 'include',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: formData.toString(),
          redirect: 'manual',
        }
      );

      if (fetchResponse.status === 200) {
        localStorage.setItem(isGoogleOneTapTriggeredKey, '1');
        const json = (await fetchResponse.json());
        console.log('json', JSON.stringify(json, null, 2));

        // Wait 2 seconds to allow viewing console logs
        await new Promise((resolve) => {
          setTimeout(resolve, 2000);
        });

        // eslint-disable-next-line @silverhand/fp/no-mutation
        window.location.href = 'https://cloud.logto.dev/external-google-one-tap';
      }
    },
    [debugLogger, baseUrl]
  );

  useEffect(() => {
    if (
      !isGoogleOneTapTriggered &&
      logtoAdminConsoleUrl &&
      config &&
      config.oneTap?.isEnabled &&
      window.google?.accounts.id
    ) {
      debugLogger.log('Initializing Google One Tap');

      try {
        // Initialize Google One Tap
        window.google.accounts.id.initialize({
          client_id: config.clientId,

          callback: handleCredentialResponse,
          auto_select: config.oneTap.autoSelect,
          cancel_on_tap_outside: config.oneTap.closeOnTapOutside,
          itp_support: config.oneTap.itpSupport,
          // Disable FedCM for prompt.
          use_fedcm_for_prompt: false,
          // Set context to use, to show "Use xxx" in Google One Tap prompt.
          context: 'use',
        });

        // Show One Tap prompt
        window.google.accounts.id.prompt();
      } catch (error) {
        console.error('Error initializing Google One Tap:', error);
      }
    }
  }, [
    config,
    debugLogger,
    logtoAdminConsoleUrl,
    isGoogleOneTapTriggered,
    handleCredentialResponse,
  ]);

  return null;
}
