```ts
import { UserScope } from '@logto/nuxt';

export default defineNuxtConfig({
  logto: {
    scopes: [UserScope.Organizations],
    // ...other configs
  },
});
```
