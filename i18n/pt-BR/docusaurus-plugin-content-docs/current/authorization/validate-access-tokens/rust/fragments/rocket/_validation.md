```rust title="guards.rs"
use crate::{AuthInfo, AuthorizationError, extract_bearer_token};
use crate::jwt_validator::JwtValidator;
use rocket::{
    http::Status,
    outcome::Outcome,
    request::{self, FromRequest, Request},
    State,
};

#[rocket::async_trait]
impl<'r> FromRequest<'r> for AuthInfo {
    type Error = AuthorizationError;

    async fn from_request(req: &'r Request<'_>) -> request::Outcome<Self, Self::Error> {
        let validator = match req.guard::<&State<JwtValidator>>().await {
            Outcome::Success(validator) => validator,
            Outcome::Failure((status, _)) => {
                return Outcome::Failure((
                    status,
                    AuthorizationError::with_status("Validador de JWT não encontrado", 500),
                ))
            }
            Outcome::Forward(()) => {
                return Outcome::Forward(())
            }
        };

        let authorization = req.headers().get_one("authorization");

        match extract_bearer_token(authorization)
            .and_then(|token| validator.validate_jwt(token))
        {
            Ok(auth_info) => Outcome::Success(auth_info),
            Err(e) => {
                let status = Status::from_code(e.status_code).unwrap_or(Status::Forbidden);
                Outcome::Failure((status, e))
            }
        }
    }
}
```
