```ts title="app.ts"
import Router from '@koa/router';
import { koaVerifyAccessToken } from './auth-middleware.js';

const router = new Router();

router.get('/api/protected', koaVerifyAccessToken, (ctx) => {
  // เข้าถึงข้อมูลการยืนยันตัวตน (auth) ได้โดยตรงจาก ctx.state.auth
  ctx.body = { auth: ctx.state.auth };
});

app.use(router.routes());
```
