```ts title="main.ts"
import { createLogto, UserScope } from '@logto/vue';

app.use(createLogto, {
  // ...other configs
  // highlight-start
  scopes: [UserScope.Organizations],
  // highlight-end
});
```
