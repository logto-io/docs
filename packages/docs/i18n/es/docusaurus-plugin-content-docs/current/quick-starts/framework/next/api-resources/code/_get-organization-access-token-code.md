```ts title="pages/api/organizations.ts"
import { logtoClient } from '../../../libraries/logto';

export default logtoClient.withLogtoApiRoute(async (request, response) => {
  if (!request.user.isAuthenticated) {
    response.status(401).json({ message: 'Unauthorized' });

    return;
  }

  const client = await logtoClient.createNodeClientFromNextApi(request, response);

  // Los IDs de las organizaciones se almacenan en los reclamos del token de ID del usuario
  const { organizations = [] } = await client.getIdTokenClaims();

  const organizationTokens = await Promise.all(
    organizations.map(async (organizationId) => client.getOrganizationToken(organizationId))
  );

  const organizationClaims = await Promise.all(
    organizations.map(async (organizationId) => client.getOrganizationTokenClaims(organizationId))
  );

  // Realizar acciones con el token de organización y / o reclamos

  response.json({
    organizations,
  });
});
```
