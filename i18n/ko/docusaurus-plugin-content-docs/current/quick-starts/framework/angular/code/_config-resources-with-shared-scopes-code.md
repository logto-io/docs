```ts title="app/app.config.ts"
import { type ApplicationConfig } from '@angular/core';
import { provideLogto } from '@logto/angular';

export const appConfig: ApplicationConfig = {
  providers: [
    provideLogto({
      endpoint: '<your-logto-endpoint>',
      appId: '<your-app-id>',
      // highlight-start
      scopes: ['read', 'write'], // 스코프 (Scope) 예시
      resources: ['https://shopping.your-app.com/api', 'https://store.your-app.com/api'], // API 리소스 예시
      // highlight-end
    }),
    // ...other providers
  ],
};
```
