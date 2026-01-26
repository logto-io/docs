```ts title="auth-middleware.ts"
import { Request, Response, NextFunction } from 'express';
import { validateJwt, createAuthInfo } from './jwt-validator.js';

// ขยายอินเทอร์เฟซ Request ของ Express เพื่อเพิ่ม auth
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

    // เก็บข้อมูล auth ใน request เพื่อใช้งานทั่วไป
    req.auth = createAuthInfo(payload);

    next();
  } catch (err: any) {
    return res.status(err.status ?? 401).json({ error: err.message });
  }
}
```
