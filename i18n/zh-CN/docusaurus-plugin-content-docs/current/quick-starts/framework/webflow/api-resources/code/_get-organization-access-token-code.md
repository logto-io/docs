```js
import { UserScope } from 'https://esm.run/@logto/browser';

const isAuthenticated = await logtoClient.isAuthenticated();

(async () => {
  if (!isAuthenticated) {
    return;
  }
  const claims = await logtoClient.getIdTokenClaims();

  console.log('ID 令牌声明 (ID token claims):', claims);
  console.log('组织 (Organization) IDs:', claims.organizations);

  // 假设至少有一个组织 (Organization)，我们取第一个
  const organizationId = claims.organizations[0];
  const token = await logtoClient.getOrganizationToken(organizationId);

  console.log('组织 (Organization) 访问令牌 (access token):', token);
})();
```
