import { appendPath, yes } from '@silverhand/essentials';
import { type ReactNode, useCallback, useEffect, useState } from 'react';

import { isGoogleOneTapTriggeredKey } from './constants';
import { useApiBaseUrl, useDebugLogger, useGoogleOneTapConfig } from './hooks';
import type { GoogleOneTapCredentialResponse } from './types';

export default function GoogleOneTapInitializer(): ReactNode {
  const [isGoogleOneTapTriggered, setIsGoogleOneTapTriggered] = useState(false);
  const { baseCloudApiUrl } = useApiBaseUrl();
  const { config } = useGoogleOneTapConfig();
  const { debugLogger } = useDebugLogger();

  useEffect(() => {
    const isTriggered = yes(localStorage.getItem(isGoogleOneTapTriggeredKey));
    setIsGoogleOneTapTriggered(isTriggered);
  }, []);

  const handleCredentialResponse = useCallback(
    (response: GoogleOneTapCredentialResponse) => {
      /* eslint-disable @silverhand/fp/no-mutation */
      debugLogger.log('handleCredentialResponse received response:', response);

      // Set localStorage before form submission
      localStorage.setItem(isGoogleOneTapTriggeredKey, '1');

      // Create a hidden form for POST submission
      const form = document.createElement('form');
      form.method = 'POST';
      form.action = appendPath(new URL(baseCloudApiUrl), 'api/external-google-one-tap').toString();
      form.style.display = 'none';

      // Add credential as hidden input
      const credentialInput = document.createElement('input');
      credentialInput.type = 'hidden';
      credentialInput.name = 'credential';
      credentialInput.value = response.credential;
      form.append(credentialInput);

      // Append form to body and submit
      document.body.append(form);
      form.submit();

      // Clean up the form element
      form.remove();
    },
    /* eslint-enable @silverhand/fp/no-mutation */
    [debugLogger, baseCloudApiUrl]
  );

  useEffect(() => {
    if (
      !isGoogleOneTapTriggered &&
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
  }, [config, debugLogger, isGoogleOneTapTriggered, handleCredentialResponse]);

  return null;
}
