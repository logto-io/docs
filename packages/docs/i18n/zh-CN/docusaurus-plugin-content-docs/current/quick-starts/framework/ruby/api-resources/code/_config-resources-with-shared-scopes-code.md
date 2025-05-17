```ruby
require "logto/client"

@client = LogtoClient.new(
  config: LogtoClient::Config.new(
    # ...other configurations
    # highlight-start
    scopes: ["read", "write"],
    resources: ["https://shopping.your-app.com/api", "https://store.your-app.com/api"]
    # highlight-end
  ),
  # ...other configurations
)
```
