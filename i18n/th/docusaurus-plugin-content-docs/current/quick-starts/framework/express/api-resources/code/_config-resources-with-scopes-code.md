```ts title="app.ts"
import { UserScope } from '@logto/express';

const config: LogtoExpressConfig = {
  // ...other configs
  // highlight-start
  scopes: ['shopping:read', 'shopping:write', 'store:read', 'store:write'], // ขอบเขต (scopes) ที่รองรับ
  resources: ['https://shopping.your-app.com/api', 'https://store.your-app.com/api'], // ทรัพยากร (resources) ที่รองรับ
  // highlight-end
};
```
