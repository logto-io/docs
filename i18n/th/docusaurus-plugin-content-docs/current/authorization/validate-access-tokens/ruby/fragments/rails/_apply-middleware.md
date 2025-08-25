```ruby title="app/controllers/application_controller.rb"
class ApplicationController < ActionController::API # สำหรับแอปที่เป็น API เท่านั้น
# class ApplicationController < ActionController::Base # สำหรับแอป Rails เต็มรูปแบบ
  include JwtAuthentication
end
```

```ruby title="app/controllers/api/protected_controller.rb"
class Api::ProtectedController < ApplicationController
  before_action :verify_access_token

  def index
    # เข้าถึงข้อมูลการยืนยันตัวตนจาก @auth
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
