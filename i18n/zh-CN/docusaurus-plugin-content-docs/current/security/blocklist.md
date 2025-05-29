---
slug: /security/blocklist
sidebar_label: 黑名单
sidebar_position: 3
---

# 黑名单

## 邮箱黑名单 {#email-blocklist}

邮箱黑名单策略允许自定义邮箱黑名单设置，以防止账号注册滥用。它会监控用于注册和账户设置的邮箱地址。如果用户尝试注册或绑定违反任何黑名单规则的邮箱地址，系统将拒绝该请求，从而帮助减少垃圾账号并提升整体账户安全性。

前往 <CloudLink to="/security/blocklist">控制台 > 安全 > 黑名单</CloudLink> 配置邮箱黑名单设置。

### 屏蔽一次性邮箱地址 {#block-disposable-email-addresses}

这是一个**仅限云端**的功能。启用后，系统会自动将所提供邮箱地址的域名与已知一次性邮箱域名列表进行校验。如果该域名在列表中，系统将拒绝该请求。一次性邮箱域名列表会定期更新，以确保其有效性。

### 屏蔽邮箱子地址 {#block-email-subaddressing}

邮箱子地址允许用户通过在邮箱地址中添加加号（+）及附加字符（如 user+tag@example.com）来创建邮箱变体。恶意用户可能会利用此功能绕过黑名单限制。启用屏蔽邮箱子地址功能后，系统将拒绝所有使用子地址格式进行注册或账户绑定的尝试。

### 自定义邮箱黑名单 {#custom-email-blocklist}

你可以通过指定要屏蔽的邮箱地址或域名来创建自定义邮箱黑名单。系统会拒绝所有与这些条目匹配的注册或账户绑定尝试。黑名单支持完整邮箱地址和域名匹配。

例如，将 `@example.com` 添加到黑名单后，将屏蔽所有该域名下的邮箱地址。同样，添加 `foo@example.com` 将只屏蔽该邮箱地址。

:::note

一次性邮箱、子地址和自定义邮箱在注册和账户绑定时会被限制。已有这些邮箱地址的现有用户仍可登录。

- 管理员可以通过在 <CloudLink to="/users">控制台 > 用户管理</CloudLink> 手动添加用户，或通过 [Management API](https://openapi.logto.io/operation/operation-createuser) “绕过限制”。例如，在屏蔽子地址时创建一个带有子地址邮箱的用户。
- 可通过在 <CloudLink to="/users">控制台 > 用户管理</CloudLink> 删除或暂停账号来屏蔽现有账户。

:::

## 相关资源

<Url href="https://blog.logto.io/disposable-email">什么是一次性邮箱？如何在你的应用中处理？</Url>
