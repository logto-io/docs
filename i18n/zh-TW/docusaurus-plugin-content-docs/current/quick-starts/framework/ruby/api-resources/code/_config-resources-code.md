```ruby
require "logto/client"

@client = LogtoClient.new(
  config: LogtoClient::Config.new(
    # ...其他配置
    # highlight-next-line
    resources: ["https://shopping.your-app.com/api", "https://store.your-app.com/api"] # 新增 API 資源 (API resources)
  ),
  # ...其他配置
)
```
