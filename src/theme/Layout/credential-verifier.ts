import type { DebugLogger } from './debug-logger';
import type { GoogleOneTapCredentialResponse, GoogleOneTapVerifyResponse } from './types';

export type CredentialVerifierOptions = {
  apiBaseUrl: string;
  debugLogger: DebugLogger;
};

export async function verifyGoogleOneTapCredential(
  { apiBaseUrl, debugLogger }: CredentialVerifierOptions,
  response: GoogleOneTapCredentialResponse
): Promise<GoogleOneTapVerifyResponse | undefined> {
  debugLogger.log('Google One Tap credential response received:', response);

  try {
    const verifyResponse = await fetch(`${apiBaseUrl}/api/google-one-tap/verify`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ idToken: response.credential }),
    });

    if (!verifyResponse.ok) {
      throw new Error(`Verification failed: ${verifyResponse.status}`);
    }

    const data = await verifyResponse.json();
    debugLogger.log('Google One Tap verification successful:', data);

    // eslint-disable-next-line no-restricted-syntax
    return data as GoogleOneTapVerifyResponse;
  } catch (error) {
    debugLogger.error('Google One Tap verification failed:', error);
    return undefined;
  }
}
