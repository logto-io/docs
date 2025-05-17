```ts title="views/OrganizationsView.vue"
import { useLogto } from '@logto/vue';
import { onMounted, ref } from 'vue';

const { getOrganizationToken, getOrganizationTokenClaims, getIdTokenClaims } = useLogto();
const organizationIds = ref<string[]>();

onMounted(async () => {
  const claims = await getIdTokenClaims();

  console.log('ID 令牌 (ID token) 声明 (claims)', claims);
  organizationIds.value = claims?.organizations;
});

const onClickFetchOrganizationToken = async (organizationId: string) => {
  console.log('原始令牌 (token)', await getOrganizationToken(organizationId));
  console.log('声明 (claims)', await getOrganizationTokenClaims(organizationId));
};
```

```html
<template>
  <ul>
    <li v-for="organizationId of organizationIds" v-bind:key="organizationId">
      <span>{{ organizationId }}</span>
      <button type="button" @click="onClickFetchOrganizationToken(organizationId)">
        获取令牌 (token) （查看控制台）
      </button>
    </li>
  </ul>
</template>
```
