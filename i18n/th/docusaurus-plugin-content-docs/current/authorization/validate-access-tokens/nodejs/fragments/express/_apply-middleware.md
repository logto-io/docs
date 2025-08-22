```ts title="app.ts"
import { verifyAccessToken } from './auth-middleware.js';

app.get('/api/protected', verifyAccessToken, (req, res) => {
  // เข้าถึงข้อมูลการยืนยันตัวตน (auth) ได้โดยตรงจาก req.auth
  res.json({ auth: req.auth });
});
```
