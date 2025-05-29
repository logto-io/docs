export enum AuthMessageType {
  CHECK_ADMIN_TOKEN = 'CHECK_ADMIN_TOKEN',
  ADMIN_TOKEN_STATUS = 'ADMIN_TOKEN_STATUS',
  ADMIN_TOKEN_ERROR = 'ADMIN_TOKEN_ERROR',
}

export type AuthStatusRequest = {
  type: AuthMessageType.CHECK_ADMIN_TOKEN;
  requestId: string;
};

export type AuthStatusResponse = {
  type: AuthMessageType.ADMIN_TOKEN_STATUS | AuthMessageType.ADMIN_TOKEN_ERROR;
  requestId: string;
  hasToken?: boolean;
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
