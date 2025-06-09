```ts title="app.ts"
import { verifyAccessToken } from './auth-middleware.js';

app.get('/api/protected', verifyAccessToken, (req, res) => {
  // Accédez directement aux informations d'authentification depuis req.auth
  res.json({ auth: req.auth });
});

app.get('/api/protected/detailed', verifyAccessToken, (req, res) => {
  // Votre logique de point de terminaison protégé
  res.json({
    auth: req.auth,
    message: 'Données protégées accessibles avec succès',
  });
});
```
