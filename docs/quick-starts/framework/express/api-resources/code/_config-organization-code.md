```ts title="app.ts"
import { UserScope } from '@logto/express';

const config: LogtoExpressConfig = {
  // ...other configs
  scopes: [UserScope.Organizations],
};
```
