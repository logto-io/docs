```ruby title="app/controllers/application_controller.rb"
class ApplicationController < ActionController::API # Para aplicaciones solo API
# class ApplicationController < ActionController::Base # Para aplicaciones Rails completas
  include JwtAuthentication
end
```

```ruby title="app/controllers/api/protected_controller.rb"
class Api::ProtectedController < ApplicationController
  before_action :verify_access_token

  def index
    # Accede a la información de autenticación desde @auth
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
