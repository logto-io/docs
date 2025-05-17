```go
logtoConfig := &client.LogtoConfig{
    // ...otros configs
    // highlight-start
    Scopes:    []string{"read", "write"},
    Resources: []string{"https://shopping.your-app.com/api", "https://store.your-app.com/api"},
    // highlight-end
}
```
