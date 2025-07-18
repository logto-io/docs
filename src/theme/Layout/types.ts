export const enum AuthMessageType {
  CheckAdminToken = 'CheckAdminToken',
  AdminTokenStatus = 'AdminTokenStatus',
  AdminTokenError = 'AdminTokenError',
  CheckStorageAccess = 'CheckStorageAccess',
  RequestStorageAccess = 'RequestStorageAccess',
  StorageAccessStatus = 'StorageAccessStatus',
  StorageAccessError = 'StorageAccessError',
}

export type AuthStatusRequest = {
  type: AuthMessageType.CheckAdminToken;
  requestId: string;
};

export type StorageAccessRequest = {
  type: AuthMessageType.CheckStorageAccess | AuthMessageType.RequestStorageAccess;
  requestId: string;
};

export type AuthStatusResponse = {
  type: AuthMessageType.AdminTokenStatus | AuthMessageType.AdminTokenError;
  requestId: string;
  isAuthenticated?: boolean;
  error?: string;
};

export type StorageAccessResponse = {
  type: AuthMessageType.StorageAccessStatus | AuthMessageType.StorageAccessError;
  requestId: string;
  hasStorageAccess?: boolean;
  storageAccessGranted?: boolean;
  error?: string;
};

export type SiteConfig = {
  customFields?: {
    isDebuggingEnabled?: boolean;
    logtoApiBaseUrl?: string;
    isDevFeatureEnabled?: boolean;
    logtoAdminConsoleUrl?: string;
    enableAuthStatusCheck?: boolean;
    isIframeVisible?: boolean;
  };
};

export type GoogleOneTapCredentialResponse = {
  credential: string;
};

export type GoogleOneTapVerifyResponse = {
  credential: string;
};

export type AuthStatusGlobal = {
  authStatus: boolean | undefined;
  authCheckError: string | undefined;
  checkAdminTokenStatus: () => Promise<boolean>;
  checkStorageAccess: () => Promise<boolean>;
  requestStorageAccess: () => Promise<boolean>;
};

// Extend Window interface for TypeScript
declare global {
  // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
  interface Window {
    __logtoAuthStatus?: AuthStatusGlobal;
  }
}
