```ts title="hooks.server.ts"
import { UserScope, handleLogto } from '@logto/sveltekit';

export const handle = handleLogto({
  // ...other options
  scopes: [UserScope.email, UserScope.phone], // Weitere Berechtigungen hinzufügen, falls erforderlich
});
```
