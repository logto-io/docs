---
sidebar_label: 可自定义的用户数据
sidebar_position: 2
---

# 可自定义的用户数据

_custom_data_ 存储没包含在 _基本数据_ 中的额外用户信息。

你可以使用 _custom_data_ 来做（但不限于）以下这些事情：

- 记录用户是否执行过特定的操作，例如用户是否已经看过欢迎页面。
- 在用户资料中保存关于特定应用的数据，例如用户在某个应用下的首选语言和外观。
- 报错其他任意和该用户相关的信息。

来自 Logto 管理员用户的 custom_data 示例：

```json
{
  "adminConsolePreferences": {
    "language": "en",
    "appearanceMode": "system",
    "experienceNoticeConfirmed": true
  }
}
```

每个用户的 custom_data 都保存在一个单独的 JSON 对象中。

:::caution 不要将敏感数据放到 custom_data 中

你可以通过「管理 API」获取包含 custom_data 在内的完整用户资料，并将其发送到前端应用程序或外部后端服务。
因此，将敏感数据放在 custom_data 中可能会导致敏感数据泄露。

如果你还是想将敏感数据放到 custom_data 中，我们建议先对其进行加密。
仅在你的后端服务等受信任方中对其进行加密/解密操作，并避免在前端应用程序中进行这些操作。
那么就算你因疏忽泄漏了用户的 custom_data，以上措施也将最大限度地降低你的损失。

:::

你可以使用「[管理控制台](../../../docs/recipes/manage-users/using-admin-console#查看和更新用户资料)」或
「[管理 API](../../../docs/recipes/manage-users/using-management-api)」
来更新用户的自定义数据，
例如 <a href="/api/#tag/Users/paths/~1api~1users~1:userId/patch" target="_blank">`PATCH /api/users/:userId`</a>。

:::caution 小心谨慎地更新

更新用户的 custom_data 将覆盖（而不是合并）其在存储中的原始内容。

:::
