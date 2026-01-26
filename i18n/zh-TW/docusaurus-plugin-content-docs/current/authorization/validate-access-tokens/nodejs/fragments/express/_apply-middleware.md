```ts title="app.ts"
import { verifyAccessToken } from './auth-middleware.js';

app.get('/api/protected', verifyAccessToken, (req, res) => {
  // 可直接從 req.auth 存取驗證 (Authentication) 資訊
  res.json({ auth: req.auth });
});
```
