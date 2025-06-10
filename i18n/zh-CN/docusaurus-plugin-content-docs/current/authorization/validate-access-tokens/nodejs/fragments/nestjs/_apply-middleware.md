```ts title="protected.controller.ts"
import { Controller, Get, UseGuards, Req } from '@nestjs/common';
import { AccessTokenGuard } from './access-token.guard.js';

@Controller('api')
export class ProtectedController {
  @Get('protected')
  @UseGuards(AccessTokenGuard)
  getProtected(@Req() req: any) {
    // 从 req.auth 获取认证 (Authentication) 信息
    return { auth: req.auth };
  }

  @Get('protected/detailed')
  @UseGuards(AccessTokenGuard)
  getDetailedProtected(@Req() req: any) {
    // 你的受保护接口逻辑
    return {
      auth: req.auth,
      message: '受保护数据访问成功',
    };
  }
}
```
