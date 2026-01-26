```ruby
token = @client.access_token(organization_id: "organization_id")
```

#### ทรัพยากร API ขององค์กร (Organization API resources) \{#organization-api-resources}

หากต้องการดึงโทเค็นการเข้าถึง (access token) สำหรับทรัพยากร API ในองค์กร คุณสามารถใช้เมธอด `access_token` พร้อมทั้งระบุทั้งทรัพยากร API และรหัสองค์กรเป็นพารามิเตอร์:

```ruby
token = @client.access_token(
  api_resource: "https://shopping.your-app.com/api",
  organization_id: "organization_id"
)
```
