import Availability from '@components/Availability';

```ts title="index.vue"
const token = await client.getOrganizationToken(organizationId);
```

#### ทรัพยากร API ขององค์กร (Organization API resources) {#organization-api-resources}

หากต้องการดึงโทเค็นการเข้าถึง (Access token) สำหรับทรัพยากร API ในองค์กร คุณสามารถใช้เมธอด `getAccessToken` พร้อมทั้งระบุทั้งทรัพยากร API และรหัสองค์กรเป็นพารามิเตอร์:

```ts title="index.vue"
const accessToken = await client.getAccessToken(
  'https://shopping.your-app.com/api',
  organizationId
);
```
