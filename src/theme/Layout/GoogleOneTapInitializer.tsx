import { type ReactNode, useEffect } from 'react';

import type { DebugLogger } from './debug-logger';
import type { GoogleOneTapConfig } from './google-one-tap';

type GoogleCredentialResponse = {
  credential: string;
};

type GoogleOneTapInitializerProps = {
  readonly config: GoogleOneTapConfig;
  readonly debugLogger: DebugLogger;
};

export default function GoogleOneTapInitializer({
  config,
  debugLogger,
}: GoogleOneTapInitializerProps): ReactNode {
  useEffect(() => {
    // Define global handleCredentialResponse function
    // eslint-disable-next-line @silverhand/fp/no-mutation
    window.handleCredentialResponse = (response: GoogleCredentialResponse) => {
      console.log('Encoded JWT ID token:', response.credential);
      // TODO: Send to your backend for verification
    };
  }, []);

  useEffect(() => {
    if (config.oneTap?.isEnabled && window.google?.accounts.id) {
      debugLogger.log('Initializing Google One Tap');

      try {
        // Initialize Google One Tap
        window.google.accounts.id.initialize({
          client_id: config.clientId,
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          callback: window.handleCredentialResponse!,
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
