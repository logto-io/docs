```ruby
require "logto/core"
require "logto/client"

@client = LogtoClient.new(
  config: LogtoClient::Config.new(
    # ...autres configurations
    # highlight-next-line
    scopes: [LogtoCore::USER_SCOPE[:organizations]]
  ),
  # ...autres configurations
)
```
