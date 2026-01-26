```ruby title="app/controllers/concerns/jwt_authentication.rb"
module JwtAuthentication
  extend ActiveSupport::Concern
  include AuthHelpers

  included do
    before_action :verify_access_token, only: [:protected_action] # Füge spezifische Aktionen hinzu
  end

  private

  def verify_access_token
    begin
      token = extract_bearer_token(request)
      decoded_token = JwtValidator.validate_jwt(token)

      # Auth-Informationen für generische Nutzung speichern
      @auth = JwtValidator.create_auth_info(decoded_token)

    rescue AuthorizationError => e
      render json: { error: e.message }, status: e.status
    rescue JWT::DecodeError, JWT::VerificationError, JWT::ExpiredSignature => e
      render json: { error: 'Ungültiges Token' }, status: 401
    end
  end
end
```
