```ts title="views/OrganizationsView.vue"
import { useLogto } from '@logto/vue';
import { onMounted, ref } from 'vue';

const { getOrganizationToken, getOrganizationTokenClaims, getIdTokenClaims } = useLogto();
const organizationIds = ref<string[]>();

onMounted(async () => {
  const claims = await getIdTokenClaims();

  console.log('Revendications du jeton d’identifiant', claims);
  organizationIds.value = claims?.organizations;
});

const onClickFetchOrganizationToken = async (organizationId: string) => {
  console.log('jeton brut', await getOrganizationToken(organizationId));
  console.log('revendications', await getOrganizationTokenClaims(organizationId));
};
```

```html
<template>
  <ul>
    <li v-for="organizationId of organizationIds" v-bind:key="organizationId">
      <span>{{ organizationId }}</span>
      <button type="button" @click="onClickFetchOrganizationToken(organizationId)">
        récupérer le jeton (voir la console)
      </button>
    </li>
  </ul>
</template>
```
