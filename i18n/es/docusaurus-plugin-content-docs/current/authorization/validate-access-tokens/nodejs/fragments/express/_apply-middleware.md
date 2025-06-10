```ts title="app.ts"
import { verifyAccessToken } from './auth-middleware.js';

app.get('/api/protected', verifyAccessToken, (req, res) => {
  // Accede a la información de autenticación directamente desde req.auth
  res.json({ auth: req.auth });
});

app.get('/api/protected/detailed', verifyAccessToken, (req, res) => {
  // Tu lógica del endpoint protegido
  res.json({
    auth: req.auth,
    message: 'Datos protegidos accedidos correctamente',
  });
});
```
