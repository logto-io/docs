```html title="index.vue"
<script setup lang="ts">
  // Logto 클라이언트에 접근하기 위한 composable
  const client = useLogtoClient();
  // 토큰을 전역적으로 사용 가능하게 설정
  const accessToken = useState<string | undefined>('access-token');

  // 서버 측에서 한 번 호출
  await callOnce(async () => {
    if (!client) {
      throw new Error('Logto 클라이언트를 사용할 수 없습니다');
    }

    if (!(await client.isAuthenticated())) {
      return;
    }

    try {
      // highlight-next-line
      accessToken.value = await client.getAccessToken('https://shopping.your-app.com/api');
    } catch (error) {
      console.error('액세스 토큰을 가져오지 못했습니다', error);
    }
  });
</script>
```
