```ruby
token = @client.access_token(organization_id: "organization_id")
```

#### Recursos de API da organização (Organization API resources) {#organization-api-resources}

Para obter um token de acesso para um recurso de API em uma organização, você pode usar o método `access_token` com ambos o recurso de API e o ID da organização como parâmetros:

```ruby
token = @client.access_token(
  api_resource: "https://shopping.your-app.com/api",
  organization_id: "organization_id"
)
```
