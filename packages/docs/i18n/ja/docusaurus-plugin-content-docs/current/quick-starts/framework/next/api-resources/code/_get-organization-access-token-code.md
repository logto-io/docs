```ts title="pages/api/organizations.ts"
import { logtoClient } from '../../../libraries/logto';

export default logtoClient.withLogtoApiRoute(async (request, response) => {
  if (!request.user.isAuthenticated) {
    response.status(401).json({ message: 'Unauthorized' });

    return;
  }

  const client = await logtoClient.createNodeClientFromNextApi(request, response);

  // 組織 (Organization) ID はユーザーの ID トークンのクレームに保存されています
  const { organizations = [] } = await client.getIdTokenClaims();

  const organizationTokens = await Promise.all(
    organizations.map(async (organizationId) => client.getOrganizationToken(organizationId))
  );

  const organizationClaims = await Promise.all(
    organizations.map(async (organizationId) => client.getOrganizationTokenClaims(organizationId))
  );

  // 組織トークンおよび / またはクレームを使用して処理を行う

  response.json({
    organizations,
  });
});
```
