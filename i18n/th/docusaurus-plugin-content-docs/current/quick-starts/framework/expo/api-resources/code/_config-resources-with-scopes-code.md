```tsx title="App.tsx"
import { LogtoConfig } from '@logto/rn';

const config: LogtoConfig = {
  appId: '<your-application-id>',
  endpoint: '<your-logto-endpoint>',
  // highlight-start
  scopes: ['shopping:read', 'shopping:write', 'store:read', 'store:write'],
  // highlight-end
  resources: ['https://shopping.your-app.com/api', 'https://store.your-app.com/api'],
};
```
