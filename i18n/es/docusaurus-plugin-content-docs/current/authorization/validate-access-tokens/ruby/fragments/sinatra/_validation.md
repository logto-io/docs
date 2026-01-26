```ruby title="auth_middleware.rb"
class AuthMiddleware
  include AuthHelpers

  def initialize(app)
    @app = app
  end

  def call(env)
    request = Rack::Request.new(env)

    # Solo proteger rutas específicas
    if request.path.start_with?('/api/protected')
      begin
        token = extract_bearer_token(request)
        decoded_token = JwtValidator.validate_jwt(token)

        # Almacenar la información de autenticación en env para uso genérico
        env['auth'] = JwtValidator.create_auth_info(decoded_token)

      rescue AuthorizationError => e
        return [e.status, { 'Content-Type' => 'application/json' }, [{ error: e.message }.to_json]]
      rescue JWT::DecodeError, JWT::VerificationError, JWT::ExpiredSignature => e
        return [401, { 'Content-Type' => 'application/json' }, [{ error: 'Token inválido' }.to_json]]
      end
    end

    @app.call(env)
  end
end
```
