```go
logtoConfig := &client.LogtoConfig{
    // ...other configs
    // highlight-start
    // ขอบเขต (Scopes) ที่ร้องขอ: "read", "write"
    Scopes:    []string{"read", "write"},
    // ทรัพยากร API (Resources) ที่ร้องขอ
    Resources: []string{"https://shopping.your-app.com/api", "https://store.your-app.com/api"},
    // highlight-end
}
```
