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
        # 從驗證 (Authentication) 輔助方法取得驗證資訊
        { auth: auth.to_h }
      end
    end
  end

  # 公開端點（未受保護）
  get :public do
    { message: "公開端點 (Public endpoint)" }
  end
end
```

```ruby title="config.ru"
require_relative 'api'

run API
```
