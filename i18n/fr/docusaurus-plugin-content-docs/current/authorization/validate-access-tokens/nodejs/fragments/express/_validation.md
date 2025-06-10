```ts title="auth-middleware.ts"
import { Request, Response, NextFunction } from 'express';
import { validateJwt, createAuthInfo } from './jwt-validator.js';

// Étendre l'interface Request d'Express pour inclure auth
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

    // Stocker les informations d'authentification dans la requête pour un usage générique
    req.auth = createAuthInfo(payload);

    next();
  } catch (err: any) {
    return res.status(err.status ?? 401).json({ error: err.message });
  }
}
```
