---
sidebar_position: 4
---

# 备份代码

## 概念

备份代码，也称为恢复代码，是用于多因素认证 (MFA) 的一次性使用代码，当用户的主要认证 (Authentication) 因素（例如，认证 (Authentication) 应用程序或硬件令牌）不可用时，作为备份。

丢失它们可能会导致账户恢复的挑战。因此，建议在启用备份代码之前设置一个额外的主要因素，并给予其优先权。

一旦用户配置了额外因素，Logto 会自动为用户生成 10 个备份代码。每个代码只能使用一次。建议用户在用完所有现有代码之前，在用户账户设置中（可通过 [Management API](/integrate-logto/interact-with-management-api/) 访问）重新生成一组新的代码。

## 认证 (Authentication) 流程

- **备份代码设置流程**

![备份代码设置流程](./assets/backup-codes-set-up-flow.png)

- **备份代码验证流程**

![备份代码验证流程](./assets/backup-codes-verification-flow.png)
