```ruby
require "logto/core"
require "logto/client"

@client = LogtoClient.new(
  config: LogtoClient::Config.new(
    # ...otras configuraciones
    # highlight-next-line
    scopes: [LogtoCore::USER_SCOPE[:organizations]]
  ),
  # ...otras configuraciones
)
```
