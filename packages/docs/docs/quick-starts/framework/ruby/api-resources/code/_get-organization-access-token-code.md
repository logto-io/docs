```ruby
token = @client.access_token(organization_id: "organization_id")
```

#### Organization API resources {#organization-api-resources}

To fetch an access token for an API resource in an organization, you can use the `access_token` method with both the API resource and organization ID as parameters:

```ruby
token = @client.access_token(
  api_resource: "https://shopping.your-app.com/api",
  organization_id: "organization_id"
)
```
