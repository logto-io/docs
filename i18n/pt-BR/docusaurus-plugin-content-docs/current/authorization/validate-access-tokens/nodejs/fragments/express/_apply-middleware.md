```ts title="app.ts"
import { verifyAccessToken } from './auth-middleware.js';

app.get('/api/protected', verifyAccessToken, (req, res) => {
  // Acesse as informações de autenticação diretamente de req.auth
  res.json({ auth: req.auth });
});

app.get('/api/protected/detailed', verifyAccessToken, (req, res) => {
  // Sua lógica de endpoint protegido
  res.json({
    auth: req.auth,
    message: 'Dados protegidos acessados com sucesso',
  });
});
```
