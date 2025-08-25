```ts title="app.ts"
import { hapiVerifyAccessToken } from './auth-middleware.js';

server.route({
  method: 'GET',
  path: '/api/protected',
  options: {
    pre: [{ method: hapiVerifyAccessToken }],
    handler: (request, h) => {
      // เข้าถึงข้อมูลการยืนยันตัวตนจาก request.app.auth
      return { auth: request.app.auth };
    },
  },
});
```
