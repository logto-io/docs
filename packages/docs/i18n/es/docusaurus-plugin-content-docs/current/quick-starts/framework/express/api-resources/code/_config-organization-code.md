```ts title="app.ts"
import { UserScope } from '@logto/express';

const config: LogtoExpressConfig = {
  // ...other configs
  // highlight-next-line
  scopes: [UserScope.Organizations],
};
```
