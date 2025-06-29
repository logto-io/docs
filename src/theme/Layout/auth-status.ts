import type { SiteConfig } from './types';

export function createAuthStatusChecker(
  siteConfig: SiteConfig,
  onAuthStatus: (status: boolean) => void
): () => void {
  const logtoAdminConsoleUrl = siteConfig.customFields?.logtoAdminConsoleUrl;

  if (typeof logtoAdminConsoleUrl !== 'string') {
    console.warn('logtoAdminConsoleUrl not configured');
    return () => {
      // Noop
    };
  }

  // Create iframe for auth status check
  const iframe = document.createElement('iframe');
  // Set iframe properties using setAttribute and style properties
  iframe.setAttribute(
    'src',
    `${logtoAdminConsoleUrl}/auth-status${siteConfig.customFields?.isDebuggingEnabled ? '?debug=true' : ''}`
  );
  iframe.setAttribute(
    'style',
    `
    display: ${siteConfig.customFields?.isIframeVisible ? 'block' : 'none'};
    width: 1px;
    height: 1px;
    position: absolute;
    top: -9999px;
    left: -9999px;
  `
      .replaceAll(/\s+/g, ' ')
      .trim()
  );

  // Listen for auth status response
  const handleMessage = (event: MessageEvent) => {
    if (event.origin !== new URL(logtoAdminConsoleUrl).origin) {
      return;
    }

    if (event.data?.type === 'auth-status') {
      onAuthStatus(Boolean(event.data.isAuthenticated));
      if (siteConfig.customFields?.isDebuggingEnabled) {
        console.log('Auth status received:', event.data.isAuthenticated);
      }
    }
  };

  window.addEventListener('message', handleMessage);
  document.body.append(iframe);

  // Return cleanup function
  return () => {
    window.removeEventListener('message', handleMessage);
    if (iframe.parentNode) {
      iframe.remove();
    }
  };
}
