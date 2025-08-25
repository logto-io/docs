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
    // เข้าถึงข้อมูล auth ได้โดยตรงจาก request guard
    Json(json!({ "auth": auth }))
}

#[launch]
async fn rocket() -> _ {
    let validator = JwtValidator::new().await.expect("ไม่สามารถเริ่มต้น JWT validator ได้");

    rocket::build()
        .manage(validator)
        .mount("/", routes![protected_handler])
}
```
