import { type GoogleOneTapConfig } from './google-one-tap';

export type SiteConfig = {
  customFields?: {
    isDebuggingEnabled?: boolean;
    logtoApiBaseUrl?: string;
    isDevFeatureEnabled?: boolean;
    logtoAdminConsoleUrl?: string;
    googleOneTapConfig?: GoogleOneTapConfig;
  };
};

export type GoogleOneTapCredentialResponse = {
  credential: string;
};

export type GoogleOneTapVerifyResponse = {
  credential: string;
};
