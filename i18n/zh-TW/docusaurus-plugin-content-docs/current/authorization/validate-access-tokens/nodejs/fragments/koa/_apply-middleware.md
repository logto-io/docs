```ts title="app.ts"
import Router from '@koa/router';
import { koaVerifyAccessToken } from './auth-middleware.js';

const router = new Router();

router.get('/api/protected', koaVerifyAccessToken, (ctx) => {
  // 可直接從 ctx.state.auth 取得驗證 (Authentication) 資訊
  ctx.body = { auth: ctx.state.auth };
});

app.use(router.routes());
```
