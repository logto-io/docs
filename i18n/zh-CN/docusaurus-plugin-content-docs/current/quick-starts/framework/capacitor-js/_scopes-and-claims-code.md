```ts
import { type LogtoConfig, UserScope } from '@logto/capacitor';

const config: LogtoConfig = {
  // ...其他选项
  scopes: [UserScope.Email, UserScope.Phone], // 添加你需要的权限 (scopes)
};
```
