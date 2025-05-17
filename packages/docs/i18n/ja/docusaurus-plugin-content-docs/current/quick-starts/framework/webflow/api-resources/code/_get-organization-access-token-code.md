```js
import { UserScope } from 'https://esm.run/@logto/browser';

const isAuthenticated = await logtoClient.isAuthenticated();

(async () => {
  if (!isAuthenticated) {
    return;
  }
  const claims = await logtoClient.getIdTokenClaims();

  console.log('ID トークンのクレーム:', claims);
  console.log('組織 ID:', claims.organizations);

  // 少なくとも 1 つの組織があると仮定して、最初のものを取得します
  const organizationId = claims.organizations[0];
  const token = await logtoClient.getOrganizationToken(organizationId);

  console.log('組織のアクセス トークン:', token);
})();
```
