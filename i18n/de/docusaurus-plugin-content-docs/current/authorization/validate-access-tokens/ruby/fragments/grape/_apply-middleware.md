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
        # Zugriff auf Authentifizierungsinformationen aus dem Auth-Helper
        { auth: auth.to_h }
      end
    end
  end

  # Öffentlicher Endpunkt (nicht geschützt)
  get :public do
    { message: "Öffentlicher Endpunkt" }
  end
end
```

```ruby title="config.ru"
require_relative 'api'

run API
```
