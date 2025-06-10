```ts title="auth-middleware.ts"
import { FastifyRequest, FastifyReply } from 'fastify';
import { validateJwt, createAuthInfo } from './jwt-validator.js';

// Fastify Request インターフェースを拡張して auth を追加
declare module 'fastify' {
  interface FastifyRequest {
    auth?: AuthInfo;
  }
}

export async function fastifyVerifyAccessToken(request: FastifyRequest, reply: FastifyReply) {
  try {
    const token = extractBearerTokenFromHeaders(request.headers);
    const payload = await validateJwt(token);

    // 認証情報をリクエストに保存し、汎用的に利用できるようにする
    request.auth = createAuthInfo(payload);
  } catch (err: any) {
    reply.code(err.status ?? 401).send({ error: err.message });
  }
}
```
