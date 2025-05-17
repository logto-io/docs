```ts title="views/OrganizationsView.vue"
import { useLogto } from '@logto/vue';
import { onMounted, ref } from 'vue';

const { getOrganizationToken, getOrganizationTokenClaims, getIdTokenClaims } = useLogto();
const organizationIds = ref<string[]>();

onMounted(async () => {
  const claims = await getIdTokenClaims();

  console.log('Reivindicações do token de ID', claims);
  organizationIds.value = claims?.organizations;
});

const onClickFetchOrganizationToken = async (organizationId: string) => {
  console.log('token bruto', await getOrganizationToken(organizationId));
  console.log('reivindicações', await getOrganizationTokenClaims(organizationId));
};
```

```html
<template>
  <ul>
    <li v-for="organizationId of organizationIds" v-bind:key="organizationId">
      <span>{{ organizationId }}</span>
      <button type="button" @click="onClickFetchOrganizationToken(organizationId)">
        buscar token (veja o console)
      </button>
    </li>
  </ul>
</template>
```
