```rust title="middleware.rs"
use crate::{AuthInfo, AuthorizationError, extract_bearer_token};
use crate::jwt_validator::JwtValidator;
use actix_web::{
    dev::{forward_ready, Service, ServiceRequest, ServiceResponse, Transform},
    web, Error, HttpMessage, HttpResponse,
};
use futures::future::{ok, Ready};
use std::sync::Arc;

// JWT 中介軟體 (JwtMiddleware)
pub struct JwtMiddleware {
    validator: Arc<JwtValidator>,
}

impl JwtMiddleware {
    // 建立新的 JwtMiddleware 實例
    pub fn new(validator: Arc<JwtValidator>) -> Self {
        Self { validator }
    }
}

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

// JwtMiddlewareService 結構體
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

    fn call(&self, req: ServiceRequest) -> Self::Future {
        let validator = self.validator.clone();

        Box::pin(async move {
            // 從 header 取得 authorization 欄位
            let authorization = req
                .headers()
                .get("authorization")
                .and_then(|h| h.to_str().ok());

            match extract_bearer_token(authorization)
                .and_then(|token| validator.validate_jwt(token))
            {
                Ok(auth_info) => {
                    // 將驗證資訊存入 request extensions，方便後續使用
                    req.extensions_mut().insert(auth_info);
                    let fut = self.service.call(req);
                    fut.await
                }
                Err(e) => {
                    // 權杖驗證失敗，回傳錯誤訊息
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
