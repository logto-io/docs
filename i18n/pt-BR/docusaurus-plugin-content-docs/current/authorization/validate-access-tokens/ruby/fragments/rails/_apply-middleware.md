```ruby title="app/controllers/application_controller.rb"
class ApplicationController < ActionController::API # Para aplicativos apenas de API
# class ApplicationController < ActionController::Base # Para aplicativos Rails completos
  include JwtAuthentication
end
```

```ruby title="app/controllers/api/protected_controller.rb"
class Api::ProtectedController < ApplicationController
  before_action :verify_access_token

  def index
    # Acesse as informações de autenticação a partir de @auth
    render json: { auth: @auth.to_h }
  end
end
```

```ruby title="config/routes.rb"
Rails.application.routes.draw do
  namespace :api do
    resources :protected, only: [:index]
  end
end
```
