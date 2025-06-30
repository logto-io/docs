import type { WrapperProps } from '@docusaurus/types';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import type LayoutType from '@theme/Layout';
import Layout from '@theme-original/Layout';
import { type ReactNode } from 'react';

import { useDebugLogger, useApiBaseUrl, useGoogleOneTapConfig, useAuthStatus } from './hooks';

type Props = WrapperProps<typeof LayoutType>;

export default function LayoutWrapper(props: Props): ReactNode {
  // Hooks must be called at the top level, outside of try-catch
  const { siteConfig } = useDocusaurusContext();
  const debugLogger = useDebugLogger(siteConfig);
  const apiBaseUrl = useApiBaseUrl(siteConfig);
  const config = useGoogleOneTapConfig(apiBaseUrl, debugLogger);
  const { authStatus } = useAuthStatus(siteConfig, debugLogger);

  // Safe logging with error handling
  try {
    debugLogger.log('config', config);
    debugLogger.log('authStatus', authStatus);
    debugLogger.log('siteConfig.customFields', siteConfig.customFields);
    debugLogger.log(
      'should show Google One Tap',
      authStatus === false && config?.oneTap?.isEnabled
    );
  } catch (error) {
    console.error('Error in debug logging:', error);
  }

  // Safe rendering with error boundary
  try {
    return (
      <>
        <Layout {...props} />
        {/* Show Google One Tap if:
         * 1. user is not authenticated
         * 2. Google One Tap is enabled
         * 3. config is fully loaded (not undefined) */}
        {authStatus === false && config && config.oneTap?.isEnabled && (
          <div
            data-itp_support={Boolean(config.oneTap.itpSupport)}
            data-auto_select={Boolean(config.oneTap.autoSelect)}
            data-cancel_on_tap_outside={Boolean(config.oneTap.closeOnTapOutside)}
            id="g_id_onload"
            data-client_id={config.clientId}
            data-callback="handleCredentialResponse"
            data-context="signin"
          ></div>
        )}
      </>
    );
  } catch (error) {
    console.error('Error in LayoutWrapper rendering:', error);
    // Fallback to basic layout if there's any error
    return <Layout {...props} />;
  }
}
