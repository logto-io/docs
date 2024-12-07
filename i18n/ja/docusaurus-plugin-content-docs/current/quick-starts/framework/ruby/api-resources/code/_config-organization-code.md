```ruby
require "logto/core"
require "logto/client"

@client = LogtoClient.new(
  config: LogtoClient::Config.new(
    # ...他の設定
    # highlight-next-line
    scopes: [LogtoCore::USER_SCOPE[:organizations]]
  ),
  # ...他の設定
)
```
