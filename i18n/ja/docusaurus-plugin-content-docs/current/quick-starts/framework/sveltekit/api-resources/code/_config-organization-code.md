```ts title="hooks.server.ts"
import { handleLogto, UserScope } from '@logto/sveltekit';

export const handle = handleLogto(
  {
    // ...other configs
    scopes: [UserScope.Organizations],
  }
  // ...other configs
);
```
