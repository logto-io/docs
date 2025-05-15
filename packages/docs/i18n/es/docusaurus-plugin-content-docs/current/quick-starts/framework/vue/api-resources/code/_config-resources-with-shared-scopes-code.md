```ts title="main.ts"
import { createLogto } from '@logto/vue';

app.use(createLogto, {
  // ...other configs
  // highlight-start
  scopes: ['read', 'write'],
  resources: ['https://shopping.your-app.com/api', 'https://store.your-app.com/api'],
  // highlight-end
});
```
