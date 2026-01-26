```html title="index.vue"
<script setup lang="ts">
  // คอมโพสเอเบิลสำหรับเข้าถึง Logto client
  const client = useLogtoClient();
  // ทำให้โทเค็นการเข้าถึง (access token) ใช้งานได้ทั่วทั้งแอป
  const accessToken = useState<string | undefined>('access-token');

  // เรียกใช้หนึ่งครั้งในฝั่งเซิร์ฟเวอร์
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
      console.error('ไม่สามารถรับโทเค็นการเข้าถึง (access token) ได้', error);
    }
  });
</script>
```
