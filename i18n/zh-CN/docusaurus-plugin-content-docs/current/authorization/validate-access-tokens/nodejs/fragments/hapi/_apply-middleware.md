```ts title="app.ts"
import { hapiVerifyAccessToken } from './auth-middleware.js';

server.route({
  method: 'GET',
  path: '/api/protected',
  options: {
    pre: [{ method: hapiVerifyAccessToken }],
    handler: (request, h) => {
      // 从 request.app.auth 获取认证 (Authentication) 信息
      return { auth: request.app.auth };
    },
  },
});
```
