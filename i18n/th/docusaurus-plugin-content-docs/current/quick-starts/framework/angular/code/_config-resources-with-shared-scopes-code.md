```ts title="app/app.config.ts"
import { type ApplicationConfig } from '@angular/core';
import { provideLogto } from '@logto/angular';

export const appConfig: ApplicationConfig = {
  providers: [
    provideLogto({
      endpoint: '<your-logto-endpoint>',
      appId: '<your-app-id>',
      // highlight-start
      scopes: ['read', 'write'], // ขอบเขต (scopes) ที่ต้องการ
      resources: ['https://shopping.your-app.com/api', 'https://store.your-app.com/api'], // ทรัพยากร API (API resources) ที่ต้องการ
      // highlight-end
    }),
    // ...other providers
  ],
};
```
