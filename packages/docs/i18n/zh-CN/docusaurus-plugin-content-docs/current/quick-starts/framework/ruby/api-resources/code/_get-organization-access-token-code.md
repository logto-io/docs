```ruby
token = @client.access_token(organization_id: "organization_id")
```

#### 组织 (Organization) API 资源 {#organization-api-resources}

要获取组织中 API 资源的访问令牌 (Access token)，可以使用 `access_token` 方法，将 API 资源和组织 ID 作为参数：

```ruby
token = @client.access_token(
  api_resource: "https://shopping.your-app.com/api",
  organization_id: "organization_id"
)
```
