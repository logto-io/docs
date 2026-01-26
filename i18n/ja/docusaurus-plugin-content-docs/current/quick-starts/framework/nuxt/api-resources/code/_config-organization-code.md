```ts title="nuxt.config.ts"
import { UserScope } from '@logto/nuxt';

export default defineNuxtConfig({
  logto: {
    // highlight-next-line
    scopes: [UserScope.Organizations],
    // ...other configs
  },
});
```
