```ts title="hooks.server.ts"
import { UserScope, handleLogto } from '@logto/sveltekit';

export const handle = handleLogto({
  // ...ตัวเลือกอื่น ๆ
  scopes: [UserScope.email, UserScope.phone], // เพิ่มขอบเขต (scopes) เพิ่มเติมหากต้องการ
});
```
