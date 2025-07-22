declare global {
  interface Window {
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

type GoogleCredentialResponse = {
  credential: string;
};

type GoogleOneTapInitConfig = {
  client_id: string;
  callback: (response: GoogleCredentialResponse) => void;
  auto_select?: boolean;
  cancel_on_tap_outside?: boolean;
  itp_support?: boolean;
  use_fedcm_for_prompt?: boolean;
  context?: 'use' | 'signin' | 'signup';
};

export {};
