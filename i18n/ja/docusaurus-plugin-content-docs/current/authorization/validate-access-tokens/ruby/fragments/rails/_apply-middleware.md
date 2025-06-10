```ruby title="app/controllers/application_controller.rb"
class ApplicationController < ActionController::API # API 専用アプリの場合
# class ApplicationController < ActionController::Base # フル Rails アプリの場合
  include JwtAuthentication
end
```

```ruby title="app/controllers/api/protected_controller.rb"
class Api::ProtectedController < ApplicationController
  before_action :verify_access_token

  def index
    # @auth から認証情報へアクセス
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
