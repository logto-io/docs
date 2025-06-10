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
        # Acesse as informações de autenticação a partir do helper de autenticação (Access auth information from auth helper)
        { auth: auth.to_h }
      end
    end
  end

  # Endpoint público (não protegido) (Public endpoint (not protected))
  get :public do
    { message: "Endpoint público (Public endpoint)" }
  end
end
```

```ruby title="config.ru"
require_relative 'api'

run API
```
