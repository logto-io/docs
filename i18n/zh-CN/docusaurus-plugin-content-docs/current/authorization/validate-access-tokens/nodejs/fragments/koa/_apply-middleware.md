```ts title="app.ts"
import Router from '@koa/router';
import { koaVerifyAccessToken } from './auth-middleware.js';

const router = new Router();

router.get('/api/protected', koaVerifyAccessToken, (ctx) => {
  // 直接从 ctx.state.auth 获取认证 (Authentication) 信息
  ctx.body = { auth: ctx.state.auth };
});

router.get('/api/protected/detailed', koaVerifyAccessToken, (ctx) => {
  // 你的受保护接口逻辑
  ctx.body = {
    auth: ctx.state.auth,
    message: '受保护数据访问成功',
  };
});

app.use(router.routes());
```
