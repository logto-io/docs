```ruby
require "logto/client"

@client = LogtoClient.new(
  config: LogtoClient::Config.new(
    # ...การตั้งค่าอื่น ๆ
    # highlight-start
    scopes: ["read", "write"], # ขอบเขตที่ร้องขอ
    resources: ["https://shopping.your-app.com/api", "https://store.your-app.com/api"] # ทรัพยากร API ที่ร้องขอ
    # highlight-end
  ),
  # ...การตั้งค่าอื่น ๆ
)
```
