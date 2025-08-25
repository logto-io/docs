```ts title="hooks.server.ts"
import { handleLogto, UserScope } from '@logto/sveltekit';

export const handle = handleLogto(
  {
    // ...การตั้งค่าอื่น ๆ
    scopes: [UserScope.Organizations], // ขอบเขต (scopes) ที่ร้องขอ ได้แก่ องค์กร (Organizations)
  }
  // ...การตั้งค่าอื่น ๆ
);
```
