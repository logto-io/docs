```ts title="app.ts"
import { fastifyVerifyAccessToken } from './auth-middleware.js';

server.get('/api/protegido', { preHandler: fastifyVerifyAccessToken }, (request, reply) => {
  // Acesse as informações de autenticação diretamente de request.auth
  reply.send({ auth: request.auth });
});

server.get(
  '/api/protegido/detalhado',
  { preHandler: fastifyVerifyAccessToken },
  (request, reply) => {
    // Sua lógica de endpoint protegido
    reply.send({
      auth: request.auth,
      message: 'Dados protegidos acessados com sucesso',
    });
  }
);
```
