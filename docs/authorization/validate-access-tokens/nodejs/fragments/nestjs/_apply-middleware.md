```ts title="protected.controller.ts"
import { Controller, Get, UseGuards, Req } from '@nestjs/common';
import { AccessTokenGuard } from './access-token.guard.js';

@Controller('api')
export class ProtectedController {
  @Get('protected')
  @UseGuards(AccessTokenGuard)
  getProtected(@Req() req: any) {
    // Access auth information from req.auth
    return { auth: req.auth };
  }

  @Get('protected/detailed')
  @UseGuards(AccessTokenGuard)
  getDetailedProtected(@Req() req: any) {
    // Your protected endpoint logic
    return {
      auth: req.auth,
      message: 'Protected data accessed successfully',
    };
  }
}
```
