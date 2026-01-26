```ts title="app.ts"
import { fastifyVerifyAccessToken } from './auth-middleware.js';

server.get('/api/protected', { preHandler: fastifyVerifyAccessToken }, (request, reply) => {
  // Acesse as informações de autenticação diretamente de request.auth
  reply.send({ auth: request.auth });
});
```
