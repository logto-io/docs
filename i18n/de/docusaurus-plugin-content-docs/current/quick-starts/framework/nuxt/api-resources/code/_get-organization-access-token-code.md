import Availability from '@components/Availability';

```ts title="index.vue"
const token = await client.getOrganizationToken(organizationId);
```

#### Organisations-API-Ressourcen {#organization-api-resources}

Um ein Zugangstoken für eine API-Ressource in einer Organisation abzurufen, kannst du die Methode `getAccessToken` mit sowohl der API-Ressource als auch der Organisations-ID als Parameter verwenden:

```ts title="index.vue"
const accessToken = await client.getAccessToken(
  'https://shopping.your-app.com/api',
  organizationId
);
```
