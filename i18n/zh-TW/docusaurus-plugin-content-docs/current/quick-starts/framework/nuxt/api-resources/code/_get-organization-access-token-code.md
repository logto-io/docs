import Availability from '@components/Availability';

```ts title="index.vue"
const token = await client.getOrganizationToken(organizationId);
```

#### 組織 API 資源 (Organization API resources) {#organization-api-resources}

若要為組織中的 API 資源獲取存取權杖 (Access token)，可以使用 `getAccessToken` 方法，並將 API 資源和組織 ID 作為參數：

```ts title="index.vue"
const accessToken = await client.getAccessToken(
  'https://shopping.your-app.com/api',
  organizationId
);
```
