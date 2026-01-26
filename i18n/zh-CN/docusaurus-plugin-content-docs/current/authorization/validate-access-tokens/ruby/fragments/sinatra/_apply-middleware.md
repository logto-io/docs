```ruby title="app.rb"
require 'sinatra'
require 'json'
require_relative 'auth_middleware'
require_relative 'auth_constants'
require_relative 'auth_info'
require_relative 'authorization_error'
require_relative 'auth_helpers'
require_relative 'jwt_validator'

# 应用中间件
use AuthMiddleware

get '/api/protected' do
  content_type :json

  # 从 env 获取认证 (Authentication) 信息
  auth = env['auth']
  { auth: auth.to_h }.to_json
end

# 公共端点（不受中间件保护）
get '/' do
  content_type :json
  { message: "Public endpoint" }.to_json
end
```
