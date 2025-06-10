```ruby title="app.rb"
require 'sinatra'
require 'json'
require_relative 'auth_middleware'
require_relative 'auth_constants'
require_relative 'auth_info'
require_relative 'authorization_error'
require_relative 'auth_helpers'
require_relative 'jwt_validator'

# Apply middleware
use AuthMiddleware

get '/api/protected' do
  content_type :json

  # Access auth information from env
  auth = env['auth']
  { auth: auth.to_h }.to_json
end

# Public endpoint (not protected by middleware)
get '/' do
  content_type :json
  { message: "Public endpoint" }.to_json
end
```
