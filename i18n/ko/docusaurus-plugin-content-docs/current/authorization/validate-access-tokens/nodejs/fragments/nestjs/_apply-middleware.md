```ts title="protected.controller.ts"
import { Controller, Get, UseGuards, Req } from '@nestjs/common';
import { AccessTokenGuard } from './access-token.guard.js';

@Controller('api')
export class ProtectedController {
  @Get('protected')
  @UseGuards(AccessTokenGuard)
  getProtected(@Req() req: any) {
    // req.auth에서 인증 (Authentication) 정보를 가져옵니다
    return { auth: req.auth };
  }
}
```
