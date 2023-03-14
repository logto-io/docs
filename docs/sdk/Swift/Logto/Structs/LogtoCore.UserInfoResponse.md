**STRUCT**

# `LogtoCore.UserInfoResponse`

```swift
struct UserInfoResponse: UserInfoProtocol {
    public let sub: String
    public let name: String?
    public let picture: String?
    public let username: String?
    public let email: String?
    public let emailVerified: Bool?
    public let phoneNumber: String?
    public let phoneNumberVerified: Bool?
    public let customData: JsonObject?
    public let identities: JsonObject?
}
```
