```ts title="app.ts"
import { fastifyVerifyAccessToken } from './auth-middleware.js';

server.get('/api/protected', { preHandler: fastifyVerifyAccessToken }, (request, reply) => {
  // 認証情報 (auth information) を request.auth から直接取得
  reply.send({ auth: request.auth });
});
```
