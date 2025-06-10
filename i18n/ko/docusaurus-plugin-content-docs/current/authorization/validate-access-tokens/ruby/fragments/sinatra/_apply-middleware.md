```ruby title="app.rb"
require 'sinatra'
require 'json'
require_relative 'auth_middleware'
require_relative 'auth_constants'
require_relative 'auth_info'
require_relative 'authorization_error'
require_relative 'auth_helpers'
require_relative 'jwt_validator'

# 미들웨어 적용
use AuthMiddleware

get '/api/protected' do
  content_type :json

  # env에서 인증 (Authentication) 정보에 접근
  auth = env['auth']
  { auth: auth.to_h }.to_json
end

# 공개 엔드포인트 (미들웨어로 보호되지 않음)
get '/' do
  content_type :json
  { message: "공개 엔드포인트" }.to_json
end
```
