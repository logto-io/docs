```ruby title="app.rb"
require 'sinatra'
require 'json'
require_relative 'auth_middleware'
require_relative 'auth_constants'
require_relative 'auth_info'
require_relative 'authorization_error'
require_relative 'auth_helpers'
require_relative 'jwt_validator'

# Appliquer le middleware
use AuthMiddleware

get '/api/protected' do
  content_type :json

  # Accéder aux informations d'authentification depuis env
  auth = env['auth']
  { auth: auth.to_h }.to_json
end

# Point de terminaison public (non protégé par le middleware)
get '/' do
  content_type :json
  { message: "Point de terminaison public" }.to_json
end
```
