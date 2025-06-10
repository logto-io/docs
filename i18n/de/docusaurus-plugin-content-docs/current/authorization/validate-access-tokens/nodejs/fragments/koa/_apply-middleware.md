```ts title="app.ts"
import Router from '@koa/router';
import { koaVerifyAccessToken } from './auth-middleware.js';

const router = new Router();

router.get('/api/protected', koaVerifyAccessToken, (ctx) => {
  // Greife direkt auf Authentifizierungsinformationen aus ctx.state.auth zu
  ctx.body = { auth: ctx.state.auth };
});

router.get('/api/protected/detailed', koaVerifyAccessToken, (ctx) => {
  // Deine geschützte Endpunkt-Logik
  ctx.body = {
    auth: ctx.state.auth,
    message: 'Geschützte Daten wurden erfolgreich abgerufen',
  };
});

app.use(router.routes());
```
