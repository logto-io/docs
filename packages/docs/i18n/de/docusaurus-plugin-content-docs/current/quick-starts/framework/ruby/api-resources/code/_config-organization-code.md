```ruby
require "logto/core"
require "logto/client"

@client = LogtoClient.new(
  config: LogtoClient::Config.new(
    # ...andere Konfigurationen
    # highlight-next-line
    scopes: [LogtoCore::USER_SCOPE[:organizations]]
  ),
  # ...andere Konfigurationen
)
```
