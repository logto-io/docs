```ts title="libraries/logto.ts"
import { UserScope } from '@logto/next';

export const logtoClient = new LogtoClient({
  // ...other configs
  // highlight-next-line
  scopes: [UserScope.Organizations],
});
```
