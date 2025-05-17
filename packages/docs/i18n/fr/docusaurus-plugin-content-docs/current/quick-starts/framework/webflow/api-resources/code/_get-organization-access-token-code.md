```js
import { UserScope } from 'https://esm.run/@logto/browser';

const isAuthenticated = await logtoClient.isAuthenticated();

(async () => {
  if (!isAuthenticated) {
    return;
  }
  const claims = await logtoClient.getIdTokenClaims();

  console.log('Revendications du jeton d’identifiant :', claims);
  console.log('Identifiants des organisations :', claims.organizations);

  // En supposant qu'il y ait au moins une organisation, prenons la première
  const organizationId = claims.organizations[0];
  const token = await logtoClient.getOrganizationToken(organizationId);

  console.log('Jeton d’accès de l’organisation :', token);
})();
```
