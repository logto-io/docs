// Cache keys for Google One Tap config
export const cacheKey = '_logto_google_one_tap_config';
export const cacheExpiryKey = '_logto_google_one_tap_config_expiry';
export const cacheExpiryTime = 1 * 60 * 60 * 1000; // 1 hour

// Default API base URLs
export const defaultApiBaseProdUrl = 'https://auth.logto.io';
export const defaultApiBaseDevUrl = 'https://auth.logto.dev';

// Auth status check settings
export const authCheckDelay = 1000; // 1 second delay to not block initial render
