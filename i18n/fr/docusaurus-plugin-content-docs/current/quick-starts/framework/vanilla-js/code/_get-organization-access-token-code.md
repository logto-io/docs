```js title="index.js"
// Obtenez les organizationIds à partir des userInfo

const claims = await logtoClient.getIdTokenClaims();
const organizationIds = claims.organizations;

/**
 * Ou à partir des revendications du jeton d’identifiant
 *
 * const claims = await logtoClient.getIdTokenClaims();
 * const organizationIds = claims.organizations;
 */

// Obtenez le jeton d’accès de l’organisation
if (organizationIds.length > 0) {
  const organizationId = organizationIds[0];
  const organizationAccessToken = await logtoClient.getOrganizationToken(organizationId);
  console.log('Jeton d’accès de l’organisation', organizationAccessToken);
}
```
