```ts title="app.ts"
import { fastifyVerifyAccessToken } from './auth-middleware.js';

server.get('/api/protected', { preHandler: fastifyVerifyAccessToken }, (request, reply) => {
  // 認証情報へは request.auth から直接アクセスできます
  reply.send({ auth: request.auth });
});

server.get(
  '/api/protected/detailed',
  { preHandler: fastifyVerifyAccessToken },
  (request, reply) => {
    // 保護されたエンドポイントのロジック
    reply.send({
      auth: request.auth,
      message: '保護されたデータへのアクセスに成功しました',
    });
  }
);
```
