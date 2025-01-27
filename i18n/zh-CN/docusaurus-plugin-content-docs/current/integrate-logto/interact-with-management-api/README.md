---
description: 利用 Management API 访问 Logto 的后端服务，通过用户管理、账户设置、身份验证和多租户架构扩展你的 CIAM 系统。
sidebar_position: 4
---

import logtoManagementApiResourceSrc from './assets/logto-management-api-resource.webp';
import logtoManagementApiDetailsSrc from './assets/logto-management-api-details.webp';

import BasicsAboutAccessTokenRequest from '../../quick-starts/generic/machine-to-machine/fragments/\_basics-about-access-token-request.mdx';
import FetchAccessTokenForLogtoManagementApi from '../../quick-starts/generic/machine-to-machine/fragments/\_fetch-access-token-for-logto-management-api.mdx';
import AccessTokenUsage from '../../quick-starts/generic/machine-to-machine/fragments/\_access-token-usage.mdx';
import AccessLogtoManagementApiUsingAccessToken from '../../quick-starts/generic/machine-to-machine/fragments/\_access-logto-management-api-using-access-token.mdx';
import M2mAccessTokenNote from '../../quick-starts/generic/machine-to-machine/fragments/\_m2m-access-token-sub-note.mdx';
import M2mRoleAssignment from '../../quick-starts/generic/machine-to-machine/fragments/\_m2m-role-assignment.mdx';

# 交互 Management API

## 什么是 Logto Management API？ {#what-is-logto-management-api}

Logto Management API 是一套全面的 API，开发者可以通过它们完全控制实现，以满足产品需求和技术栈。它是预构建的，列在 <CloudLink to="/api-resources">控制台 > API 资源 > Logto Management API</CloudLink> 中，不能删除或修改。

其标识符的模式为 `https://[tenant-id].logto.app/api`

<img alt="Logto Management API 资源" src={logtoManagementApiResourceSrc} />

<img alt="Logto Management API 详情" src={logtoManagementApiDetailsSrc} />

通过 Logto Management API，你可以访问 Logto 强大的后端服务，这些服务具有高度的可扩展性，可以在多种场景中使用。它超越了 Admin Console 的低代码能力。

以下是一些常用的 API：

