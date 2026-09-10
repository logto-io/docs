```ts title="app/app.config.ts"
import { type ApplicationConfig } from '@angular/core';
import { provideLogto } from '@logto/angular';

export const appConfig: ApplicationConfig = {
  providers: [
    provideLogto({
      endpoint: '<your-logto-endpoint>',
      appId: '<your-app-id>',
      // highlight-start
      scopes: ['read', 'write'], // 權限範圍 (Scopes)
      resources: ['https://shopping.your-app.com/api', 'https://store.your-app.com/api'], // API 資源 (API resources)
      // highlight-end
    }),
    // ...other providers
  ],
};
```
