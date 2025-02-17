```ruby
token = @client.access_token(organization_id: "organization_id")
```

#### Ресурсы API организации \{#organization-api-resources}

Чтобы получить токен доступа для ресурса API в организации, вы можете использовать метод `access_token` с ресурсом API и ID организации в качестве параметров:

```ruby
token = @client.access_token(
  api_resource: "https://shopping.your-app.com/api",
  organization_id: "organization_id"
)
```
