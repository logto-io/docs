```ruby title="auth_helpers.rb"
module GrapeAuthHelpers
  include AuthHelpers

  def authenticate_user!
    begin
      token = extract_bearer_token(request)
      decoded_token = JwtValidator.validate_jwt(token)

      # Auth-Informationen für die allgemeine Verwendung speichern
      @auth = JwtValidator.create_auth_info(decoded_token)

    rescue AuthorizationError => e
      error!({ error: e.message }, e.status)
    rescue JWT::DecodeError, JWT::VerificationError, JWT::ExpiredSignature => e
      error!({ error: 'Ungültiges Token' }, 401)
    end
  end

  def auth
    @auth
  end
end
```
