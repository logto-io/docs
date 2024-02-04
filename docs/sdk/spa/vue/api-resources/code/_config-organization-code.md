```ts
import { createLogto, UserScope } from '@logto/vue';

app.use(createLogto, {
  // ...other configs
  scopes: [UserScope.Organizations],
});
```
