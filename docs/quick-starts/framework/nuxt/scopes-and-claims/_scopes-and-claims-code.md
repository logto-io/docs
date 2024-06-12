```ts
import { UserScope } from '@logto/nuxt';

export default defineNuxtConfig({
  logto: {
    scopes: [UserScope.Email, UserScope.Phone], // Add more scopes if needed
    // ...other configs
  },
});
```
