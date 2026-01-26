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

// มิดเดิลแวร์สำหรับตรวจสอบ JWT ในแต่ละคำขอ
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

    // เก็บข้อมูลการยืนยันตัวตน (auth info) ลงใน extensions ของ request เพื่อใช้งานทั่วไป
    request.extensions_mut().insert(auth_info);

    Ok(next.run(request).await)
}

// แปลงข้อผิดพลาด AuthorizationError เป็น HTTP response
impl IntoResponse for AuthorizationError {
    fn into_response(self) -> Response {
        let status = StatusCode::from_u16(self.status_code).unwrap_or(StatusCode::FORBIDDEN);
        (status, Json(json!({ "error": self.message }))).into_response()
    }
}
```
