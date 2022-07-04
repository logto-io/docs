# 👨‍👩‍👧‍👦 用户

_用户_ 是身份服务的主要实体。我们将会在下文描述用户相关的概念和细节。

## 用户资料

每个用户都有一份 _用户资料_ 去保存他的信息。

一份 _用户资料_ 由以下几个类型的数据组成：

- [**基础数据**](#basic_data)：在预定义的属性中保存基础信息，例如用户 ID、用户名、邮箱、手机号以及用户上次登录的时间。
- [**自定义数据**](#custom_data)：在可自定义的属性中保存附加信息，例如用户偏好的颜色和语言。
- [**身份**](#identities)：包括从社交登录（即使用社交连接器登录）获取的用户信息，例如 Facebook、GitHub 和微信。

### 所有属性

以下属性（`password_encrypted` 和 `password_encryption_method` 除外）在用户资料中可见，这意味着你可以使用「管理 API」查询它们。

| 名称                                                      | 类型         | 描述                       | 唯一的 | 必须的 |
| --------------------------------------------------------- | ------------ | -------------------------- | ------ | ------ |
| [id](#user_id)                                            | string       | 唯一标识符                 | ✅     | ✅     |
| [username](#username)                                     | string       | 用于登录的用户名           | ✅     | ❌     |
| [primary_email](#primary_email)                           | string       | 主要邮箱                   | ✅     | ❌     |
| [primary_phone](#primary_phone)                           | string       | 主要手机号                 | ✅     | ❌     |
| [name](#name)                                             | string       | 全名                       | ❌     | ❌     |
| [avatar](#avatar)                                         | string       | 用户头像图片的 URL         | ❌     | ❌     |
| [role_names](#role_names)                                 | string array | Role 的列表                | ❌     | ✅     |
| [identities](#identities)                                 | object       | 从社交登录中获取的用户信息 | ❌     | ✅     |
| [custom_data](#custom_data)                               | object       | 自定义的附加信息           | ❌     | ✅     |
| [application_id](#application_id)                         | string       | 用户首次注册的应用 ID      | ❌     | ✅     |
| [last_sign_in_at](#last_signed_in_at)                     | date time    | 用户上次登录的时间戳       | ❌     | ✅     |
| [password_encrypted](#password_encrypted)                 | string       | 加密的密码                 | ❌     | ❌     |
| [password_encryption_method](#password_encryption_method) | string       | 密码的加密方式             | ❌     | ❌     |

:::note

- **唯一的**: 确保输入到数据库表属性的值的 [唯一性](https://www.postgresql.org/docs/current/ddl-constraints.html#DDL-CONSTRAINTS-UNIQUE-CONSTRAINTS)。
- **必须的**: 确保输入到数据库表属性的值不能为 `NULL`。

:::

---

#### 用户资料示例

一个使用 Facebook 登录的用户:

```json
{
  "id": "iHXPuSb9eMzt",
  "username": null,
  "primaryEmail": null,
  "primaryPhone": null,
  "name": "John Joe",
  "avatar": "https://example.com/avatar.png",
  "roleNames": ["admin"],
  "customData": {
    "preferences": {
      "language": "en",
      "color": "#f236c9"
    }
  },
  "identities": {
    "facebook": {
      "userId": "106077000000000",
      "details": {
        "id": "106077000000000",
        "name": "John Joe",
        "email": "johnjoe@logto.io",
        "avatar": "https://example.com/avatar.png"
      }
    }
  },
  "lastSignInAt": 1655799453171,
  "applicationId": "admin_console"
}
```

你可以使用「[管理控制台](../../../docs/recipes/manage-users/using-admin-console#查看和更新用户资料)」或
「[管理 API](../../../docs/recipes/manage-users/using-management-api)」来查询用户资料，
例如 <a href="/api/#tag/Users/paths/~1api~1users~1:userId/get" target="_blank">`GET /api/users/:userId`</a>。

### basic_data

用户的基础数据，即在预定义的属性中保存的用户基础信息。

#### user_id

user_id 即用户 ID，是自动生成的唯一键，用于标识 Logto 用户。

#### username

username 即用户名，用于用户名加密码的登录方式。

如果用户没用过用户名加密码的方式注册，他们的 username 可能是空的。
username 的值非空时，最多 128 个字符，只能包含字母、数字和下划线（`_`），不能以数字开头。

#### primary_email

primary_email 即主要邮箱，是用户的电子邮件地址，用于邮箱加验证码的登录方式。

如果用户没用过邮箱注册，他们的 primary_email 的值可能是空的。
primary_email 的值非空时，最多 128 个字符。

#### primary_phone

primary_phone 即主要手机号，用于手机号加短信验证码的登录方式。

如果用户没用过手机号注册时，他们的 primary_phone 的值可能是空的。
primary_phone 的值非空时，只能包含数字，且以 [国家呼叫代码](https://en.wikipedia.org/wiki/List_of_country_calling_codes) 为前缀（加号 `+` 除外）。

#### name

name 即用户的全名，最多 128 个字符。

#### avatar

avatar 即用户的头像，是指向用户头像图片的 URL。

如果用户使用 Facebook 和微信等社交连接器注册，则可能会直接采用社交用户信息中获取到的头像。
允许的图片 URL 最多 2048 个字符。

#### role_names

roles_names 即用户的角色名称集合，表示在 Logto 中授予给该用户的角色集合。

role 即角色，代表你授予给用户的一组权限。
与单独为用户分配一个个权限相比，使用角色更便于授予、撤销和调整用户的权限。

你目前还不能通过「管理控制台」更新用户的 role_names，敬请关注。

:::info

例如，只有 roles_names 中包含 admin 的用户，即管理员用户，才有权限使用 Logto 中的「管理控制台」和「管理 API」。

:::

#### application_id

application_id 即用户首次注册时对应的 [应用 ID](../applications/#应用-id)（即 [client id](https://www.oauth.com/oauth2-servers/client-registration/client-id-secret/)）。

#### last_signed_in_at

last_signed_in_at 即用户上次登录时的带时区的时间戳。

#### password_encrypted

password_encrypted 即加密后的用户密码。

当用户没用过用户名加密码的方式注册时，其 password_encrypted 可能是空的。
如果 password_encrypted 的值非空，则对应加密前的明文密码包含至少 6 个字符。

#### password_encryption_method

password_encryption_method 即用户密码的加密方式。
当用户没用过用户名加密码的方式注册时，其 password_encryption_method 可能是空的。

Logto 默认使用 [Argon2](https://en.wikipedia.org/wiki/Argon2) 的实现 [node-argon2](https://github.com/ranisalt/node-argon2) 作为加密方式；如果你有兴趣，可以参阅链接的资料以了解细节。

`password_encrypted` 和 `password_encryption_method` 的示例，明文密码为 `123456`：

```json
{
  "password_encryption_method": "Argon2i",
  "password_encrypted": "$argon2i$v=19$m=4096,t=10,p=1$aZzrqpSX45DOo+9uEW6XVw$O4MdirF0mtuWWWz68eyNAt2u1FzzV3m3g00oIxmEr0U"
}
```

### custom_data

### identities
