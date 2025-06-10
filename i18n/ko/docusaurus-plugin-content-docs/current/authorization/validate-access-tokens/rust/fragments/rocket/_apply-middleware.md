```rust title="main.rs"
use rocket::{get, launch, routes, serde::json::Json};
use serde_json::{json, Value};

mod lib;
mod jwt_validator;
mod guards;

use lib::AuthInfo;
use jwt_validator::JwtValidator;

#[get("/api/protected")]
fn protected_handler(auth: AuthInfo) -> Json<Value> {
    // 요청 가드에서 인증 (Authentication) 정보를 직접 접근합니다
    Json(json!({ "auth": auth }))
}

#[launch]
async fn rocket() -> _ {
    let validator = JwtValidator::new().await.expect("JWT 검증기 초기화에 실패했습니다");

    rocket::build()
        .manage(validator)
        .mount("/", routes![protected_handler])
}
```
