```ts title="auth-middleware.ts"
import { Request, Response, NextFunction } from 'express';
import { validateJwt, createAuthInfo } from './jwt-validator.js';

// 扩展 Express Request 接口以包含 auth
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

    // 将认证信息存储在 request 中以便通用使用
    req.auth = createAuthInfo(payload);

    next();
  } catch (err: any) {
    return res.status(err.status ?? 401).json({ error: err.message });
  }
}
```
