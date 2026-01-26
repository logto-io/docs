```rust title="main.rs"
use actix_web::{middleware::Logger, web, App, HttpRequest, HttpServer, Result};
use serde_json::{json, Value};
use std::sync::Arc;

mod lib;
mod jwt_validator;
mod middleware as jwt_middleware;

use lib::AuthInfo;
use jwt_validator::JwtValidator;
use jwt_middleware::JwtMiddleware;

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    let validator = Arc::new(JwtValidator::new().await.expect("JWT 검증기 초기화 실패 (Failed to initialize JWT validator)"));

    HttpServer::new(move || {
        App::new()
            .app_data(web::Data::new(validator.clone()))
            .wrap(Logger::default())
            .service(
                web::scope("/api/protected")
                    .wrap(JwtMiddleware::new(validator.clone()))
                    .route("", web::get().to(protected_handler))
            )
    })
    .bind("127.0.0.1:8080")?
    .run()
    .await
}

async fn protected_handler(req: HttpRequest) -> Result<web::Json<Value>> {
    // 요청 확장에서 인증 (Authentication) 정보에 접근합니다
    let auth = req.extensions().get::<AuthInfo>().unwrap();
    Ok(web::Json(json!({ "auth": auth })))
}
```
