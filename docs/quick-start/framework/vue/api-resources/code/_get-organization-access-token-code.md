```tsx
import { useLogto } from '@logto/vue';
import { onMounted, ref } from 'vue';

const { getOrganizationToken, getOrganizationTokenClaims, getIdTokenClaims } = useLogto();
const organizationIds = ref<string[]>();

onMounted(async () => {
  const claims = await getIdTokenClaims();

  console.log('ID token claims', claims);
  organizationIds.value = claims?.organizations;
});

const onClickFetchOrgToken = async (organizationId: string) => {
  console.log('raw token', await getOrganizationToken(organizationId));
  console.log('claims', await getOrganizationTokenClaims(organizationId));
};
```

```html
<template>
  <ul>
    <li v-for="organizationId of organizationIds" v-bind:key="organizationId">
      <span>{{ organizationId }}</span>
      <button type="button" @click="onClickFetchOrgToken(organizationId)">
        fetch token (see console)
      </button>
    </li>
  </ul>
</template>
```
