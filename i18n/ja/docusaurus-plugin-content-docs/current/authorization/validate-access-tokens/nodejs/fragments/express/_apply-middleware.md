```ts title="app.ts"
import { verifyAccessToken } from './auth-middleware.js';

app.get('/api/protected', verifyAccessToken, (req, res) => {
  // 認証情報 (auth information) を req.auth から直接取得
  res.json({ auth: req.auth });
});

app.get('/api/protected/detailed', verifyAccessToken, (req, res) => {
  // 保護されたエンドポイントのロジック
  res.json({
    auth: req.auth,
    message: '保護されたデータへのアクセスに成功しました',
  });
});
```
