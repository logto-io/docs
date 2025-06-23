declare global {
  interface Window {
    __logtoAuthStatus?: {
      authStatus?: boolean;
      authCheckError?: string;
      checkAdminTokenStatus: () => Promise<boolean>;
    };
  }
}

export {};
