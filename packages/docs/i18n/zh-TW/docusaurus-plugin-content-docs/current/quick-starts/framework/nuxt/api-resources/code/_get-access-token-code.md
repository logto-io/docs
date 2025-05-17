```html title="index.vue"
<script setup lang="ts">
  // 用於存取 Logto 客戶端的可組合函式
  const client = useLogtoClient();
  // 使權杖在全域可用
  const accessToken = useState<string | undefined>('access-token');

  // 在伺服器端呼叫一次
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
