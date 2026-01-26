```ts title="auth-middleware.ts"
import { Context, Next } from 'koa';
import { validateJwt, createAuthInfo } from './jwt-validator.js';

// 액세스 토큰(Access token) 검증 미들웨어
export async function koaVerifyAccessToken(ctx: Context, next: Next) {
  try {
    const token = extractBearerTokenFromHeaders(ctx.request.headers);
    const payload = await validateJwt(token);

    // 인증 정보(auth info)를 state에 저장하여 범용적으로 사용
    ctx.state.auth = createAuthInfo(payload);

    await next();
  } catch (err: any) {
    ctx.status = err.status ?? 401;
    ctx.body = { error: err.message };
  }
}
```
