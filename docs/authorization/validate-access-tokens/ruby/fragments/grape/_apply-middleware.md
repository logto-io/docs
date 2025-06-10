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
        # Access auth information from auth helper
        { auth: auth.to_h }
      end
    end
  end

  # Public endpoint (not protected)
  get :public do
    { message: "Public endpoint" }
  end
end
```

```ruby title="config.ru"
require_relative 'api'

run API
```
