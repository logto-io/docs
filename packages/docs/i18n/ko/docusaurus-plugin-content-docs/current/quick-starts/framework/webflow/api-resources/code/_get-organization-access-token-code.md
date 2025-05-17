```js
import { UserScope } from 'https://esm.run/@logto/browser';

const isAuthenticated = await logtoClient.isAuthenticated();

(async () => {
  if (!isAuthenticated) {
    return;
  }
  const claims = await logtoClient.getIdTokenClaims();

  console.log('ID 토큰 클레임:', claims);
  console.log('조직 ID:', claims.organizations);

  // 적어도 하나의 조직이 있다고 가정하고, 첫 번째 조직을 선택합니다
  const organizationId = claims.organizations[0];
  const token = await logtoClient.getOrganizationToken(organizationId);

  console.log('조직 액세스 토큰:', token);
})();
```
