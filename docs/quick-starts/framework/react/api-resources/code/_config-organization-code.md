```ts title="App.tsx"
import { LogtoConfig, UserScope } from '@logto/react';

const config: LogtoConfig = {
  // ...other configs
  scopes: [UserScope.Organizations],
};
```
