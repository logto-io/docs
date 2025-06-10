```ts title="app.ts"
import { hapiVerifyAccessToken } from './auth-middleware.js';

server.route({
  method: 'GET',
  path: '/api/protected',
  options: {
    pre: [{ method: hapiVerifyAccessToken }],
    handler: (request, h) => {
      // 从 request.app.auth 获取认证 (Authentication) 信息
      return { auth: request.app.auth };
    },
  },
});

server.route({
  method: 'GET',
  path: '/api/protected/detailed',
  options: {
    pre: [{ method: hapiVerifyAccessToken }],
    handler: (request, h) => {
      // 你的受保护接口逻辑
      return {
        auth: request.app.auth,
        message: '受保护数据访问成功',
      };
    },
  },
});
```
