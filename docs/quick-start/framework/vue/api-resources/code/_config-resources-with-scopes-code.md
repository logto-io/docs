```tsx
import { createLogto } from '@logto/vue';

app.use(createLogto, {
  endpoint: '<your-logto-endpoint>',
  appId: '<your-application-id>',
  scopes: ['shopping:read', 'shopping:write', 'store:read', 'store:write'],
  resources: ['https://shopping.your-app.com/api', 'https://store.your-app.com/api'],
});
```
