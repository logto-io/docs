---
sidebar_label: 集成用户数据
sidebar_position: 3
---

# 集成 Logto 的用户数据

## 标识用户

我们推荐使用 `user.id` 来标识用户，因为我们保证每个用户都有一个唯一的非空 `id` 属性。

另外，`username`、`primary_email` 和 `primary_phone` 也是唯一属性。但是它们可能为空（`null`)。如果想使用这几个属性来标识用户，务必记得处理 `null` 的情况。
