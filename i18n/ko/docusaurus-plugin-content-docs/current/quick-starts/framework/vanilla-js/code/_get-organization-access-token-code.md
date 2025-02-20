```js title="index.js"
// 사용자 정보에서 organizationIds 가져오기

const claims = await logtoClient.getIdTokenClaims();
const organizationIds = claims.organizations;

/**
 * 또는 ID 토큰 클레임에서 가져오기
 *
 * const claims = await logtoClient.getIdTokenClaims();
 * const organizationIds = claims.organizations;
 */

// 조직 액세스 토큰 가져오기
if (organizationIds.length > 0) {
  const organizationId = organizationIds[0];
  const organizationAccessToken = await logtoClient.getOrganizationToken(organizationId);
  console.log('조직 액세스 토큰', organizationAccessToken);
}
```
