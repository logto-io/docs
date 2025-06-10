```ts title="protected.controller.ts"
import { Controller, Get, UseGuards, Req } from '@nestjs/common';
import { AccessTokenGuard } from './access-token.guard.js';

@Controller('api')
export class ProtectedController {
  @Get('protected')
  @UseGuards(AccessTokenGuard)
  getProtected(@Req() req: any) {
    // 從 req.auth 取得驗證 (Authentication) 資訊
    return { auth: req.auth };
  }

  @Get('protected/detailed')
  @UseGuards(AccessTokenGuard)
  getDetailedProtected(@Req() req: any) {
    // 你的受保護端點邏輯
    return {
      auth: req.auth,
      message: '成功存取受保護資料',
    };
  }
}
```
