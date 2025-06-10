```ts title="app.ts"
import { verifyAccessToken } from './auth-middleware.js';

app.get('/api/protected', verifyAccessToken, (req, res) => {
  // 直接从 req.auth 访问认证 (Authentication) 信息
  res.json({ auth: req.auth });
});
```