- [用户](https://openapi.logto.io/operation/operation-getuser)
- [应用程序](https://openapi.logto.io/operation/operation-listapplications)
- [审计日志](https://openapi.logto.io/operation/operation-listlogs)
- [角色 (Roles)](https://openapi.logto.io/operation/operation-listroles)
- [资源](https://openapi.logto.io/operation/operation-listresources)
- [连接器 (Connectors)](https://openapi.logto.io/operation/operation-listconnectors)
- [组织 (Organizations)](https://openapi.logto.io/operation/operation-listorganizations)

要了解更多可用的 API，请访问 https://openapi.logto.io/。

## 如何访问 Logto Management API {#how-to-access-logto-management-api}

### 创建一个 M2M 应用 {#create-an-m2m-app}

:::note
如果你不熟悉 M2M（机器对机器）认证 (Authentication) 流程，我们建议先阅读 [理解认证 (Authentication) 流程](/integrate-logto/integrate-logto-into-your-application/understand-authentication-flow/#machine-to-machine-authentication-flow) 以了解基本概念。
:::

前往 <CloudLink to="/applications">控制台 > 应用程序</CloudLink>，选择“机器对机器”应用程序类型并开始创建过程。

<M2mRoleAssignment />

在角色 (Role) 分配模块中，你可以看到所有 M2M 角色 (Roles) 都被包含，带有 Logto 图标的角色 (Roles) 表示这些角色 (Roles) 包含 Logto Management API 权限。

现在为你的 M2M 应用分配包含 Logto Management API 权限的 M2M 角色 (Roles)。

### 获取访问令牌 (Access token) {#fetch-an-access-token}

#### 关于访问令牌 (Access token) 请求的基础知识 {#basics-about-access-token-request}

<BasicsAboutAccessTokenRequest />

#### 获取 Logto Management API 的访问令牌 (Access token) {#fetch-access-token-for-logto-management-api}

<FetchAccessTokenForLogtoManagementApi />

#### 访问令牌 (Access token) 响应 {#access-token-response}

成功的访问响应体如下：

```json
{
  "access_token": "eyJhbG...2g", // 使用此令牌访问 Logto Management API
  "expires_in": 3600, // 令牌过期时间（秒）
  "token_type": "Bearer", // 使用访问令牌时请求的认证类型
  "scope": "all" // Logto Management API 的权限 (Scope) `all`
}
```

<M2mAccessTokenNote />

### 使用访问令牌 (Access token) 访问 Logto Management API {#access-logto-management-api-using-access-token}

<AccessTokenUsage />

<AccessLogtoManagementApiUsingAccessToken />

## 使用 Logto Management API 的典型场景 {#typical-scenarios-for-using-logto-management-api}

我们的开发者已经使用 Logto Management API 实现了许多附加功能。我们相信我们的 API 具有高度的可扩展性，可以支持你的广泛需求。以下是一些无法通过 Logto Admin Console 实现但可以通过 Logto Management API 实现的场景示例。

### 自行实现用户配置文件 {#implement-user-profile-on-your-own}

Logto 目前不提供预构建的用户配置文件 UI 解决方案。我们认识到用户配置文件与业务和产品属性密切相关。在我们努力确定最佳方法的同时，我们建议使用我们的 API 创建你自己的解决方案。例如，你可以利用我们的交互 API、配置文件 API 和验证码 API 开发满足你需求的自定义解决方案。

### 高级用户搜索 {#advanced-user-search}

Logto Admin Console 支持基本的搜索和过滤功能。对于模糊搜索、精确匹配和区分大小写等高级搜索选项，请查看我们的 [高级用户搜索](/user-management/advanced-user-search) 教程和指南。

### 自行实现组织管理 {#implement-organization-management-on-your-own}

如果你正在使用 [组织 (Organizations)](/organizations) 功能构建你的多租户应用程序，你可能需要 Logto Management API 来执行组织邀请和成员管理等任务。对于你的 SaaS 产品，在租户中有管理员和成员的情况下，Logto Management API 可以帮助你创建一个定制的管理员门户，以满足你的业务需求。查看 [此处](/end-user-flows/organization-experience/) 了解更多详细信息。

## 使用 Logto Management API 的提示 {#tips-for-using-logto-management-api}

### 管理分页 API 响应 {#managing-paginated-api-responses}

某些 API 响应可能包含许多结果，这些结果将被分页。Logto 提供两种分页信息。

#### 使用链接头 {#using-link-headers}

分页响应头如下：

```
Link: <https://logto.dev/users?page=1&page_size=20>; rel="first"
```

链接头提供了结果的上一页、下一页、第一页和最后一页的 URL：

- 上一页的 URL 后跟 rel="prev"。
- 下一页的 URL 后跟 rel="next"。
- 最后一页的 URL 后跟 rel="last"。
- 第一页的 URL 后跟 rel="first"。

#### 使用总数头 {#using-total-number-header}

除了标准的链接头，Logto 还会添加一个 `Total-Number` 头：

```
Total-Number: 216
```

这对于显示页码非常方便和有用。

#### 更改页码和页面大小 {#changing-page-number-and-page-size}

有两个可选的查询参数：

- `page`：表示页码，从 1 开始，默认值为 1。
- `page_size`：表示每页的项目数，默认值为 20。

### 速率限制 {#rate-limit}

:::note
这仅适用于 Logto Cloud。
:::

为了确保我们服务的可靠性和安全性，我们使用通用防火墙来监控和管理网站流量。虽然我们不强制执行严格的速率限制，但我们建议用户将活动限制在每 10 秒约 200 次请求，以避免触发我们的保护措施。

## 相关资源 {#related-resources}

<Url href="https://blog.logto.io/management-api">
  使用 Logto Management API：分步指南
</Url>

<Url href="https://blog.logto.io/use-postman-to-obtain-m2m-access-token">使用 Postman 在几分钟内获取 M2M 访问令牌</Url>
