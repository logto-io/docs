```ts title="app/app.config.ts"
import { type ApplicationConfig } from '@angular/core';
import { provideLogto, UserScope } from '@logto/angular';

export const appConfig: ApplicationConfig = {
  providers: [
    provideLogto({
      endpoint: '<your-logto-endpoint>',
      appId: '<your-app-id>',
      // highlight-start
      scopes: [UserScope.Organizations],
      // highlight-end
    }),
    // ...other providers
  ],
};
```
