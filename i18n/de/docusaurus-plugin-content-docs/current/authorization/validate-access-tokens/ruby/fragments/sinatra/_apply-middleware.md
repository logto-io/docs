```ruby title="app.rb"
require 'sinatra'
require 'json'
require_relative 'auth_middleware'
require_relative 'auth_constants'
require_relative 'auth_info'
require_relative 'authorization_error'
require_relative 'auth_helpers'
require_relative 'jwt_validator'

# Middleware anwenden
use AuthMiddleware

get '/api/protected' do
  content_type :json

  # Authentifizierungsinformationen aus env abrufen
  auth = env['auth']
  { auth: auth.to_h }.to_json
end

# Öffentlicher Endpunkt (nicht durch Middleware geschützt)
get '/' do
  content_type :json
  { message: "Öffentlicher Endpunkt" }.to_json
end
```
