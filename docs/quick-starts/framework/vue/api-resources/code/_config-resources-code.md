```ts title="main.ts"
import { createLogto } from '@logto/vue';

app.use(createLogto, {
  // ...other configs
  // highlight-next-line
  resources: ['https://shopping.your-app.com/api', 'https://store.your-app.com/api'],
});
```
