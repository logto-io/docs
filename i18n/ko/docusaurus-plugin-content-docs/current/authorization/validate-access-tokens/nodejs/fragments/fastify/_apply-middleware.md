```ts title="app.ts"
import { fastifyVerifyAccessToken } from './auth-middleware.js';

server.get('/api/protected', { preHandler: fastifyVerifyAccessToken }, (request, reply) => {
  // request.auth에서 인증 (Authentication) 정보를 직접 접근하세요
  reply.send({ auth: request.auth });
});
```
