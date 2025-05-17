```ts
import { type LogtoConfig, UserScope } from '@logto/capacitor';

const config: LogtoConfig = {
  // ...other options
  scopes: [UserScope.Email, UserScope.Phone], // Add the scopes you need
};
```
