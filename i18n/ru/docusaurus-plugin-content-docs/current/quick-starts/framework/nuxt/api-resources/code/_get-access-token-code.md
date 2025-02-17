```html title="index.vue"
<script setup lang="ts">
  // Компонент для доступа к клиенту Logto
  const client = useLogtoClient();
  // Сделать токен доступным глобально
  const accessToken = useState<string | undefined>('access-token');

  // Вызвать один раз на стороне сервера
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
