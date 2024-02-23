```ts
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
    accessToken.value = await client.getAccessToken();
  } catch (error) {
    console.error('Failed to get access token', error);
  }
});
```
