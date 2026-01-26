```ts title="app.ts"
import { UserScope } from '@logto/express';

const config: LogtoExpressConfig = {
  // ...autres configurations
  // highlight-next-line
  scopes: [UserScope.Organizations],
};
```
