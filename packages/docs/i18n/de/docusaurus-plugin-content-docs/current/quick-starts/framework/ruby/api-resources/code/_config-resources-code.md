```ruby
require "logto/client"

@client = LogtoClient.new(
  config: LogtoClient::Config.new(
    # ...andere Konfigurationen
    # highlight-next-line
    resources: ["https://shopping.your-app.com/api", "https://store.your-app.com/api"] # API-Ressourcen hinzufügen
  ),
  # ...andere Konfigurationen
)
```
