```ruby
require "logto/client"

@client = LogtoClient.new(
  config: LogtoClient::Config.new(
    # ...outras configurações
    # highlight-next-line
    resources: ["https://shopping.your-app.com/api", "https://store.your-app.com/api"] # Adicionar recursos de API
  ),
  # ...outras configurações
)
```
