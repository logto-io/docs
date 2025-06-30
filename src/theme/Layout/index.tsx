import type { WrapperProps } from '@docusaurus/types';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import type LayoutType from '@theme/Layout';
import Layout from '@theme-original/Layout';
import { type ReactNode, useEffect } from 'react';

import { useDebugLogger, useApiBaseUrl, useGoogleOneTapConfig, useAuthStatus } from './hooks';

type GoogleCredentialResponse = {
  credential: string;
};

type Props = WrapperProps<typeof LayoutType>;

export default function LayoutWrapper(props: Props): ReactNode {
  // Hooks must be called at the top level, outside of try-catch
  const { siteConfig } = useDocusaurusContext();
  const debugLogger = useDebugLogger(siteConfig);
  const apiBaseUrl = useApiBaseUrl(siteConfig);
  const config = useGoogleOneTapConfig(apiBaseUrl, debugLogger);
  const { authStatus } = useAuthStatus(siteConfig, debugLogger);

  debugLogger.log('config', config);
  debugLogger.log('authStatus', authStatus);
  debugLogger.log('siteConfig.customFields', siteConfig.customFields);
  debugLogger.log('should show Google One Tap', authStatus === false && config?.oneTap?.isEnabled);

  // Define global handleCredentialResponse function (only in browser)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // eslint-disable-next-line @silverhand/fp/no-mutation
      window.handleCredentialResponse = (response: GoogleCredentialResponse) => {
        console.log('Encoded JWT ID token:', response.credential);
        // TODO: Send to your backend for verification
      };
    }
  }, []);

  // Initialize Google One Tap when conditions are met
  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    if (authStatus === false && config?.oneTap?.isEnabled && window.google?.accounts.id) {
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
  }, [authStatus, config, debugLogger]);

  return <Layout {...props} />;
}
