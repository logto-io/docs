```js
import { UserScope } from 'https://esm.run/@logto/browser';

const isAuthenticated = await logtoClient.isAuthenticated();

(async () => {
  if (!isAuthenticated) {
    return;
  }
  const claims = await logtoClient.getIdTokenClaims();

  console.log('การอ้างสิทธิ์ของโทเค็น ID (ID token claims):', claims);
  console.log('รหัสองค์กร (Organization IDs):', claims.organizations);

  // สมมติว่ามีอย่างน้อยหนึ่งองค์กร ให้ใช้ตัวแรก
  const organizationId = claims.organizations[0];
  const token = await logtoClient.getOrganizationToken(organizationId);

  console.log('โทเค็นการเข้าถึงขององค์กร (Organization access token):', token);
})();
```
