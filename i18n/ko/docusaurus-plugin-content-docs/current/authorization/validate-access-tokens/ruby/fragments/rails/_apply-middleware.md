```ruby title="app/controllers/application_controller.rb"
class ApplicationController < ActionController::API # API 전용 앱의 경우
# class ApplicationController < ActionController::Base # 전체 Rails 앱의 경우
  include JwtAuthentication
end
```

```ruby title="app/controllers/api/protected_controller.rb"
class Api::ProtectedController < ApplicationController
  before_action :verify_access_token

  def index
    # @auth에서 인증 (Authentication) 정보를 가져옵니다
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
