```js
import { UserScope } from 'https://esm.run/@logto/browser';

const isAuthenticated = await logtoClient.isAuthenticated();

(async () => {
  if (!isAuthenticated) {
    return;
  }
  const claims = await logtoClient.getIdTokenClaims();

  console.log('ID 權杖 (ID token) 宣告 (claims):', claims);
  console.log('組織 (Organization) IDs:', claims.organizations);

  // 假設至少有一個組織 (organization)，我們取第一個
  const organizationId = claims.organizations[0];
  const token = await logtoClient.getOrganizationToken(organizationId);

  console.log('組織 (Organization) 存取權杖 (access token):', token);
})();
```
