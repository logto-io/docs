```ts title="auth-middleware.ts"
import { FastifyRequest, FastifyReply } from 'fastify';
import { validateJwt, createAuthInfo } from './jwt-validator.js';

// Étendre l'interface Fastify Request pour inclure auth
declare module 'fastify' {
  interface FastifyRequest {
    auth?: AuthInfo;
  }
}

export async function fastifyVerifyAccessToken(request: FastifyRequest, reply: FastifyReply) {
  try {
    const token = extractBearerTokenFromHeaders(request.headers);
    const payload = await validateJwt(token);

    // Stocker les informations d'authentification dans la requête pour un usage générique
    request.auth = createAuthInfo(payload);
  } catch (err: any) {
    reply.code(err.status ?? 401).send({ error: err.message });
  }
}
```
