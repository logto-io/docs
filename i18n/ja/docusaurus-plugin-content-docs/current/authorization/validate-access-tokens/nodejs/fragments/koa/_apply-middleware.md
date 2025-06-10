```ts title="app.ts"
import Router from '@koa/router';
import { koaVerifyAccessToken } from './auth-middleware.js';

const router = new Router();

router.get('/api/protected', koaVerifyAccessToken, (ctx) => {
  // 認証情報 (auth) を ctx.state.auth から直接取得
  ctx.body = { auth: ctx.state.auth };
});

app.use(router.routes());
```
