```ruby title="app.rb"
require 'sinatra'
require 'json'
require_relative 'auth_middleware'
require_relative 'auth_constants'
require_relative 'auth_info'
require_relative 'authorization_error'
require_relative 'auth_helpers'
require_relative 'jwt_validator'

# 套用中介軟體 (middleware)
use AuthMiddleware

get '/api/protected' do
  content_type :json

  # 從 env 取得驗證 (Authentication) 資訊
  auth = env['auth']
  { auth: auth.to_h }.to_json
end

# 公開端點（未經中介軟體保護）
get '/' do
  content_type :json
  { message: "Public endpoint" }.to_json
end
```
