```ts title="app/app.config.ts"
import { type ApplicationConfig } from '@angular/core';
import { provideLogto, UserScope } from '@logto/angular';

export const appConfig: ApplicationConfig = {
  providers: [
    provideLogto({
      endpoint: '<your-logto-endpoint>',
      appId: '<your-app-id>',
      // destaque-início
      scopes: [UserScope.Organizations],
      // destaque-fim
    }),
    // ...outros providers
  ],
};
```
