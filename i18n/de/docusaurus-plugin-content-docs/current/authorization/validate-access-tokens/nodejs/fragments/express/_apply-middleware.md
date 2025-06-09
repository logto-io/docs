```ts title="app.ts"
import { verifyAccessToken } from './auth-middleware.js';

app.get('/api/protected', verifyAccessToken, (req, res) => {
  // Greife direkt über req.auth auf Authentifizierungsinformationen zu
  res.json({ auth: req.auth });
});

app.get('/api/protected/detailed', verifyAccessToken, (req, res) => {
  // Deine Logik für den geschützten Endpunkt
  res.json({
    auth: req.auth,
    message: 'Geschützte Daten wurden erfolgreich abgerufen',
  });
});
```
