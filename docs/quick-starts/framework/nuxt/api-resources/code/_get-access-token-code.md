```html title="index.vue"
<script setup lang="ts">
  // A composable to access Logto client
  const client = useLogtoClient();
  // Make the token available globally
  const accessToken = useState<string | undefined>('access-token');

  // Call once in the server side
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
