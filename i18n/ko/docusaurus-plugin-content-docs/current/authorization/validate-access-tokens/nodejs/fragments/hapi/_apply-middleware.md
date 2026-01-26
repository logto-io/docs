```ts title="app.ts"
import { hapiVerifyAccessToken } from './auth-middleware.js';

server.route({
  method: 'GET',
  path: '/api/protected',
  options: {
    pre: [{ method: hapiVerifyAccessToken }],
    handler: (request, h) => {
      // request.app.auth에서 인증 (Authentication) 정보를 확인하세요
      return { auth: request.app.auth };
    },
  },
});
```
