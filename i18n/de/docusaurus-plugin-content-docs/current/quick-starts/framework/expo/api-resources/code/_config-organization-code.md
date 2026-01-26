```ts title="App.tsx"
import { LogtoConfig, UserScope } from '@logto/rn';

const config: LogtoConfig = {
  // ...other configs
  scopes: [UserScope.Organizations],
};
```
