```js title="index.js"
// Holen Sie sich organizationIds aus den userInfo

const claims = await logtoClient.getIdTokenClaims();
const organizationIds = claims.organizations;

/**
 * Oder aus den ID-Token-Ansprüchen
 *
 * const claims = await logtoClient.getIdTokenClaims();
 * const organizationIds = claims.organizations;
 */

// Holen Sie sich das Organisationstoken
if (organizationIds.length > 0) {
  const organizationId = organizationIds[0];
  const organizationAccessToken = await logtoClient.getOrganizationToken(organizationId);
  console.log('Organisationstoken', organizationAccessToken);
}
```
