```ts title="app/app.config.ts"
import { type ApplicationConfig } from '@angular/core';
import { provideLogto } from '@logto/angular';

export const appConfig: ApplicationConfig = {
  providers: [
    provideLogto({
      endpoint: '<your-logto-endpoint>',
      appId: '<your-app-id>',
      // highlight-start
      scopes: ['read', 'write'], // 权限 (Scopes)
      resources: ['https://shopping.your-app.com/api', 'https://store.your-app.com/api'], // API 资源
      // highlight-end
    }),
    // ...other providers
  ],
};
```
