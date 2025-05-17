import Availability from '@components/Availability';

```ts title="index.vue"
const token = await client.getOrganizationToken(organizationId);
```

#### 조직 API 리소스 {#organization-api-resources}

조직 내 API 리소스에 대한 액세스 토큰을 가져오려면, `getAccessToken` 메서드를 API 리소스와 조직 ID를 매개변수로 사용하여 호출할 수 있습니다:

```ts title="index.vue"
const accessToken = await client.getAccessToken(
  'https://shopping.your-app.com/api',
  organizationId
);
```
