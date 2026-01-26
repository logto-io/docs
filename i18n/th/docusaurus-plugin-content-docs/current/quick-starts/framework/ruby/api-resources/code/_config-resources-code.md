```ruby
require "logto/client"

@client = LogtoClient.new(
  config: LogtoClient::Config.new(
    # ...การตั้งค่าอื่น ๆ
    # highlight-next-line
    resources: ["https://shopping.your-app.com/api", "https://store.your-app.com/api"] # เพิ่มทรัพยากร API
  ),
  # ...การตั้งค่าอื่น ๆ
)
```
