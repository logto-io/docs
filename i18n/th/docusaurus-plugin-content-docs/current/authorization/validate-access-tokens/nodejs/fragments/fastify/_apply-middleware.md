```ts title="app.ts"
import { fastifyVerifyAccessToken } from './auth-middleware.js';

server.get('/api/protected', { preHandler: fastifyVerifyAccessToken }, (request, reply) => {
  // เข้าถึงข้อมูลการยืนยันตัวตน (auth) ได้โดยตรงจาก request.auth
  reply.send({ auth: request.auth });
});
```
