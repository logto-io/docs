```ts
import { type LogtoConfig, UserScope } from '@logto/capacitor';

const config: LogtoConfig = {
  // ...autres options
  scopes: [UserScope.Email, UserScope.Phone], // Ajoutez les Portées (scopes) dont vous avez besoin
};
```
