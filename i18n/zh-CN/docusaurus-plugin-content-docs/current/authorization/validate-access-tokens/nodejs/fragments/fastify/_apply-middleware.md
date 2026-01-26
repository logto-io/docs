```ts title="app.ts"
import { fastifyVerifyAccessToken } from './auth-middleware.js';

server.get('/api/protected', { preHandler: fastifyVerifyAccessToken }, (request, reply) => {
  // 直接从 request.auth 获取认证 (Authentication) 信息
  reply.send({ auth: request.auth });
});
```
