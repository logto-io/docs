```go
logtoConfig := &client.LogtoConfig{
    // ...other configs
    Scopes:    []string{"read", "write"},
    Resources: []string{"https://shopping.your-app.com/api", "https://store.your-app.com/api"},
}
```
