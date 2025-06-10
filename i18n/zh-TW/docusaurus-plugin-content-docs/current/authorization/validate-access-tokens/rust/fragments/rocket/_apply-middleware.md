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
    // 直接從請求守衛 (request guard) 取得驗證 (Authentication) 資訊
    Json(json!({ "auth": auth }))
}

#[launch]
async fn rocket() -> _ {
    let validator = JwtValidator::new().await.expect("初始化 JWT 驗證器失敗");

    rocket::build()
        .manage(validator)
        .mount("/", routes![protected_handler])
}
```
