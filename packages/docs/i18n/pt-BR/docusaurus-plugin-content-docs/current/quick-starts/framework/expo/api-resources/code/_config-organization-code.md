```ts title="App.tsx"
import { LogtoConfig, UserScope } from '@logto/rn';

const config: LogtoConfig = {
  // ...outras configurações
  scopes: [UserScope.Organizations],
};
```
