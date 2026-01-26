```js
import { UserScope } from 'https://esm.run/@logto/browser';

const isAuthenticated = await logtoClient.isAuthenticated();

(async () => {
  if (!isAuthenticated) {
    return;
  }
  const claims = await logtoClient.getIdTokenClaims();

  console.log('ID-Token-Ansprüche:', claims);
  console.log('Organisations-IDs:', claims.organizations);

  // Angenommen, es gibt mindestens eine Organisation, nehmen wir die erste
  const organizationId = claims.organizations[0];
  const token = await logtoClient.getOrganizationToken(organizationId);

  console.log('Organisations-Zugangstoken:', token);
})();
```
