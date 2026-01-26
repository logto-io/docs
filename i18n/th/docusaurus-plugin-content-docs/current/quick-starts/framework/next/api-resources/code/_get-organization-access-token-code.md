```ts title="pages/api/organizations.ts"
import { logtoClient } from '../../../libraries/logto';

export default logtoClient.withLogtoApiRoute(async (request, response) => {
  if (!request.user.isAuthenticated) {
    response.status(401).json({ message: 'Unauthorized' });

    return;
  }

  const client = await logtoClient.createNodeClientFromNextApi(request, response);

  // รหัสองค์กร (Organization IDs) จะถูกเก็บไว้ในการอ้างสิทธิ์ของโทเค็น ID ของผู้ใช้
  const { organizations = [] } = await client.getIdTokenClaims();

  const organizationTokens = await Promise.all(
    organizations.map(async (organizationId) => client.getOrganizationToken(organizationId))
  );

  const organizationClaims = await Promise.all(
    organizations.map(async (organizationId) => client.getOrganizationTokenClaims(organizationId))
  );

  // ดำเนินการกับโทเค็นองค์กร และ / หรือ การอ้างสิทธิ์

  response.json({
    organizations,
  });
});
```
