```js title="index.js"
// ดึง organizationIds จาก userInfo

const claims = await logtoClient.getIdTokenClaims();
const organizationIds = claims.organizations;

/**
 * หรือจากการอ้างสิทธิ์ในโทเค็น ID
 *
 * const claims = await logtoClient.getIdTokenClaims();
 * const organizationIds = claims.organizations;
 */

// ดึงโทเค็นองค์กร (Organization token)
if (organizationIds.length > 0) {
  const organizationId = organizationIds[0];
  const organizationAccessToken = await logtoClient.getOrganizationToken(organizationId);
  console.log('โทเค็นองค์กร (Organization access token)', organizationAccessToken);
}
```
