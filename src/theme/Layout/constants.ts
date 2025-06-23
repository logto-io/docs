export const cacheKey = '_logto_google_one_tap_config';
export const cacheExpiryKey = '_logto_google_one_tap_config_expiry';
export const cacheExpiryTime = 1 * 60 * 60 * 1000; // 1 hour

export const defaultApiBaseProdUrl = 'https://auth.logto.io';
export const defaultApiBaseDevUrl = 'https://auth.logto.dev';

export const authStatusPollInterval = 30_000; // 30 seconds
export const iframeLoadDelay = 5000; // 5 seconds
export const requestTimeout = 10_000; // 10 seconds
export const debugIframeDelay = 5000; // 5 seconds for success
export const debugIframeTimeoutDelay = 10_000; // 10 seconds for timeout
