```js title="index.js"
// userInfo から organizationIds を取得

const claims = await logtoClient.getIdTokenClaims();
const organizationIds = claims.organizations;

/**
 * または ID トークンのクレームから
 *
 * const claims = await logtoClient.getIdTokenClaims();
 * const organizationIds = claims.organizations;
 */

// 組織トークンを取得
if (organizationIds.length > 0) {
  const organizationId = organizationIds[0];
  const organizationAccessToken = await logtoClient.getOrganizationToken(organizationId);
  console.log('組織トークン', organizationAccessToken);
}
```
