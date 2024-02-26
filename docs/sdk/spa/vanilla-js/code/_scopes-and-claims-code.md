```js
import LogtoClient, { UserScope } from '@logto/browser';

const logtoClient = new LogtoClient({
  appId: '<your-application-id>',
  endpoint: '<your-logto-endpoint>',
  scopes: [UserScope.Email, UserScope.Phone, UserScope.CustomData, UserScope.Identities],
});
```
