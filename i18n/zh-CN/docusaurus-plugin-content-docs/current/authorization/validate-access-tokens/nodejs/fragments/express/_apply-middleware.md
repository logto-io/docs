```ts title="app.ts"
import { verifyAccessToken } from './auth-middleware.js';

app.get('/api/protected', verifyAccessToken, (req, res) => {
  // 直接从 req.auth 获取认证 (Authentication) 信息
  res.json({ auth: req.auth });
});

app.get('/api/protected/detailed', verifyAccessToken, (req, res) => {
  // 你的受保护接口逻辑
  res.json({
    auth: req.auth,
    message: '受保护数据访问成功',
  });
});
```
