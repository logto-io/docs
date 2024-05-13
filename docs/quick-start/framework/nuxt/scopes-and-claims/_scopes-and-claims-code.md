```ts
import { UserScope } from '@logto/nuxt';

export default defineNuxtConfig({
  logto: {
    scopes: [UserScope.email, UserScope.phone], // Add more scopes if needed
    // ...other configs
  },
});
```
