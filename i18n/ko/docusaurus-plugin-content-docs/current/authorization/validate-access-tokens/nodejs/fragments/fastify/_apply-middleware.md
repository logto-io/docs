```ts title="app.ts"
import { fastifyVerifyAccessToken } from './auth-middleware.js';

server.get('/api/protected', { preHandler: fastifyVerifyAccessToken }, (request, reply) => {
  // 인증 (Authentication) 정보를 request.auth에서 직접 접근할 수 있습니다
  reply.send({ auth: request.auth });
});

server.get(
  '/api/protected/detailed',
  { preHandler: fastifyVerifyAccessToken },
  (request, reply) => {
    // 보호된 엔드포인트 로직
    reply.send({
      auth: request.auth,
      message: '보호된 데이터에 성공적으로 접근했습니다',
    });
  }
);
```
