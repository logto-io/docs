```ts title="views/OrganizationsView.vue"
import { useLogto } from '@logto/vue';
import { onMounted, ref } from 'vue';

const { getOrganizationToken, getOrganizationTokenClaims, getIdTokenClaims } = useLogto();
const organizationIds = ref<string[]>();

onMounted(async () => {
  const claims = await getIdTokenClaims();

  console.log('การอ้างสิทธิ์ของโทเค็น ID (ID token claims)', claims);
  organizationIds.value = claims?.organizations;
});

const onClickFetchOrganizationToken = async (organizationId: string) => {
  console.log('โทเค็นดิบ (raw token)', await getOrganizationToken(organizationId));
  console.log('การอ้างสิทธิ์ (claims)', await getOrganizationTokenClaims(organizationId));
};
```

```html
<template>
  <ul>
    <li v-for="organizationId of organizationIds" v-bind:key="organizationId">
      <span>{{ organizationId }}</span>
      <button type="button" @click="onClickFetchOrganizationToken(organizationId)">
        ดึงโทเค็น (ดูที่คอนโซล)
      </button>
    </li>
  </ul>
</template>
```
