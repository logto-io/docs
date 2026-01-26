```ruby title="app.rb"
require 'sinatra'
require 'json'
require_relative 'auth_middleware'
require_relative 'auth_constants'
require_relative 'auth_info'
require_relative 'authorization_error'
require_relative 'auth_helpers'
require_relative 'jwt_validator'

# ミドルウェアを適用
use AuthMiddleware

get '/api/protected' do
  content_type :json

  # env から認証情報にアクセス
  auth = env['auth']
  { auth: auth.to_h }.to_json
end

# パブリックエンドポイント（ミドルウェアによる保護なし）
get '/' do
  content_type :json
  { message: "パブリックエンドポイント" }.to_json
end
```
