```js title="index.js"
// 從 userInfo 獲取 organizationIds

const claims = await logtoClient.getIdTokenClaims();
const organizationIds = claims.organizations;

/**
 * 或從 ID 權杖 (ID token) 宣告 (Claims) 中獲取
 *
 * const claims = await logtoClient.getIdTokenClaims();
 * const organizationIds = claims.organizations;
 */

// 獲取組織權杖 (Organization access token)
if (organizationIds.length > 0) {
  const organizationId = organizationIds[0];
  const organizationAccessToken = await logtoClient.getOrganizationToken(organizationId);
  console.log('組織權杖 (Organization access token)', organizationAccessToken);
}
```
