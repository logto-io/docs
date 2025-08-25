```ts title="main.ts"
import { createLogto } from '@logto/vue';

app.use(createLogto, {
  // ...การตั้งค่าอื่น ๆ
  // highlight-next-line
  resources: ['https://shopping.your-app.com/api', 'https://store.your-app.com/api'],
});
```
