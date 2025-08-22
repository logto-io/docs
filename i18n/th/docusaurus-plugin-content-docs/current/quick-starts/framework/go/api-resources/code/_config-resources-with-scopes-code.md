```go
logtoConfig := &client.LogtoConfig{
    // ...other configs
    // highlight-start
    // ขอบเขต (Scopes) ที่ต้องการ เช่น อ่าน/เขียนข้อมูลการช็อปปิ้งและร้านค้า
    Scopes:    []string{"shopping:read", "shopping:write", "store:read", "store:write"},
    // ทรัพยากร (Resources) API ที่ต้องการเข้าถึง
    Resources: []string{"https://shopping.your-app.com/api", "https://store.your-app.com/api"},
    // highlight-end
}
```
