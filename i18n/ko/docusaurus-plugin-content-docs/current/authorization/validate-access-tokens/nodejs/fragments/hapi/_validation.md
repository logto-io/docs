```ts title="auth-middleware.ts"
import { Request, ResponseToolkit } from '@hapi/hapi';
import { validateJwt, createAuthInfo } from './jwt-validator.js';

export async function hapiVerifyAccessToken(request: Request, h: ResponseToolkit) {
  try {
    const token = extractBearerTokenFromHeaders(request.headers);
    const payload = await validateJwt(token);

    // 인증 정보(auth info)를 request.app에 저장하여 범용적으로 사용
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
