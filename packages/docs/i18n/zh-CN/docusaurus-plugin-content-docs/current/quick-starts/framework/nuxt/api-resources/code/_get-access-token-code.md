```html title="index.vue"
<script setup lang="ts">
  // 用于访问 Logto 客户端的组合式函数
  const client = useLogtoClient();
  // 使令牌在全局可用
  const accessToken = useState<string | undefined>('access-token');

  // 在服务器端调用一次
  await callOnce(async () => {
    if (!client) {
      throw new Error('Logto 客户端不可用');
    }

    if (!(await client.isAuthenticated())) {
      return;
    }

    try {
      // highlight-next-line
      accessToken.value = await client.getAccessToken('https://shopping.your-app.com/api');
    } catch (error) {
      console.error('获取访问令牌 (access token) 失败', error);
    }
  });
</script>
```
