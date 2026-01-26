```ts title="auth-middleware.ts"
import { Request, Response, NextFunction } from 'express';
import { validateJwt, createAuthInfo } from './jwt-validator.js';

// Estende a interface Request do Express para incluir auth
declare global {
  namespace Express {
    interface Request {
      auth?: AuthInfo;
    }
  }
}

export async function verifyAccessToken(req: Request, res: Response, next: NextFunction) {
  try {
    const token = extractBearerTokenFromHeaders(req.headers);
    const payload = await validateJwt(token);

    // Armazena as informações de autenticação na requisição para uso genérico
    req.auth = createAuthInfo(payload);

    next();
  } catch (err: any) {
    return res.status(err.status ?? 401).json({ error: err.message });
  }
}
```
