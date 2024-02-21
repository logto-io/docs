```js
import LogtoClient, { UserScope } from '@logto/browser';

const resources = ['http://localhost:3001/api/test', 'http://localhost:5001/api/test']; // Replace with your own resource indicators registered in Logto dashboard
const resourceScopes = ['read', 'write']; // Shared scopes for all the resources. (Declare these scopes in Logto dashboard under all the resources listed above)

const logtoClient = new LogtoClient({
  endpoint,
  appId,
  resources: resourceIndicators,
  scopes: [
    UserScope.Email,
    UserScope.Phone,
    UserScope.CustomData,
    UserScope.Identities,
    ...resourceScopes,
  ],
});
```
