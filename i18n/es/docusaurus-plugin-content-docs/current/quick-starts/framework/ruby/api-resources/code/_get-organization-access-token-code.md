```ruby
token = @client.access_token(organization_id: "organization_id")
```

#### Recursos de API de la organización

Para obtener un token de acceso para un recurso de API en una organización, puedes usar el método `access_token` con ambos, el recurso de API y el ID de la organización, como parámetros:

```ruby
token = @client.access_token(
  api_resource: "https://shopping.your-app.com/api",
  organization_id: "organization_id"
)
```
