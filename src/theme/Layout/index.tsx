import type { WrapperProps } from '@docusaurus/types';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import type LayoutType from '@theme/Layout';
import Layout from '@theme-original/Layout';
import type { ReactNode } from 'react';

import { useApiBaseUrl, useGoogleOneTapConfig, useAuthStatus } from './hooks';

type Props = WrapperProps<typeof LayoutType>;

export default function LayoutWrapper(props: Props): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  const apiBaseUrl = useApiBaseUrl(siteConfig);
  const config = useGoogleOneTapConfig(apiBaseUrl);
  const authStatus = useAuthStatus(siteConfig);

  return (
    <>
      <Layout {...props} />
      {authStatus === false && config && config.oneTap?.isEnabled && (
        <div
          data-itp_support={Boolean(config.oneTap.itpSupport)}
          data-auto_select={Boolean(config.oneTap.autoSelect)}
          data-cancel_on_tap_outside={Boolean(config.oneTap.closeOnTapOutside)}
          id="g_id_onload"
          data-client_id={config.clientId}
          // eslint-disable-next-line no-warning-comments
          // TODO: handleCredentialResponse will be implemented later
          data-callback="handleCredentialResponse"
          data-context="signin"
        ></div>
      )}
    </>
  );
}
