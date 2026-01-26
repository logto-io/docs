```ts
import { type LogtoConfig, UserScope } from '@logto/capacitor';

const config: LogtoConfig = {
  // ...other options
  scopes: [UserScope.Email, UserScope.Phone], // 添加你需要的權限範圍 (scopes)
};
```
