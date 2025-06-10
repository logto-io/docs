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
        # 認証 (Authentication) ヘルパーから認証情報へアクセス
        { auth: auth.to_h }
      end
    end
  end

  # 公開エンドポイント（保護されていません）
  get :public do
    { message: "公開エンドポイント" }
  end
end
```

```ruby title="config.ru"
require_relative 'api'

run API
```
