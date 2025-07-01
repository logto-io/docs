declare global {
  interface Window {
    __logtoAuthStatus?: {
      authStatus?: boolean;
      authCheckError?: string;
      checkAdminTokenStatus: () => Promise<boolean>;
    };
    handleCredentialResponse?: (response: GoogleCredentialResponse) => void;
    google?: {
      accounts: {
        id: {
          initialize: (config: GoogleOneTapInitConfig) => void;
          prompt: () => void;
        };
      };
    };
  }
}

interface GoogleCredentialResponse {
  credential: string;
}

interface GoogleOneTapInitConfig {
  client_id: string;
  callback: (response: GoogleCredentialResponse) => void;
  auto_select?: boolean;
  cancel_on_tap_outside?: boolean;
  itp_support?: boolean;
}

export {};
