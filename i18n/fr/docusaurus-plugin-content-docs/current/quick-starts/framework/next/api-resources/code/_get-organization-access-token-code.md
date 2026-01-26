```ts title="pages/api/organizations.ts"
import { logtoClient } from '../../../libraries/logto';

export default logtoClient.withLogtoApiRoute(async (request, response) => {
  if (!request.user.isAuthenticated) {
    response.status(401).json({ message: 'Non autorisé' });

    return;
  }

  const client = await logtoClient.createNodeClientFromNextApi(request, response);

  // Les IDs d’organisation sont stockés dans les revendications du jeton d’identifiant de l'utilisateur
  const { organizations = [] } = await client.getIdTokenClaims();

  const organizationTokens = await Promise.all(
    organizations.map(async (organizationId) => client.getOrganizationToken(organizationId))
  );

  const organizationClaims = await Promise.all(
    organizations.map(async (organizationId) => client.getOrganizationTokenClaims(organizationId))
  );

  // Faites des choses avec le jeton d’organisation et / ou les revendications

  response.json({
    organizations,
  });
});
```
