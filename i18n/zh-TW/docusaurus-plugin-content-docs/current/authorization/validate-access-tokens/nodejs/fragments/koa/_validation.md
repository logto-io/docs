```ts title="auth-middleware.ts"
import { Context, Next } from 'koa';
import { validateJwt, createAuthInfo } from './jwt-validator.js';

// Koa 中介軟體：驗證存取權杖 (Access token)
export async function koaVerifyAccessToken(ctx: Context, next: Next) {
  try {
    const token = extractBearerTokenFromHeaders(ctx.request.headers);
    const payload = await validateJwt(token);

    // 將驗證資訊存入 state，方便後續通用存取
    ctx.state.auth = createAuthInfo(payload);

    await next();
  } catch (err: any) {
    ctx.status = err.status ?? 401;
    ctx.body = { error: err.message };
  }
}
```
