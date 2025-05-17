```ts title="pages/api/organizations.ts"
import { logtoClient } from '../../../libraries/logto';

export default logtoClient.withLogtoApiRoute(async (request, response) => {
  if (!request.user.isAuthenticated) {
    response.status(401).json({ message: 'Unauthorized' });

    return;
  }

  const client = await logtoClient.createNodeClientFromNextApi(request, response);

  // IDs de Organização (Organization) são armazenados nas reivindicações do token de ID do usuário
  const { organizations = [] } = await client.getIdTokenClaims();

  const organizationTokens = await Promise.all(
    organizations.map(async (organizationId) => client.getOrganizationToken(organizationId))
  );

  const organizationClaims = await Promise.all(
    organizations.map(async (organizationId) => client.getOrganizationTokenClaims(organizationId))
  );

  // Faça coisas com o token de organização (organization token) e / ou reivindicações

  response.json({
    organizations,
  });
});
```
