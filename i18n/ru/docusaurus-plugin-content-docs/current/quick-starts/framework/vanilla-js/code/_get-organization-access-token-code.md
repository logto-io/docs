```js title="index.js"
// Получить organizationIds из userInfo

const claims = await logtoClient.getIdTokenClaims();
const organizationIds = claims.organizations;

/**
 * Или из утверждений ID токена
 *
 * const claims = await logtoClient.getIdTokenClaims();
 * const organizationIds = claims.organizations;
 */

// Получить токен доступа организации
if (organizationIds.length > 0) {
  const organizationId = organizationIds[0];
  const organizationAccessToken = await logtoClient.getOrganizationToken(organizationId);
  console.log('Токен доступа организации', organizationAccessToken);
}
```
