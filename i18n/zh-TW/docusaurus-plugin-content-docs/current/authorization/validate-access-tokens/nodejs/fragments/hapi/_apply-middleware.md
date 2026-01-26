```ts title="app.ts"
import { hapiVerifyAccessToken } from './auth-middleware.js';

server.route({
  method: 'GET',
  path: '/api/protected',
  options: {
    pre: [{ method: hapiVerifyAccessToken }],
    handler: (request, h) => {
      // 從 request.app.auth 取得驗證 (Authentication) 資訊
      return { auth: request.app.auth };
    },
  },
});
```
