```ts title="app.ts"
import { UserScope } from '@logto/express';

const config: LogtoExpressConfig = {
  // ...การตั้งค่าอื่น ๆ
  // highlight-next-line
  scopes: [UserScope.Organizations],
};
```
