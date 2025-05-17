```ruby
require "logto/client"

@client = LogtoClient.new(
  config: LogtoClient::Config.new(
    # ...other configurations
    # highlight-next-line
    resources: ["https://shopping.your-app.com/api", "https://store.your-app.com/api"] # API リソースを追加
  ),
  # ...other configurations
)
```
