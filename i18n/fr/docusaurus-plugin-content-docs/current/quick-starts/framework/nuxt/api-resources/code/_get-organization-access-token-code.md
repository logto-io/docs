import Availability from '@components/Availability';

```ts title="index.vue"
const token = await client.getOrganizationToken(organizationId);
```

#### Ressources API d’organisation

Pour récupérer un jeton d’accès pour une ressource API dans une organisation, vous pouvez utiliser la méthode `getAccessToken` avec à la fois la ressource API et l’identifiant de l’organisation comme paramètres :

```ts title="index.vue"
const accessToken = await client.getAccessToken(
  'https://shopping.your-app.com/api',
  organizationId
);
```
