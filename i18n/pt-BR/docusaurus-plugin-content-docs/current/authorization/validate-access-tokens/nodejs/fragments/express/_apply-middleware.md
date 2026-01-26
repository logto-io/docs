```ts title="app.ts"
import { verifyAccessToken } from './auth-middleware.js';

app.get('/api/protected', verifyAccessToken, (req, res) => {
  // Acesse as informações de autenticação diretamente de req.auth
  res.json({ auth: req.auth });
});
```
