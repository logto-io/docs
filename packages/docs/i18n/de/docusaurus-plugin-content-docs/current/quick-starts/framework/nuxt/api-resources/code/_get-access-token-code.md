```html title="index.vue"
<script setup lang="ts">
  // Ein Composable, um auf den Logto-Client zuzugreifen
  const client = useLogtoClient();
  // Das Zugangstoken global verfügbar machen
  const accessToken = useState<string | undefined>('access-token');

  // Einmal auf der Serverseite aufrufen
  await callOnce(async () => {
    if (!client) {
      throw new Error('Logto client is not available');
    }

    if (!(await client.isAuthenticated())) {
      return;
    }

    try {
      // highlight-next-line
      accessToken.value = await client.getAccessToken('https://shopping.your-app.com/api');
    } catch (error) {
      console.error('Failed to get access token', error);
    }
  });
</script>
```
