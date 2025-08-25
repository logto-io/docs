```js
import LogtoClient, { UserScope } from 'https://esm.run/@logto/browser';

window.logtoClient = new LogtoClient({
  // ...การตั้งค่าอื่น ๆ
  scopes: [UserScope.Organizations],
});
```
