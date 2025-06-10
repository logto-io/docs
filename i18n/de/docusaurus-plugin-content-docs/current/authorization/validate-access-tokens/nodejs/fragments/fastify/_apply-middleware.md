```ts title="app.ts"
import { fastifyVerifyAccessToken } from './auth-middleware.js';

server.get('/api/protected', { preHandler: fastifyVerifyAccessToken }, (request, reply) => {
  // Greife direkt auf Authentifizierungsinformationen über request.auth zu
  reply.send({ auth: request.auth });
});

server.get(
  '/api/protected/detailed',
  { preHandler: fastifyVerifyAccessToken },
  (request, reply) => {
    // Deine Logik für den geschützten Endpunkt
    reply.send({
      auth: request.auth,
      message: 'Geschützte Daten wurden erfolgreich abgerufen',
    });
  }
);
```
