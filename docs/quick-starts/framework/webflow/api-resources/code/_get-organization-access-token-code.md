```js
import { UserScope } from 'https://esm.run/@logto/browser';

const isAuthenticated = await logtoClient.isAuthenticated();

(async () => {
  if (!isAuthenticated) {
    return;
  }
  const claims = await logtoClient.getIdTokenClaims();

  console.log('ID token claims:', claims);
  console.log('Organization IDs:', claims.organizations);

  // Assuming there's at least one organization, let's take the first one
  const organizationId = claims.organizations[0];
  const token = await logtoClient.getOrganizationToken(organizationId);

  console.log('Organization access token:', token);
})();
```
