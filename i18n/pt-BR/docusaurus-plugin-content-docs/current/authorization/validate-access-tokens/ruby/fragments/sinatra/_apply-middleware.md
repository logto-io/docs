```ruby title="app.rb"
require 'sinatra'
require 'json'
require_relative 'auth_middleware'
require_relative 'auth_constants'
require_relative 'auth_info'
require_relative 'authorization_error'
require_relative 'auth_helpers'
require_relative 'jwt_validator'

# Aplicar middleware
use AuthMiddleware

get '/api/protected' do
  content_type :json

  # Acessar informações de autenticação a partir do env
  auth = env['auth']
  { auth: auth.to_h }.to_json
end

# Endpoint público (não protegido pelo middleware)
get '/' do
  content_type :json
  { message: "Endpoint público" }.to_json
end
```
