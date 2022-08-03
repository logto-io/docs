调用 `.signOut()` 将清理内存与 localStorage 中的所有 Logto 数据（如果有）。

在退出登录后，让你的用户重新回到你的网站是个不错的选择。让我们将 `http://localhost:3000` 添加至「管理控制台」里的 Post Sign-out URIs 中（位于 Redirect URIs 下方），并将其作为调用 `.signOut()` 的参数。
