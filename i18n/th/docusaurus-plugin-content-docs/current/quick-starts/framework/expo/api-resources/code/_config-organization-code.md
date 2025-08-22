```ts title="App.tsx"
import { LogtoConfig, UserScope } from '@logto/rn';

const config: LogtoConfig = {
  // ...การตั้งค่าอื่น ๆ
  scopes: [UserScope.Organizations],
};
```
