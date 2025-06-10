```ts title="app.ts"
import { verifyAccessToken } from './auth-middleware.js';

app.get('/api/protected', verifyAccessToken, (req, res) => {
  // 直接從 req.auth 存取驗證 (Authentication) 資訊
  res.json({ auth: req.auth });
});

app.get('/api/protected/detailed', verifyAccessToken, (req, res) => {
  // 你的受保護端點邏輯
  res.json({
    auth: req.auth,
    message: '成功存取受保護資料',
  });
});
```
