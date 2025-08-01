import BrowserOnly from '@docusaurus/BrowserOnly';
import type { WrapperProps } from '@docusaurus/types';
import type LayoutType from '@theme/Layout';
import Layout from '@theme-original/Layout';
import { type ReactNode } from 'react';

import GoogleOneTapInitializer from './GoogleOneTapInitializer';
import { useGoogleOneTapConfig } from './hooks';

type Props = WrapperProps<typeof LayoutType>;

export default function LayoutWrapper(props: Props): ReactNode {
  const { config } = useGoogleOneTapConfig();

  return (
    <>
      <Layout {...props} />
      {config?.oneTap?.isEnabled && <BrowserOnly>{() => <GoogleOneTapInitializer />}</BrowserOnly>}
    </>
  );
}
