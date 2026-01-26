```js title="index.js"
// 从 userInfo 获取 organizationIds

const claims = await logtoClient.getIdTokenClaims();
const organizationIds = claims.organizations;

/**
 * 或者从 ID 令牌 (ID token) 声明 (claims) 中获取
 *
 * const claims = await logtoClient.getIdTokenClaims();
 * const organizationIds = claims.organizations;
 */

// 获取组织令牌 (Organization token)
if (organizationIds.length > 0) {
  const organizationId = organizationIds[0];
  const organizationAccessToken = await logtoClient.getOrganizationToken(organizationId);
  console.log('组织令牌 (Organization access token)', organizationAccessToken);
}
```
