```js
import LogtoClient, { UserScope } from '@logto/browser';

const logtoClient = new LogtoClient({
  endpoint,
  appId,
  resources: resourceIndicators,
  scopes: [UserScope.Organizations],
});
```
