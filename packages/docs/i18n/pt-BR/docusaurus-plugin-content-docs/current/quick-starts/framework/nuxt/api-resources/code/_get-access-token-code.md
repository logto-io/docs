```html title="index.vue"
<script setup lang="ts">
  // Um composable para acessar o cliente Logto
  const client = useLogtoClient();
  // Tornar o token disponível globalmente
  const accessToken = useState<string | undefined>('access-token');

  // Chamar uma vez no lado do servidor
  await callOnce(async () => {
    if (!client) {
      throw new Error('Cliente Logto não está disponível');
    }

    if (!(await client.isAuthenticated())) {
      return;
    }

    try {
      // highlight-next-line
      accessToken.value = await client.getAccessToken('https://shopping.your-app.com/api');
    } catch (error) {
      console.error('Falha ao obter token de acesso', error);
    }
  });
</script>
```
