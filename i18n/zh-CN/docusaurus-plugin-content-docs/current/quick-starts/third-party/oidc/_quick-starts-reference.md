在底层，第三方应用其实就是一个标准的 OAuth 2.0 / OIDC 客户端。这意味着你（或第三方开发者）可以使用任何 OAuth 2.0 / OIDC 库或框架来集成 Logto。

如果你还不熟悉 OAuth 2.0 或 OIDC，可以先参考我们的“传统 Web”快速入门指南。

需要注意的几点：

1. Logto 目前要求第三方应用为“传统 Web”应用。换句话说，应用需要有后端服务器（或前端专用后端）来安全地存储客户端密钥。
2. 我们的大多数快速入门指南是为第一方应用编写的，但你仍然可以将它们作为第三方应用集成的参考。
3. 主要的区别在于，第三方应用会显示用户授权页面 (Consent screen)，请求用户明确授权访问他们的数据。

你可以在我们的[快速入门指南](/quick-starts)中找到更多信息。
