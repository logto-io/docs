```ruby title="auth_middleware.rb"
class AuthMiddleware
  include AuthHelpers

  def initialize(app)
    @app = app
  end

  def call(env)
    request = Rack::Request.new(env)

    # 特定のルートのみを保護
    if request.path.start_with?('/api/protected')
      begin
        token = extract_bearer_token(request)
        decoded_token = JwtValidator.validate_jwt(token)

        # 認証情報を env に保存し、汎用的に利用できるようにする
        env['auth'] = JwtValidator.create_auth_info(decoded_token)

      rescue AuthorizationError => e
        return [e.status, { 'Content-Type' => 'application/json' }, [{ error: e.message }.to_json]]
      rescue JWT::DecodeError, JWT::VerificationError, JWT::ExpiredSignature => e
        return [401, { 'Content-Type' => 'application/json' }, [{ error: 'Invalid token' }.to_json]]
      end
    end

    @app.call(env)
  end
end
```
