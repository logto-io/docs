```ts title="app.ts"
import { UserScope } from '@logto/express';

const config: LogtoExpressConfig = {
  // ...other configs
  // highlight-start
  scopes: ['read', 'write'], // ขอบเขต (scopes) ที่รองรับ: อ่าน, เขียน
  resources: ['https://shopping.your-app.com/api', 'https://store.your-app.com/api'], // ทรัพยากร API (API resources) ที่รองรับ
  // highlight-end
};
```
