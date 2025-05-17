```ruby
token = @client.access_token(organization_id: "organization_id")
```

#### 組織 API 資源 (Organization API resources) {#organization-api-resources}

若要為組織中的 API 資源取得存取權杖 (Access token)，可以使用 `access_token` 方法，並將 API 資源和組織 ID 作為參數：

```ruby
token = @client.access_token(
  api_resource: "https://shopping.your-app.com/api",
  organization_id: "organization_id"
)
```
