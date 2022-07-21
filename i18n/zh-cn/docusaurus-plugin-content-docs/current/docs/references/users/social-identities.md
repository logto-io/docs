---
sidebar_label: 社交身份
sidebar_position: 1
---

# 社交身份

_identities_ 即用户的社交身份，保存通过社交登录（即使用社交连接器登录）获取到的用户信息。
每个用户的 _identities_ 都存储在一个单独的 JSON 对象中。

这些用户信息因社交身份提供商（即社交网络平台）而异，通常包括以下内容：

- 身份提供商对应的 [target](../../../docs/references/connectors/README.mdx#target)，例如小写的“facebook”、“google”或“wechat”
- 用户在该身份提供商上的唯一标识符
- 用户名
- 通过验证的用户邮箱
- 用户头像

用户的帐号可能通过社交登录连接到多个社交身份提供商，例如 Facebook、Google 和微信；
从这些身份提供商获取到的相关的用户信息将保存在 _identities_ 对象中。

通过 Facebook 和微信登录的用户的 _identities_ 示例：

```json
{
  "facebook": {
    "userId": "5110888888888888",
    "details": {
      "id": "5110888888888888",
      "name": "John Joe",
      "email": "johnjoe@logto.io",
      "avatar": "https://example.com/avatar.png"
    }
  },
  "wechat": {
    "userId": "O8sU-6JWMMNZzuXo6-xaEjouyQZ8",
    "details": {
      "id": "O8sU-6JWMMNZzuXo6-xaEjouyQZ8",
      "name": "John Joe",
      "avatar": "https://example.com/avatar.png"
    }
  }
}
```

:::info

不能通过「管理控制台」或「管理 API」更新用户 _identities_。

每次用户使用社交连接器登录时，他们的 _identities_ 都会从身份提供商自动导入或更新。

:::
