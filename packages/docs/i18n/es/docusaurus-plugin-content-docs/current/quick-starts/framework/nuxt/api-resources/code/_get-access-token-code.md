```html title="index.vue"
<script setup lang="ts">
  // Un composable para acceder al cliente Logto
  const client = useLogtoClient();
  // Hacer que el token esté disponible globalmente
  const accessToken = useState<string | undefined>('access-token');

  // Llamar una vez en el lado del servidor
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
