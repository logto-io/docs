```js title="index.js"
// Obter organizationIds do userInfo

const claims = await logtoClient.getIdTokenClaims();
const organizationIds = claims.organizations;

/**
 * Ou dos claims do token de ID
 *
 * const claims = await logtoClient.getIdTokenClaims();
 * const organizationIds = claims.organizations;
 */

// Obter o token de acesso da organização
if (organizationIds.length > 0) {
  const organizationId = organizationIds[0];
  const organizationAccessToken = await logtoClient.getOrganizationToken(organizationId);
  console.log('Token de acesso da organização', organizationAccessToken);
}
```
