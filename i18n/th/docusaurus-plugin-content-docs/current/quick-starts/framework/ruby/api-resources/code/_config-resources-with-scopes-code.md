```ruby
require "logto/client"

@client = LogtoClient.new(
  config: LogtoClient::Config.new(
    # ...การตั้งค่าอื่น ๆ
    # highlight-start
    scopes: ["shopping:read", "shopping:write", "store:read", "store:write"], # ขอบเขต (scopes) ที่ต้องการ
    resources: ["https://shopping.your-app.com/api", "https://store.your-app.com/api"] # ทรัพยากร API (resources) ที่ต้องการ
    # highlight-end
  ),
  # ...การตั้งค่าอื่น ๆ
)
```
