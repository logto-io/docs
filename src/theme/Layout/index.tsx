import BrowserOnly from '@docusaurus/BrowserOnly';
import type { WrapperProps } from '@docusaurus/types';
import type LayoutType from '@theme/Layout';
import Layout from '@theme-original/Layout';
import { type ReactNode, useState, useEffect } from 'react';

import GoogleOneTapInitializer from './GoogleOneTapInitializer';
import { useGoogleOneTapConfig } from './hooks';

type Props = WrapperProps<typeof LayoutType>;

export default function LayoutWrapper(props: Props): ReactNode {
  const { config } = useGoogleOneTapConfig();
  const [isInIframe, setIsInIframe] = useState(false);

  useEffect(() => {
    // Check if the page is embedded in an iframe
    try {
      setIsInIframe(window.self !== window.top);
    } catch {
      // If accessing window.top throws an error, we're in a cross-origin iframe
      setIsInIframe(true);
    }
  }, []);

  return (
    <>
      <Layout {...props} />
      {config?.oneTap?.isEnabled && !isInIframe && (
        <BrowserOnly>{() => <GoogleOneTapInitializer />}</BrowserOnly>
      )}
    </>
  );
}
