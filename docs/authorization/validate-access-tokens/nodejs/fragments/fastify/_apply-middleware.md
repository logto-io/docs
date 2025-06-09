```ts title="app.ts"
import { fastifyVerifyAccessToken } from './auth-middleware.js';

fastify.get('/api/protected', { preHandler: fastifyVerifyAccessToken }, (request, reply) => {
  // Access auth information directly from request.auth
  reply.send({ auth: request.auth });
});

fastify.get(
  '/api/protected/detailed',
  { preHandler: fastifyVerifyAccessToken },
  (request, reply) => {
    // Your protected endpoint logic
    reply.send({
      auth: request.auth,
      message: 'Protected data accessed successfully',
    });
  }
);
```
