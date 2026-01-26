```js
import LogtoClient, { UserScope } from 'https://esm.run/@logto/browser';

window.logtoClient = new LogtoClient({
  // ...other configs
  scopes: [UserScope.Organizations],
});
```
