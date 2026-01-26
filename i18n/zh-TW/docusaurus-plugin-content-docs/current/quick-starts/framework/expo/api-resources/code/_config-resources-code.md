```tsx title="App.tsx"
import { LogtoConfig } from '@logto/rn';

const config: LogtoConfig = {
  appId: '<your-application-id>',
  endpoint: '<your-logto-endpoint>',
  // 新增 API 資源
  // highlight-start
  resources: ['https://shopping.your-app.com/api', 'https://store.your-app.com/api'],
  // highlight-end
};
```
