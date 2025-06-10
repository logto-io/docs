```ts title="app.ts"
import { fastifyVerifyAccessToken } from './auth-middleware.js';

server.get('/api/protected', { preHandler: fastifyVerifyAccessToken }, (request, reply) => {
  // 直接从 request.auth 获取认证 (Authentication) 信息
  reply.send({ auth: request.auth });
});

server.get(
  '/api/protected/detailed',
  { preHandler: fastifyVerifyAccessToken },
  (request, reply) => {
    // 你的受保护接口逻辑
    reply.send({
      auth: request.auth,
      message: '受保护数据访问成功',
    });
  }
);
```
