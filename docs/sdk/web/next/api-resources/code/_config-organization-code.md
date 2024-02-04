```ts
import { UserScope } from '@logto/next';

export const logtoClient = new LogtoClient({
  // ...other configs
  scopes: [UserScope.Organizations],
});
```
