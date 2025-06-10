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
    // リクエストガードから認証 (Authentication) 情報へ直接アクセス
    Json(json!({ "auth": auth }))
}

#[launch]
async fn rocket() -> _ {
    let validator = JwtValidator::new().await.expect("JWT バリデーターの初期化に失敗しました");

    rocket::build()
        .manage(validator)
        .mount("/", routes![protected_handler])
}
```
