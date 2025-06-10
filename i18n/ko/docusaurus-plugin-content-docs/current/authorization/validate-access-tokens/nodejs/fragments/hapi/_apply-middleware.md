```ts title="app.ts"
import { hapiVerifyAccessToken } from './auth-middleware.js';

server.route({
  method: 'GET',
  path: '/api/protected',
  options: {
    pre: [{ method: hapiVerifyAccessToken }],
    handler: (request, h) => {
      // request.app.auth에서 인증 (Authentication) 정보를 가져옵니다
      return { auth: request.app.auth };
    },
  },
});

server.route({
  method: 'GET',
  path: '/api/protected/detailed',
  options: {
    pre: [{ method: hapiVerifyAccessToken }],
    handler: (request, h) => {
      // 보호된 엔드포인트 로직을 작성하세요
      return {
        auth: request.app.auth,
        message: '보호된 데이터에 성공적으로 접근했습니다',
      };
    },
  },
});
```
