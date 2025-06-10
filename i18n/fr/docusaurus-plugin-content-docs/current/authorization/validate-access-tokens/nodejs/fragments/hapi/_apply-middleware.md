```ts title="app.ts"
import { hapiVerifyAccessToken } from './auth-middleware.js';

server.route({
  method: 'GET',
  path: '/api/protected',
  options: {
    pre: [{ method: hapiVerifyAccessToken }],
    handler: (request, h) => {
      // Accéder aux informations d'authentification depuis request.app.auth
      return { auth: request.app.auth };
    },
  },
});

server.route({
  method: 'GET',
  path: '/api/protected/detailed',
  options: {
    pre: [{ method: hapiVerifyAccessToken }],
    handler: (request, h) => {
      // Votre logique de point de terminaison protégé
      return {
        auth: request.app.auth,
        message: 'Données protégées accessibles avec succès',
      };
    },
  },
});
```
