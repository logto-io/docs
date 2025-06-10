```ts title="app.ts"
import { fastifyVerifyAccessToken } from './auth-middleware.js';

server.get('/api/protected', { preHandler: fastifyVerifyAccessToken }, (request, reply) => {
  // 可直接從 request.auth 取得驗證 (Authentication) 資訊
  reply.send({ auth: request.auth });
});

server.get(
  '/api/protected/detailed',
  { preHandler: fastifyVerifyAccessToken },
  (request, reply) => {
    // 你的受保護端點邏輯
    reply.send({
      auth: request.auth,
      message: '成功存取受保護資料',
    });
  }
);
```
