```ts title="App.tsx"
import { LogtoConfig, UserScope } from '@logto/react';

const config: LogtoConfig = {
  // ...other configs
  // highlight-next-line
  scopes: [UserScope.Organizations],
};
```
