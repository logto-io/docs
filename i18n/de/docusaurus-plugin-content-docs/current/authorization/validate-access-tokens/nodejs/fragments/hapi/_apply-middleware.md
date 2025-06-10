```ts title="app.ts"
import { hapiVerifyAccessToken } from './auth-middleware.js';

server.route({
  method: 'GET',
  path: '/api/protected',
  options: {
    pre: [{ method: hapiVerifyAccessToken }],
    handler: (request, h) => {
      // Zugriff auf Authentifizierungsinformationen über request.app.auth
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
      // Deine Logik für den geschützten Endpunkt
      return {
        auth: request.app.auth,
        message: 'Geschützte Daten erfolgreich abgerufen',
      };
    },
  },
});
```
