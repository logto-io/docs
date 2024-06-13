```ruby
require "logto/client"

@client = LogtoClient.new(
  config: LogtoClient::Config.new(
    # ...other configurations
    # highlight-next-line
    scopes: ["email", "phone"] # Add more scopes as needed
  ),
  # ...other configurations
)
```
