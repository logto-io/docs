```ts title="auth-middleware.ts"
import { FastifyRequest, FastifyReply } from 'fastify';
import { validateJwt, createAuthInfo } from './jwt-validator.js';

// Extiende la interfaz Fastify Request para incluir auth
declare module 'fastify' {
  interface FastifyRequest {
    auth?: AuthInfo;
  }
}

export async function fastifyVerifyAccessToken(request: FastifyRequest, reply: FastifyReply) {
  try {
    const token = extractBearerTokenFromHeaders(request.headers);
    const payload = await validateJwt(token);

    // Almacena la información de autenticación en la solicitud para uso genérico
    request.auth = createAuthInfo(payload);
  } catch (err: any) {
    reply.code(err.status ?? 401).send({ error: err.message });
  }
}
```
