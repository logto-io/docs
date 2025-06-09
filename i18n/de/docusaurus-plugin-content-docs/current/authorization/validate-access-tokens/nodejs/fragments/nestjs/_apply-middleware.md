```ts title="protected.controller.ts"
import { Controller, Get, UseGuards, Req } from '@nestjs/common';
import { AccessTokenGuard } from './access-token.guard.js';

@Controller('api')
export class ProtectedController {
  @Get('protected')
  @UseGuards(AccessTokenGuard)
  getProtected(@Req() req: any) {
    // Zugriff auf Authentifizierungsinformationen über req.auth
    return { auth: req.auth };
  }

  @Get('protected/detailed')
  @UseGuards(AccessTokenGuard)
  getDetailedProtected(@Req() req: any) {
    // Deine Logik für den geschützten Endpunkt
    return {
      auth: req.auth,
      message: 'Geschützte Daten wurden erfolgreich abgerufen',
    };
  }
}
```
