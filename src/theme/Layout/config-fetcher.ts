import { cacheKey, cacheExpiryKey, cacheExpiryTime } from './constants';
import type { DebugLogger } from './debug-logger';
import { googleOneTapConfigSchema, type GoogleOneTapConfig } from './google-one-tap';

export type ConfigFetcherOptions = {
  apiBaseUrl: string;
  debugLogger: DebugLogger;
};

export async function fetchGoogleOneTapConfig({
  apiBaseUrl,
  debugLogger,
}: ConfigFetcherOptions): Promise<GoogleOneTapConfig | undefined> {
  try {
    const cachedConfig = localStorage.getItem(cacheKey);
    const cachedExpiry = localStorage.getItem(cacheExpiryKey);

    if (cachedConfig && cachedExpiry && Number(cachedExpiry) > Date.now()) {
      try {
        const parsedConfig = googleOneTapConfigSchema.parse(JSON.parse(cachedConfig));
        return parsedConfig;
      } catch (parseError) {
        debugLogger.error('Cached config validation failed:', parseError);
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
    debugLogger.error('Error fetching or validating Google One Tap config:', error);
    return undefined;
  }
}
