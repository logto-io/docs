```js
const isAuthenticated = await logtoClient.isAuthenticated();

if (isAuthenticated) {
  // ถ้าได้รับการยืนยันตัวตนแล้ว ให้ดึงโทเค็นการเข้าถึง (access token)
  (async () => {
    const token = await logtoClient.getAccessToken();
    console.log(token); // แสดงโทเค็นการเข้าถึงในคอนโซล
  })();
}
```
