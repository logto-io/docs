```go
logtoConfig := &client.LogtoConfig{
    // ...other configs
    // highlight-next-line
    Scopes: []string{core.UserScopeOrganizations},
}
```
