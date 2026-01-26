```ruby
require "logto/client"

@client = LogtoClient.new(
  config: LogtoClient::Config.new(
    # ...他の設定
    # highlight-start
    scopes: ["read", "write"],
    resources: ["https://shopping.your-app.com/api", "https://store.your-app.com/api"]
    # highlight-end
  ),
  # ...他の設定
)
```
