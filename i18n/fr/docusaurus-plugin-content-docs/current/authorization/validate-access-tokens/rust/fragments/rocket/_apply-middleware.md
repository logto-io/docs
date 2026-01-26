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
    // Accédez directement aux informations d'authentification depuis le request guard (Access auth information directly from request guard)
    Json(json!({ "auth": auth }))
}

#[launch]
async fn rocket() -> _ {
    let validator = JwtValidator::new().await.expect("Échec de l'initialisation du validateur JWT (Failed to initialize JWT validator)");

    rocket::build()
        .manage(validator)
        .mount("/", routes![protected_handler])
}
```
