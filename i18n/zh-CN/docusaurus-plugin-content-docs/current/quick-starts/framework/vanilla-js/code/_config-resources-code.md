```js title="index.js"
import LogtoClient from '@logto/browser';

const logtoClient = new LogtoClient({
  // ...other configs
  // highlight-next-line
  resources: ['https://shopping.your-app.com/api', 'https://store.your-app.com/api'], // 添加 API 资源 (API resources)
});
```
