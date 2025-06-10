```ts title="app.ts"
import { verifyAccessToken } from './auth-middleware.js';

app.get('/api/protected', verifyAccessToken, (req, res) => {
  // req.auth から認証情報 (auth information) を直接取得
  res.json({ auth: req.auth });
});
```
