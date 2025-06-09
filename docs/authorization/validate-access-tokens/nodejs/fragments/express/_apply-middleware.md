```ts title="app.ts"
import express from 'express';
import { verifyAccessToken } from './auth-middleware.js';

const app = express();

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

app.listen(3000);
```
