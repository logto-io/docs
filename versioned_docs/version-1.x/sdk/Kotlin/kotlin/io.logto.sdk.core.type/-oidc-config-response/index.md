# OidcConfigResponse

data class OidcConfigResponse(val authorizationEndpoint: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), val tokenEndpoint: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), val endSessionEndpoint: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), val jwksUri: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), val issuer: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), val revocationEndpoint: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html))

## Constructors

| Name               | Summary                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| ------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| OidcConfigResponse | fun OidcConfigResponse(authorizationEndpoint: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), tokenEndpoint: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), endSessionEndpoint: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), jwksUri: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), issuer: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), revocationEndpoint: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)) |

## Properties

| Name                  | Summary                                                                                                     |
| --------------------- | ----------------------------------------------------------------------------------------------------------- |
| authorizationEndpoint | val authorizationEndpoint: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html) |
| endSessionEndpoint    | val endSessionEndpoint: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)    |
| issuer                | val issuer: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)                |
| jwksUri               | val jwksUri: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)               |
| revocationEndpoint    | val revocationEndpoint: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)    |
| tokenEndpoint         | val tokenEndpoint: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)         |
