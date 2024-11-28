```html title="index.vue"
<script setup lang="ts">
  // Un composable pour accéder au client Logto
  const client = useLogtoClient();
  // Rendre le jeton disponible globalement
  const accessToken = useState<string | undefined>('access-token');

  // Appeler une fois côté serveur
  await callOnce(async () => {
    if (!client) {
      throw new Error("Le client Logto n'est pas disponible");
    }

    if (!(await client.isAuthenticated())) {
      return;
    }

    try {
      // highlight-next-line
      accessToken.value = await client.getAccessToken('https://shopping.your-app.com/api');
    } catch (error) {
      console.error("Échec de l'obtention du jeton d’accès", error);
    }
  });
</script>
```
