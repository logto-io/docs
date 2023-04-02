**STRUCT**

# `LogtoCore.CodeTokenResponse`

```swift
struct CodeTokenResponse: Codable, Equatable {
    public let accessToken: String
    public let refreshToken: String?
    public let idToken: String
    public let scope: String
    public let expiresIn: Int64
}
```

## Properties

### `accessToken`

```swift
public let accessToken: String
```

### `refreshToken`

```swift
public let refreshToken: String
```

### `idToken`

```swift
public let idToken: String
```

### `scope`

```swift
public let scope: String
```

### `expiresIn`

```swift
public let expiresIn: Int64
```
