```js
import { UserScope } from 'https://esm.run/@logto/browser';

const isAuthenticated = await logtoClient.isAuthenticated();

(async () => {
  if (!isAuthenticated) {
    return;
  }
  const claims = await logtoClient.getIdTokenClaims();

  console.log('Reivindicações do token de ID:', claims);
  console.log('IDs das organizações:', claims.organizations);

  // Supondo que haja pelo menos uma organização, vamos pegar a primeira
  const organizationId = claims.organizations[0];
  const token = await logtoClient.getOrganizationToken(organizationId);

  console.log('Token de acesso da organização:', token);
})();
```
