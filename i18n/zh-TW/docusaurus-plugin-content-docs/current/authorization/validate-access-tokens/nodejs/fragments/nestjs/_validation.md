```ts title="access-token.guard.ts"
import {
  Injectable,
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
  ForbiddenException,
} from '@nestjs/common';
import { validateJwt, createAuthInfo } from './jwt-validator.js';

@Injectable()
export class AccessTokenGuard implements CanActivate {
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const req = context.switchToHttp().getRequest();

    try {
      const token = extractBearerTokenFromHeaders(req.headers);
      const payload = await validateJwt(token);

      // 將驗證資訊 (auth info) 儲存在請求中以便通用使用
      req.auth = createAuthInfo(payload);

      return true;
    } catch (err: any) {
      if (err.status === 401) throw new UnauthorizedException(err.message);
      throw new ForbiddenException(err.message);
    }
  }
}
```
