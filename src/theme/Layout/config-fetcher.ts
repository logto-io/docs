import type { Optional } from '@silverhand/essentials';

import { cacheKey, cacheExpiryKey, cacheExpiryTime } from './constants';
import { googleOneTapConfigSchema, type GoogleOneTapConfig } from './types';

export async function fetchGoogleOneTapConfig(
  apiBaseUrl: string
): Promise<Optional<GoogleOneTapConfig>> {
  try {
    const cachedConfig = localStorage.getItem(cacheKey);
    const cachedExpiry = localStorage.getItem(cacheExpiryKey);

    if (cachedConfig && cachedExpiry && Number.parseInt(cachedExpiry, 10) > Date.now()) {
      try {
        const parsedConfig = googleOneTapConfigSchema.parse(JSON.parse(cachedConfig));
        return parsedConfig;
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

    localStorage.setItem(cacheKey, JSON.stringify(validatedConfig));
    localStorage.setItem(cacheExpiryKey, String(Date.now() + cacheExpiryTime));

    return validatedConfig;
  } catch (error) {
    console.error('Error fetching or validating Google One Tap config:', error);
    return undefined;
  }
}
