```ts title="protected.controller.ts"
import { Controller, Get, UseGuards, Req } from '@nestjs/common';
import { AccessTokenGuard } from './access-token.guard.js';

@Controller('api')
export class ProtectedController {
  @Get('protected')
  @UseGuards(AccessTokenGuard)
  getProtected(@Req() req: any) {
    // Accédez aux informations d'authentification depuis req.auth
    return { auth: req.auth };
  }

  @Get('protected/detailed')
  @UseGuards(AccessTokenGuard)
  getDetailedProtected(@Req() req: any) {
    // Votre logique de point de terminaison protégé
    return {
      auth: req.auth,
      message: 'Données protégées accessibles avec succès',
    };
  }
}
```
