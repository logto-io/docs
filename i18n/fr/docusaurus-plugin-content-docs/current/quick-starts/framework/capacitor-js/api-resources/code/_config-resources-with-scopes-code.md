```tsx
import { type LogtoConfig } from '@logto/capacitor';

const config: LogtoConfig = {
  appId: '<votre-id-application>',
  endpoint: '<votre-point-de-terminaison-logto>',
  scopes: ['shopping:read', 'shopping:write', 'store:read', 'store:write'],
  resources: ['https://shopping.your-app.com/api', 'https://store.your-app.com/api'],
};
```
