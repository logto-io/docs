```ts title="app/logto.ts"
import { UserScope } from '@logto/next';

export const logtoConfig = {
  // ...other configs
  // highlight-next-line
  scopes: [UserScope.Organizations],
};
```
