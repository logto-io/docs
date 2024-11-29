```ts
import { type LogtoConfig, UserScope } from '@logto/capacitor';

const config: LogtoConfig = {
  // ...other options
  scopes: [UserScope.Email, UserScope.Phone], // Adicione os escopos que você precisa
};
```
