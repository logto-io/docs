```ts title="auth-middleware.ts"
import { FastifyRequest, FastifyReply } from 'fastify';
import { validateJwt, createAuthInfo } from './jwt-validator.js';

// 扩展 Fastify Request 接口以包含 auth
declare module 'fastify' {
  interface FastifyRequest {
    auth?: AuthInfo;
  }
}

export async function fastifyVerifyAccessToken(request: FastifyRequest, reply: FastifyReply) {
  try {
    const token = extractBearerTokenFromHeaders(request.headers);
    const payload = await validateJwt(token);

    // 将认证信息存储在 request 中以便通用使用
    request.auth = createAuthInfo(payload);
  } catch (err: any) {
    reply.code(err.status ?? 401).send({ error: err.message });
  }
}
```
