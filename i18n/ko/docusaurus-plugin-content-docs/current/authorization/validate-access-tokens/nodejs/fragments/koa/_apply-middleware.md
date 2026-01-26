```ts title="app.ts"
import Router from '@koa/router';
import { koaVerifyAccessToken } from './auth-middleware.js';

const router = new Router();

router.get('/api/protected', koaVerifyAccessToken, (ctx) => {
  // ctx.state.auth에서 인증 (Authentication) 정보를 직접 접근하세요
  ctx.body = { auth: ctx.state.auth };
});

app.use(router.routes());
```
