```ts title="app.ts"
import { verifyAccessToken } from './auth-middleware.js';

app.get('/api/protected', verifyAccessToken, (req, res) => {
  // Access auth information directly from req.auth
  res.json({ auth: req.auth });
});
```
