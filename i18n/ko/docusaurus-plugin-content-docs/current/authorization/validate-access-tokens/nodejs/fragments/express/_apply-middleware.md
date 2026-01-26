```ts title="app.ts"
import { verifyAccessToken } from './auth-middleware.js';

app.get('/api/protected', verifyAccessToken, (req, res) => {
  // req.auth에서 인증 (Authentication) 정보를 직접 접근하세요
  res.json({ auth: req.auth });
});
```
