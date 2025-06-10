```ts title="auth-middleware.ts"
import { Context, Next } from 'koa';
import { validateJwt, createAuthInfo } from './jwt-validator.js';

export async function koaVerifyAccessToken(ctx: Context, next: Next) {
  try {
    const token = extractBearerTokenFromHeaders(ctx.request.headers);
    const payload = await validateJwt(token);

    // 認証情報を state に保存し、汎用的に利用できるようにする
    ctx.state.auth = createAuthInfo(payload);

    await next();
  } catch (err: any) {
    ctx.status = err.status ?? 401;
    ctx.body = { error: err.message };
  }
}
```
