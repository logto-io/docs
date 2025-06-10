```ruby title="app/controllers/application_controller.rb"
class ApplicationController < ActionController::API # 仅用于 API 应用
# class ApplicationController < ActionController::Base # 用于完整的 Rails 应用
  include JwtAuthentication
end
```

```ruby title="app/controllers/api/protected_controller.rb"
class Api::ProtectedController < ApplicationController
  before_action :verify_access_token

  def index
    # 从 @auth 获取认证 (Authentication) 信息
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
