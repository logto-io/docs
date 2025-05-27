import type { WrapperProps } from '@docusaurus/types';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import type LayoutType from '@theme/Layout';
import Layout from '@theme-original/Layout';
import type { ReactNode } from 'react';
import { useEffect, useState } from 'react';
import { z } from 'zod';

type Props = WrapperProps<typeof LayoutType>;

const oneTapSchema = z
  .object({
    isEnabled: z.boolean().optional(),
    autoSelect: z.boolean().optional(),
    closeOnTapOutside: z.boolean().optional(),
    itpSupport: z.boolean().optional(),
  })
  .optional();

const googleOneTapConfigSchema = z.object({
  clientId: z.string(),
  oneTap: oneTapSchema,
});

type GoogleOneTapConfig = z.infer<typeof googleOneTapConfigSchema>;

const CACHE_KEY = '_logto_google_one_tap_config';
const CACHE_EXPIRY_KEY = '_logto_google_one_tap_config_expiry';
const CACHE_EXPIRY_TIME = 1 * 60 * 60 * 1000; // 1 hour

// Default API base URL
const DEFAULT_API_BASE_PROD_URL = 'https://auth.logto.io';
const DEFAULT_API_BASE_DEV_URL = 'https://auth.logto.dev';

export default function LayoutWrapper(props: Props): ReactNode {
  const [config, setConfig] = useState<GoogleOneTapConfig | undefined>(undefined);
  const { siteConfig } = useDocusaurusContext();

  // Get the API base URL from customFields, or use the default value if it doesn't exist
  const logtoApiBaseUrl = siteConfig.customFields?.logtoApiBaseUrl;
  const apiBaseUrl =
    typeof logtoApiBaseUrl === 'string'
      ? logtoApiBaseUrl
      : siteConfig.customFields?.isDevFeatureEnabled
        ? DEFAULT_API_BASE_DEV_URL
        : DEFAULT_API_BASE_PROD_URL;

  useEffect(() => {
    const fetchConfig = async () => {
      try {
        const cachedConfig = localStorage.getItem(CACHE_KEY);
        const cachedExpiry = localStorage.getItem(CACHE_EXPIRY_KEY);

        if (cachedConfig && cachedExpiry && Number(cachedExpiry) > Date.now()) {
          try {
            const parsedConfig = googleOneTapConfigSchema.parse(JSON.parse(cachedConfig));
            setConfig(parsedConfig);
            return;
          } catch (parseError) {
            console.error('Cached config validation failed:', parseError);
          }
        }

        const response = await fetch(`${apiBaseUrl}/api/google-one-tap/config`, {
          headers: {
            Origin: window.location.origin,
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch Google One Tap config');
        }

        const data = await response.json();

        const validatedConfig = googleOneTapConfigSchema.parse(data);

        localStorage.setItem(CACHE_KEY, JSON.stringify(validatedConfig));
        localStorage.setItem(CACHE_EXPIRY_KEY, String(Date.now() + CACHE_EXPIRY_TIME));

        setConfig(validatedConfig);
      } catch (error) {
        console.error('Error fetching or validating Google One Tap config:', error);
      }
    };

    void fetchConfig();
  }, [apiBaseUrl]);

  return (
    <>
      {config && config.oneTap?.isEnabled && (
        <div
          data-itp_support={Boolean(config.oneTap.itpSupport)}
          data-auto_select={Boolean(config.oneTap.autoSelect)}
          data-cancel_on_tap_outside={Boolean(config.oneTap.closeOnTapOutside)}
          id="g_id_onload"
          data-client_id={config.clientId}
          // TODO: implement handleCredentialResponse page
          data-callback="handleCredentialResponse"
          data-context="signin"
        ></div>
      )}
      <Layout {...props} />
    </>
  );
}
