```ts title="app/app.config.ts"
import { type ApplicationConfig } from '@angular/core';
import { provideLogto } from '@logto/angular';

export const appConfig: ApplicationConfig = {
  providers: [
    provideLogto({
      endpoint: '<your-logto-endpoint>',
      appId: '<your-app-id>',
      // highlight-start
      scopes: ['shopping:read', 'shopping:write', 'store:read', 'store:write'],
      resources: ['https://shopping.your-app.com/api', 'https://store.your-app.com/api'],
      // highlight-end
    }),
    // ...otros proveedores
  ],
};
```
