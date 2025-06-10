```ts title="app.ts"
import { hapiVerifyAccessToken } from './auth-middleware.js';

server.route({
  method: 'GET',
  path: '/api/protected',
  options: {
    pre: [{ method: hapiVerifyAccessToken }],
    handler: (request, h) => {
      // Acesse as informações de autenticação em request.app.auth
      return { auth: request.app.auth };
    },
  },
});

server.route({
  method: 'GET',
  path: '/api/protected/detailed',
  options: {
    pre: [{ method: hapiVerifyAccessToken }],
    handler: (request, h) => {
      // Sua lógica do endpoint protegido
      return {
        auth: request.app.auth,
        message: 'Dados protegidos acessados com sucesso',
      };
    },
  },
});
```
