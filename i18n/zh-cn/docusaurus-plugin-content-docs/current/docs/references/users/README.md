# 👨‍👩‍👧‍👦 用户

_用户_ 是身份服务的主要实体。我们将会在下文描述用户相关的概念和细节。

## 用户资料

每个用户都有一份 _用户资料_ 去保存他的信息。

一份 _用户资料_ 由以下几个类型的数据组成：

- [**基础数据**](#基础数据basic-data)：在预定义的属性中保存基础信息，例如用户 ID、用户名、邮箱、手机号以及用户上次登录的时间。
- [**自定义数据**](#自定义数据custom-data)：在可自定义的属性中保存附加信息，例如用户偏好的颜色和语言。
- [**身份**](#身份identities)：包括从社交登录（即使用社交连接器登录）获取的用户信息，例如 Facebook、GitHub 和微信。

### 所有属性

以下属性（`password_encrypted` 和 `password_encryption_method` 除外）在用户资料中可见，这意味着你可以使用「管理 API」查询它们。

| 名称                                                      | 类型         | 描述                       | 唯一的 | 必须的 |
| --------------------------------------------------------- | ------------ | -------------------------- | ------ | ------ |
| [id](#user-id)                                            | string       | 唯一标识符                 | ✅     | ✅     |
| [username](#username)                                     | string       | 用于登录的用户名           | ✅     | ❌     |
| [primary_email](#primary-email)                           | string       | 主要邮箱                   | ✅     | ❌     |
| [primary_phone](#primary-phone)                           | string       | 主要手机号                 | ✅     | ❌     |
| [name](#name)                                             | string       | 全名                       | ❌     | ❌     |
| [avatar](#avatar)                                         | string       | 用户头像图片的 URL         | ❌     | ❌     |
| [role_names](#role-names)                                 | string array | Role 的列表                | ❌     | ✅     |
| [identities](#identities)                                 | object       | 从社交登录中获取的用户信息 | ❌     | ✅     |
| [custom_data](#custom-data)                               | object       | 自定义的附加信息           | ❌     | ✅     |
| [application_id](#application-id)                         | string       | 用户首次注册的应用 ID      | ❌     | ✅     |
| [last_sign_in_at](#last-signed-in-at)                     | date time    | 用户上次登录的时间戳       | ❌     | ✅     |
| [password_encrypted](#password-encrypted)                 | string       | 加密的密码                 | ❌     | ❌     |
| [password_encryption_method](#password-encryption-method) | string       | 密码的加密方式             | ❌     | ❌     |

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
