```tsx
import { LogtoConfig } from '@logto/react';

const config: LogtoConfig = {
  appId: '<your-application-id>',
  endpoint: '<your-logto-endpoint>',
  scopes: ['shopping:read', 'shopping:write', 'store:read', 'store:write'],
  resources: ['https://shopping.your-app.com/api', 'https://store.your-app.com/api'],
};
```
