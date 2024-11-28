```tsx title="App.tsx"
import { LogtoConfig } from '@logto/react';

const config: LogtoConfig = {
  // ...other configs
  // highlight-next-line
  resources: ['https://shopping.your-app.com/api', 'https://store.your-app.com/api'], // 添加 API 资源 (API resources)
};
```
