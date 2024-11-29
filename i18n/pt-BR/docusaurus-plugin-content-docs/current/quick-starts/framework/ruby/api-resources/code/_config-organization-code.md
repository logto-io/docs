```ruby
require "logto/core"
require "logto/client"

@client = LogtoClient.new(
  config: LogtoClient::Config.new(
    # ...outras configurações
    # highlight-next-line
    scopes: [LogtoCore::USER_SCOPE[:organizations]]
  ),
  # ...outras configurações
)
```
