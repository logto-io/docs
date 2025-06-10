```ruby title="auth_helpers.rb"
module GrapeAuthHelpers
  include AuthHelpers

  def authenticate_user!
    begin
      token = extract_bearer_token(request)
      decoded_token = JwtValidator.validate_jwt(token)

      # 存储认证信息以便通用使用
      @auth = JwtValidator.create_auth_info(decoded_token)

    rescue AuthorizationError => e
      error!({ error: e.message }, e.status)
    rescue JWT::DecodeError, JWT::VerificationError, JWT::ExpiredSignature => e
      error!({ error: '无效的令牌 (Invalid token)' }, 401)
    end
  end

  def auth
    @auth
  end
end
```
