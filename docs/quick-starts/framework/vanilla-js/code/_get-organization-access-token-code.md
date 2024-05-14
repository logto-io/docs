```js
// Get organizationIds from the userInfo

const userInfo = await logtoClient.fetchUserInfo();
const organizationIds = userInfo.organizations;

/**
 * Or from the ID token claims
 *
 * const claims = await logtoClient.getIdTokenClaims();
 * const organizationIds = claims.organizations;
 */

// Get the organization access token
if (organizationIds.length > 0) {
  const organizationId = organizationIds[0];
  const organizationAccessToken = await logtoClient.getOrganizationToken(organizationId);
  console.log('Organization access token', organizationAccessToken);
}
```
