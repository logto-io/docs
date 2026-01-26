```ts title="app.ts"
import { fastifyVerifyAccessToken } from './auth-middleware.js';

server.get('/api/protected', { preHandler: fastifyVerifyAccessToken }, (request, reply) => {
  // Accédez directement aux informations d'authentification depuis request.auth
  reply.send({ auth: request.auth });
});
```
