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

  @Get('protected/detailed')
  @UseGuards(AccessTokenGuard)
  getDetailedProtected(@Req() req: any) {
    // 보호된 엔드포인트 로직을 작성하세요
    return {
      auth: req.auth,
      message: '보호된 데이터에 성공적으로 접근했습니다',
    };
  }
}
```
