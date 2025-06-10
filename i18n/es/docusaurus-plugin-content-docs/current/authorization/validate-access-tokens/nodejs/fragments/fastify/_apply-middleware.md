```ts title="app.ts"
import { fastifyVerifyAccessToken } from './auth-middleware.js';

server.get('/api/protected', { preHandler: fastifyVerifyAccessToken }, (request, reply) => {
  // Accede a la información de autenticación directamente desde request.auth
  reply.send({ auth: request.auth });
});

server.get(
  '/api/protected/detailed',
  { preHandler: fastifyVerifyAccessToken },
  (request, reply) => {
    // Tu lógica del endpoint protegido
    reply.send({
      auth: request.auth,
      message: 'Datos protegidos accedidos correctamente',
    });
  }
);
```
