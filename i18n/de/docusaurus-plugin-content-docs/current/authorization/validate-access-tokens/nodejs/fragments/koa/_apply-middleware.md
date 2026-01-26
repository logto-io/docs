```ts title="app.ts"
import Router from '@koa/router';
import { koaVerifyAccessToken } from './auth-middleware.js';

const router = new Router();

router.get('/api/protected', koaVerifyAccessToken, (ctx) => {
  // Greife direkt auf Authentifizierungsinformationen aus ctx.state.auth zu
  ctx.body = { auth: ctx.state.auth };
});

app.use(router.routes());
```
