```ts title="auth-middleware.ts"
import { FastifyRequest, FastifyReply } from 'fastify';
import { validateJwt, createAuthInfo } from './jwt-validator.js';

// ขยายอินเทอร์เฟซ Fastify Request เพื่อเพิ่ม auth
declare module 'fastify' {
  interface FastifyRequest {
    auth?: AuthInfo;
  }
}

export async function fastifyVerifyAccessToken(request: FastifyRequest, reply: FastifyReply) {
  try {
    const token = extractBearerTokenFromHeaders(request.headers);
    const payload = await validateJwt(token);

    // เก็บข้อมูลการยืนยันตัวตน (auth info) ใน request เพื่อใช้งานทั่วไป
    request.auth = createAuthInfo(payload);
  } catch (err: any) {
    reply.code(err.status ?? 401).send({ error: err.message });
  }
}
```
