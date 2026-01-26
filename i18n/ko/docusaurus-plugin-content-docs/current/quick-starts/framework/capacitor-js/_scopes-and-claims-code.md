```ts
import { type LogtoConfig, UserScope } from '@logto/capacitor';

const config: LogtoConfig = {
  // ...other options
  scopes: [UserScope.Email, UserScope.Phone], // 필요한 스코프를 추가하세요
};
```
