```ts title="app.ts"
import { verifyAccessToken } from './auth-middleware.js';

app.get('/api/protected', verifyAccessToken, (req, res) => {
  // Accédez directement aux informations d'authentification depuis req.auth
  res.json({ auth: req.auth });
});
```
