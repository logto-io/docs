```go
logtoConfig := &client.LogtoConfig{
    // ...other configs
    // highlight-start
    Portées:    []string{"read", "write"},
    Ressources: []string{"https://shopping.your-app.com/api", "https://store.your-app.com/api"},
    // highlight-end
}
```
