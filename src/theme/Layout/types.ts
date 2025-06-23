export const enum AuthMessageType {
  CheckAdminToken = 'CheckAdminToken',
  AdminTokenStatus = 'AdminTokenStatus',
  AdminTokenError = 'AdminTokenError',
}

export type AuthStatusRequest = {
  type: AuthMessageType.CheckAdminToken;
  requestId: string;
};

export type AuthStatusResponse = {
  type: AuthMessageType.AdminTokenStatus | AuthMessageType.AdminTokenError;
  requestId: string;
  isAuthenticated?: boolean;
  error?: string;
};

export type AuthStatusGlobal = {
  authStatus: boolean | undefined;
  authCheckError: string | undefined;
  checkAdminTokenStatus: () => Promise<boolean>;
};

// Extend Window interface for TypeScript
declare global {
  // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
  interface Window {
    __logtoAuthStatus?: AuthStatusGlobal;
  }
}
