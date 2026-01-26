```ruby
require "logto/core"
require "logto/client"

@client = LogtoClient.new(
  config: LogtoClient::Config.new(
    # ...การตั้งค่าอื่น ๆ
    # บรรทัดถัดไปเน้น
    scopes: [LogtoCore::USER_SCOPE[:organizations]]
  ),
  # ...การตั้งค่าอื่น ๆ
)
```
