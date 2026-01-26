```ts title="app.ts"
import { fastifyVerifyAccessToken } from './auth-middleware.js';

server.get('/api/protected', { preHandler: fastifyVerifyAccessToken }, (request, reply) => {
  // Greife direkt über request.auth auf Authentifizierungsinformationen zu
  reply.send({ auth: request.auth });
});
```
