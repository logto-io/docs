```ts title="app.ts"
import Router from '@koa/router';
import { koaVerifyAccessToken } from './auth-middleware.js';

const router = new Router();

router.get('/api/protected', koaVerifyAccessToken, (ctx) => {
  // Accédez directement aux informations d'authentification depuis ctx.state.auth
  ctx.body = { auth: ctx.state.auth };
});

router.get('/api/protected/detailed', koaVerifyAccessToken, (ctx) => {
  // Votre logique de point de terminaison protégé
  ctx.body = {
    auth: ctx.state.auth,
    message: 'Données protégées accessibles avec succès',
  };
});

app.use(router.routes());
```
