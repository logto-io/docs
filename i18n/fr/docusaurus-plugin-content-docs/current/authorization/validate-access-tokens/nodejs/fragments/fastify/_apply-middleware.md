```ts title="app.ts"
import { fastifyVerifyAccessToken } from './auth-middleware.js';

server.get('/api/protected', { preHandler: fastifyVerifyAccessToken }, (request, reply) => {
  // Accédez directement aux informations d'authentification depuis request.auth
  reply.send({ auth: request.auth });
});

server.get(
  '/api/protected/detailed',
  { preHandler: fastifyVerifyAccessToken },
  (request, reply) => {
    // Votre logique de point de terminaison protégé
    reply.send({
      auth: request.auth,
      message: 'Données protégées accessibles avec succès',
    });
  }
);
```
