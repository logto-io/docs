```go
logtoConfig := &client.LogtoConfig{
    // ...other configs
    // highlight-start
    Scopes:    []string{"shopping:read", "shopping:write", "store:read", "store:write"},
    Resources: []string{"https://shopping.your-app.com/api", "https://store.your-app.com/api"},
    // highlight-end
}
```
