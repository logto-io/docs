```ts title="app.ts"
import Router from '@koa/router';
import { koaVerifyAccessToken } from './auth-middleware.js';

const router = new Router();

router.get('/api/protected', koaVerifyAccessToken, (ctx) => {
  // 可直接從 ctx.state.auth 取得驗證 (Authentication) 資訊
  ctx.body = { auth: ctx.state.auth };
});

router.get('/api/protected/detailed', koaVerifyAccessToken, (ctx) => {
  // 你的受保護端點邏輯
  ctx.body = {
    auth: ctx.state.auth,
    message: '成功存取受保護資料',
  };
});

app.use(router.routes());
```
