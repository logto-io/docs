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
        # Accéder aux informations d'authentification depuis l'assistant d'authentification
        { auth: auth.to_h }
      end
    end
  end

  # Point de terminaison public (non protégé)
  get :public do
    { message: "Point de terminaison public" }
  end
end
```

```ruby title="config.ru"
require_relative 'api'

run API
```
