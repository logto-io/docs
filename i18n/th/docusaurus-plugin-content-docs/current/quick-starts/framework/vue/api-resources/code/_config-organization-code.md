```ts title="main.ts"
import { createLogto, UserScope } from '@logto/vue';

app.use(createLogto, {
  // ...การตั้งค่าอื่น ๆ
  // highlight-start
  scopes: [UserScope.Organizations],
  // highlight-end
});
```
