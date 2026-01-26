```ruby title="app/controllers/concerns/jwt_authentication.rb"
module JwtAuthentication
  extend ActiveSupport::Concern
  include AuthHelpers

  included do
    before_action :verify_access_token, only: [:protected_action] # Ajouter des actions spécifiques
  end

  private

  def verify_access_token
    begin
      token = extract_bearer_token(request)
      decoded_token = JwtValidator.validate_jwt(token)

      # Stocker les informations d'authentification pour une utilisation générique
      @auth = JwtValidator.create_auth_info(decoded_token)

    rescue AuthorizationError => e
      render json: { error: e.message }, status: e.status
    rescue JWT::DecodeError, JWT::VerificationError, JWT::ExpiredSignature => e
      render json: { error: 'Jeton invalide' }, status: 401
    end
  end
end
```
