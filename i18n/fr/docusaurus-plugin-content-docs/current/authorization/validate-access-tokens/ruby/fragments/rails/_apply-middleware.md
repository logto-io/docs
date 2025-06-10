```ruby title="app/controllers/application_controller.rb"
class ApplicationController < ActionController::API # Pour les applications API uniquement
# class ApplicationController < ActionController::Base # Pour les applications Rails complètes
  include JwtAuthentication
end
```

```ruby title="app/controllers/api/protected_controller.rb"
class Api::ProtectedController < ApplicationController
  before_action :verify_access_token

  def index
    # Accéder aux informations d'authentification depuis @auth
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
