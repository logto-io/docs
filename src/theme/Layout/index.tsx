import BrowserOnly from '@docusaurus/BrowserOnly';
import type { WrapperProps } from '@docusaurus/types';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import type LayoutType from '@theme/Layout';
import Layout from '@theme-original/Layout';
import { type ReactNode } from 'react';

import GoogleOneTapInitializer from './GoogleOneTapInitializer';
import { useDebugLogger, useGoogleOneTapConfig, useApiBaseUrl } from './hooks';

type Props = WrapperProps<typeof LayoutType>;

export default function LayoutWrapper(props: Props): ReactNode {
  // Hooks must be called at the top level, outside of try-catch
  const { siteConfig } = useDocusaurusContext();
  const debugLogger = useDebugLogger(siteConfig);
  const { config } = useGoogleOneTapConfig(siteConfig, debugLogger);
  const { logtoAdminConsoleUrl } = useApiBaseUrl(siteConfig);

  return (
    <>
      <Layout {...props} />
      {config?.oneTap?.isEnabled && (
        <BrowserOnly fallback={<div>Loading Google Sign-In...</div>}>
          {() => (
            <GoogleOneTapInitializer
              config={config}
              debugLogger={debugLogger}
              logtoAdminConsoleUrl={logtoAdminConsoleUrl}
            />
          )}
        </BrowserOnly>
      )}
    </>
  );
}
