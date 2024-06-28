```ts title="/app/logto.ts"
import { UserScope } from '@logto/next';

export const logtoConfig = {
  // ...other configs
  scopes: [UserScope.Organizations],
};
```
