```ts title="app/app.config.ts"
import { type ApplicationConfig } from '@angular/core';
import { provideLogto } from '@logto/angular';

export const appConfig: ApplicationConfig = {
  providers: [
    provideLogto({
      endpoint: '<your-logto-endpoint>',
      appId: '<your-app-id>',
      // highlight-start
      scopes: ['read', 'write'], // Berechtigungen
      resources: ['https://shopping.your-app.com/api', 'https://store.your-app.com/api'], // API-Ressourcen
      // highlight-end
    }),
    // ...other providers
  ],
};
```
