```rust title="middleware.rs"
use crate::{AuthInfo, AuthorizationError, extract_bearer_token};
use crate::jwt_validator::JwtValidator;
use actix_web::{
    dev::{forward_ready, Service, ServiceRequest, ServiceResponse, Transform},
    web, Error, HttpMessage, HttpResponse,
};
use futures::future::{ok, Ready};
use std::sync::Arc;

// JWT 미들웨어 구조체 정의
pub struct JwtMiddleware {
    validator: Arc<JwtValidator>,
}

impl JwtMiddleware {
    // 새로운 미들웨어 인스턴스 생성
    pub fn new(validator: Arc<JwtValidator>) -> Self {
        Self { validator }
    }
}

// Transform 트레잇 구현: 서비스에 미들웨어 적용
impl<S, B> Transform<S, ServiceRequest> for JwtMiddleware
where
    S: Service<ServiceRequest, Response = ServiceResponse<B>, Error = Error>,
    S::Future: 'static,
    B: 'static,
{
    type Response = ServiceResponse<B>;
    type Error = Error;
    type InitError = ();
    type Transform = JwtMiddlewareService<S>;
    type Future = Ready<Result<Self::Transform, Self::InitError>>;

    fn new_transform(&self, service: S) -> Self::Future {
        ok(JwtMiddlewareService {
            service,
            validator: self.validator.clone(),
        })
    }
}

// 실제 요청 처리를 담당하는 미들웨어 서비스 구조체
pub struct JwtMiddlewareService<S> {
    service: S,
    validator: Arc<JwtValidator>,
}

impl<S, B> Service<ServiceRequest> for JwtMiddlewareService<S>
where
    S: Service<ServiceRequest, Response = ServiceResponse<B>, Error = Error>,
    S::Future: 'static,
    B: 'static,
{
    type Response = ServiceResponse<B>;
    type Error = Error;
    type Future = futures::future::LocalBoxFuture<'static, Result<Self::Response, Self::Error>>;

    forward_ready!(service);

    // 요청 처리 함수
    fn call(&self, req: ServiceRequest) -> Self::Future {
        let validator = self.validator.clone();

        Box::pin(async move {
            // Authorization 헤더에서 토큰 추출
            let authorization = req
                .headers()
                .get("authorization")
                .and_then(|h| h.to_str().ok());

            match extract_bearer_token(authorization)
                .and_then(|token| validator.validate_jwt(token))
            {
                Ok(auth_info) => {
                    // 인증 정보 (AuthInfo)를 요청 확장에 저장하여 이후에 활용 가능
                    req.extensions_mut().insert(auth_info);
                    let fut = self.service.call(req);
                    fut.await
                }
                Err(e) => {
                    // 인증 실패 시 에러 메시지와 함께 403 또는 지정된 상태 코드 반환
                    let response = HttpResponse::build(
                        actix_web::http::StatusCode::from_u16(e.status_code)
                            .unwrap_or(actix_web::http::StatusCode::FORBIDDEN),
                    )
                    .json(serde_json::json!({ "error": e.message }));

                    Ok(req.into_response(response))
                }
            }
        })
    }
}
```
