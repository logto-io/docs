```ts title="app.ts"
import Router from '@koa/router';
import { koaVerifyAccessToken } from './auth-middleware.js';

const router = new Router();

router.get('/api/protected', koaVerifyAccessToken, (ctx) => {
  // Access auth information directly from ctx.state.auth
  ctx.body = { auth: ctx.state.auth };
});

router.get('/api/protected/detailed', koaVerifyAccessToken, (ctx) => {
  // Your protected endpoint logic
  ctx.body = {
    auth: ctx.state.auth,
    message: 'Protected data accessed successfully',
  };
});

app.use(router.routes());
```
