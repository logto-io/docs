```rust title="main.rs"
use axum::{
    extract::Extension,
    http::StatusCode,
    middleware,
    response::Json,
    routing::get,
    Router,
};
use serde_json::{json, Value};
use std::sync::Arc;
use tower_http::cors::CorsLayer;

mod lib;
mod jwt_validator;
mod middleware as jwt_middleware;

use lib::AuthInfo;
use jwt_validator::JwtValidator;

#[tokio::main]
async fn main() {
    let validator = Arc::new(JwtValidator::new().await.expect("初始化 JWT 驗證器失敗 (Failed to initialize JWT validator)"));

    let app = Router::new()
        .route("/api/protected", get(protected_handler))
        .layer(middleware::from_fn(jwt_middleware::jwt_middleware))
        .layer(Extension(validator))
        .layer(CorsLayer::permissive());

    let listener = tokio::net::TcpListener::bind("0.0.0.0:3000").await.unwrap();
    axum::serve(listener, app).await.unwrap();
}

async fn protected_handler(Extension(auth): Extension<AuthInfo>) -> Json<Value> {
    // 可直接從 Extension 取得驗證資訊 (Access auth information directly from Extension)
    Json(json!({ "auth": auth }))
}
```
