```js
import { UserScope } from 'https://esm.run/@logto/browser';

const isAuthenticated = await logtoClient.isAuthenticated();

(async () => {
  if (!isAuthenticated) {
    return;
  }
  const claims = await logtoClient.getIdTokenClaims();

  console.log('Reclamos del token de ID:', claims);
  console.log('IDs de organizaciones:', claims.organizations);

  // Asumiendo que hay al menos una organización, tomemos la primera
  const organizationId = claims.organizations[0];
  const token = await logtoClient.getOrganizationToken(organizationId);

  console.log('Token de acceso de la organización:', token);
})();
```
