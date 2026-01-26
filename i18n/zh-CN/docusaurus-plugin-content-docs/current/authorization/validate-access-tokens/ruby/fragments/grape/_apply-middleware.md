```ruby title="api.rb"
require 'grape'
require_relative 'auth_helpers'
require_relative 'auth_constants'
require_relative 'auth_info'
require_relative 'authorization_error'
require_relative 'jwt_validator'

class API < Grape::API
  format :json

  helpers GrapeAuthHelpers

  namespace :api do
    namespace :protected do
      before do
        authenticate_user!
      end

      get do
        # 从认证 (Authentication) 辅助方法中获取认证 (Authentication) 信息
        { auth: auth.to_h }
      end
    end
  end

  # 公共端点（未受保护）
  get :public do
    { message: "公共端点" }
  end
end
```

```ruby title="config.ru"
require_relative 'api'

run API
```
