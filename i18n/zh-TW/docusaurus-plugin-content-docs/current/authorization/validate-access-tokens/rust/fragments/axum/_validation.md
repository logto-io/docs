```rust title="middleware.rs"
use crate::{AuthInfo, AuthorizationError, extract_bearer_token};
use crate::jwt_validator::JwtValidator;
use axum::{
    extract::Request,
    http::{HeaderMap, StatusCode},
    middleware::Next,
    response::{IntoResponse, Response},
    Extension, Json,
};
use serde_json::json;
use std::sync::Arc;

// JWT 中介軟體 (jwt_middleware)：驗證存取權杖 (Access token)
pub async fn jwt_middleware(
    Extension(validator): Extension<Arc<JwtValidator>>,
    headers: HeaderMap,
    mut request: Request,
    next: Next,
) -> Result<Response, AuthorizationError> {
    let authorization = headers
        .get("authorization")
        .and_then(|h| h.to_str().ok());

    let token = extract_bearer_token(authorization)?;
    let auth_info = validator.validate_jwt(token)?;

    // 將驗證資訊存入請求擴充 (extensions)，以便通用使用
    request.extensions_mut().insert(auth_info);

    Ok(next.run(request).await)
}

// 授權錯誤 (AuthorizationError) 的回應實作
impl IntoResponse for AuthorizationError {
    fn into_response(self) -> Response {
        let status = StatusCode::from_u16(self.status_code).unwrap_or(StatusCode::FORBIDDEN);
        (status, Json(json!({ "error": self.message }))).into_response()
    }
}
```
