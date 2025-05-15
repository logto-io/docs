```js
const isAuthenticated = await logtoClient.isAuthenticated();

if (isAuthenticated) {
  (async () => {
    const token = await logtoClient.getAccessToken();
    console.log(token);
  })();
}
```
