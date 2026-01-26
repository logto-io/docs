```ts title="app.ts"
import { UserScope } from '@logto/express';

const config: LogtoExpressConfig = {
  // ...other configs
  // highlight-next-line
  resources: ['https://shopping.your-app.com/api', 'https://store.your-app.com/api'], // API 리소스를 추가하세요
};
```
