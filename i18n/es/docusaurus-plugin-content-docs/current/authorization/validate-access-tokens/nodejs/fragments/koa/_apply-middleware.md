```ts title="app.ts"
import Router from '@koa/router';
import { koaVerifyAccessToken } from './auth-middleware.js';

const router = new Router();

router.get('/api/protected', koaVerifyAccessToken, (ctx) => {
  // Accede a la información de autenticación directamente desde ctx.state.auth
  ctx.body = { auth: ctx.state.auth };
});

app.use(router.routes());
```
