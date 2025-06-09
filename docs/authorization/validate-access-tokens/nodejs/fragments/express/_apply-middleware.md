```ts title="app.ts"
import { verifyAccessToken } from './auth-middleware.js';

app.get('/api/protected', verifyAccessToken, (req, res) => {
  // Access auth information directly from req.auth
  res.json({ auth: req.auth });
});

app.get('/api/protected/detailed', verifyAccessToken, (req, res) => {
  // Your protected endpoint logic
  res.json({
    auth: req.auth,
    message: 'Protected data accessed successfully',
  });
});
```
