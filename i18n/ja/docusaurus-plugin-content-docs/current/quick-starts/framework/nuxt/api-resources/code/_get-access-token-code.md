```html title="index.vue"
<script setup lang="ts">
  // Logto クライアントにアクセスするためのコンポーザブル
  const client = useLogtoClient();
  // トークンをグローバルに利用可能にする
  const accessToken = useState<string | undefined>('access-token');

  // サーバーサイドで一度だけ呼び出す
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
