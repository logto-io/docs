import BrowserOnly from '@docusaurus/BrowserOnly';
import type { WrapperProps } from '@docusaurus/types';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import type LayoutType from '@theme/Layout';
import Layout from '@theme-original/Layout';
import { type ReactNode } from 'react';

import GoogleOneTapInitializer from './GoogleOneTapInitializer';
import { useDebugLogger, useApiBaseUrl, useGoogleOneTapConfig, useAuthStatus } from './hooks';

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

  return (
    <>
      <Layout {...props} />
      {authStatus === false && config?.oneTap?.isEnabled && (
        <BrowserOnly fallback={<div>Loading Google Sign-In...</div>}>
          {() => <GoogleOneTapInitializer config={config} debugLogger={debugLogger} />}
        </BrowserOnly>
      )}
    </>
  );
}
