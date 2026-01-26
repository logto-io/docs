```ts
import { type LogtoConfig, UserScope } from '@logto/capacitor';

const config: LogtoConfig = {
  // ...other options
  scopes: [UserScope.Email, UserScope.Phone], // เพิ่มขอบเขต (scopes) ที่คุณต้องการ
};
```
