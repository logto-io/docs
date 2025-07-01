export const cacheKey = '_logto_google_one_tap_config';
export const cacheExpiryKey = '_logto_google_one_tap_config_expiry';
export const cacheExpiryTime = 1 * 60 * 60 * 1000; // 1 hour

export const defaultApiBaseProdUrl = 'https://auth.logto.io';
export const defaultApiBaseDevUrl = 'https://auth.logto.dev';

export const authStatusMaxRetries = 0; // No retry attempts - fail fast
export const authStatusRetryDelay = 2000; // 2 seconds between retries
export const iframeLoadDelay = 3000; // Increased for development environment React SPA loading
export const requestTimeout = 10_000; // 10 seconds
export const debugIframeDelay = 5000; // 5 seconds for success
export const debugIframeTimeoutDelay = 10_000; // 10 seconds for timeout

// Additional timeout constants
export const configLoadDelay = 100; // In ms - delay before loading config
export const initialAuthCheckDelay = 1000; // In ms - delay before first auth check
export const authCheckFallbackTimeout = 5000; // In ms - fallback timeout for auth check
