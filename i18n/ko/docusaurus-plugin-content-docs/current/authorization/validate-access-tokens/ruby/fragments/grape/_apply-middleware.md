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
        # 인증 헬퍼에서 인증 (Authentication) 정보에 접근
        { auth: auth.to_h }
      end
    end
  end

  # 공개 엔드포인트 (보호되지 않음)
  get :public do
    { message: "공개 엔드포인트" }
  end
end
```

```ruby title="config.ru"
require_relative 'api'

run API
```
