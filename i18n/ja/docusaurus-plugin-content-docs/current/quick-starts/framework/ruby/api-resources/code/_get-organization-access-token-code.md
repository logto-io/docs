```ruby
token = @client.access_token(organization_id: "organization_id")
```

#### 組織 API リソース

組織内の API リソースのアクセス トークンを取得するには、`access_token` メソッドを使用し、API リソースと組織 ID の両方をパラメーターとして指定します：

```ruby
token = @client.access_token(
  api_resource: "https://shopping.your-app.com/api",
  organization_id: "organization_id"
)
```
