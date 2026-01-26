```ts title="app/logto.ts"
import { UserScope } from '@logto/next';

export const logtoConfig = {
  // ...other configs
  // บรรทัดถัดไปคือจุดสำคัญ
  scopes: [UserScope.Organizations],
};
```
