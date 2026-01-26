```ruby title="app/controllers/application_controller.rb"
class ApplicationController < ActionController::API # Für API-only-Apps
# class ApplicationController < ActionController::Base # Für vollständige Rails-Apps
  include JwtAuthentication
end
```

```ruby title="app/controllers/api/protected_controller.rb"
class Api::ProtectedController < ApplicationController
  before_action :verify_access_token

  def index
    # Zugriff auf Auth-Informationen über @auth
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
