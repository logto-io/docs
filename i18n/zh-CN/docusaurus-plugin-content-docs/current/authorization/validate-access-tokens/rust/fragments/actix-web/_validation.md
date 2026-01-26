```rust title="middleware.rs"
use crate::{AuthInfo, AuthorizationError, extract_bearer_token};
use crate::jwt_validator::JwtValidator;
use actix_web::{
    dev::{forward_ready, Service, ServiceRequest, ServiceResponse, Transform},
    web, Error, HttpMessage, HttpResponse,
};
use futures::future::{ok, Ready};
use std::sync::Arc;

// JwtMiddleware 结构体，包含 JWT 校验器
pub struct JwtMiddleware {
    validator: Arc<JwtValidator>,
}

impl JwtMiddleware {
    // 创建新的 JwtMiddleware 实例
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

    // 创建新的中间件服务
    fn new_transform(&self, service: S) -> Self::Future {
        ok(JwtMiddlewareService {
            service,
            validator: self.validator.clone(),
        })
    }
}

// JwtMiddlewareService 结构体，实际处理请求
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

    // 处理每个请求
    fn call(&self, req: ServiceRequest) -> Self::Future {
        let validator = self.validator.clone();

        Box::pin(async move {
            // 从请求头中获取 authorization 字段
            let authorization = req
                .headers()
                .get("authorization")
                .and_then(|h| h.to_str().ok());

            // 提取 Bearer 令牌并校验 JWT
            match extract_bearer_token(authorization)
                .and_then(|token| validator.validate_jwt(token))
            {
                Ok(auth_info) => {
                    // 将认证信息存储到请求扩展中，便于后续通用使用
                    req.extensions_mut().insert(auth_info);
                    let fut = self.service.call(req);
                    fut.await
                }
                Err(e) => {
                    // 校验失败，返回错误响应
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
