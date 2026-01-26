```ts title="auth-middleware.ts"
import { Request, Response, NextFunction } from 'express';
import { validateJwt, createAuthInfo } from './jwt-validator.js';

// 擴展 Express Request 介面以包含 auth
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

    // 將驗證資訊存入 request 以便通用使用
    req.auth = createAuthInfo(payload);

    next();
  } catch (err: any) {
    return res.status(err.status ?? 401).json({ error: err.message });
  }
}
```
