```ts title="auth-middleware.ts"
import { Request, ResponseToolkit } from '@hapi/hapi';
import { validateJwt, createAuthInfo } from './jwt-validator.js';

export async function hapiVerifyAccessToken(request: Request, h: ResponseToolkit) {
  try {
    const token = extractBearerTokenFromHeaders(request.headers);
    const payload = await validateJwt(token);

    // Stocker les informations d'authentification dans request.app pour une utilisation générique
    request.app.auth = createAuthInfo(payload);

    return h.continue;
  } catch (err: any) {
    return h
      .response({ error: err.message })
      .code(err.status ?? 401)
      .takeover();
  }
}
```
