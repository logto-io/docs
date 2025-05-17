```ruby
require "logto/client"

@client = LogtoClient.new(
  config: LogtoClient::Config.new(
    # ...outras configurações
    # highlight-start
    scopes: ["shopping:read", "shopping:write", "store:read", "store:write"],
    resources: ["https://shopping.your-app.com/api", "https://store.your-app.com/api"]
    # highlight-end
  ),
  # ...outras configurações
)
```
