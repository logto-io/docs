```ts title="App.tsx"
import { LogtoConfig, UserScope } from '@logto/react';

const config: LogtoConfig = {
  // ...other configs
  // highlight-next-line
  scopes: [UserScope.Organizations], // ขอบเขต (scopes) ที่ร้องขอข้อมูลองค์กร (Organizations)
};
```
