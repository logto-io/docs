```ruby title="app/controllers/application_controller.rb"
class ApplicationController < ActionController::API # 僅限 API 應用程式
# class ApplicationController < ActionController::Base # 完整 Rails 應用程式
  include JwtAuthentication
end
```

```ruby title="app/controllers/api/protected_controller.rb"
class Api::ProtectedController < ApplicationController
  before_action :verify_access_token

  def index
    # 從 @auth 取得驗證資訊
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
