```ruby title="app/controllers/concerns/jwt_authentication.rb"
module JwtAuthentication
  extend ActiveSupport::Concern
  include AuthHelpers

  included do
    before_action :verify_access_token, only: [:protected_action] # 특정 액션에만 추가
  end

  private

  def verify_access_token
    begin
      token = extract_bearer_token(request)
      decoded_token = JwtValidator.validate_jwt(token)

      # 인증 정보(auth info)를 범용적으로 사용하기 위해 저장
      @auth = JwtValidator.create_auth_info(decoded_token)

    rescue AuthorizationError => e
      render json: { error: e.message }, status: e.status
    rescue JWT::DecodeError, JWT::VerificationError, JWT::ExpiredSignature => e
      render json: { error: '유효하지 않은 토큰' }, status: 401
    end
  end
end
```
