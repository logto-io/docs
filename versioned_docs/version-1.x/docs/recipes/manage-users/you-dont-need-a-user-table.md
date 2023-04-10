---
sidebar_position: 4
---

# Common practice: you don't need a user table

## Identify user

We suggest utilizing the `user.id` property to identify a user, as we ensure each user has a distinct and non-null `id`. Additionally, the `username`, `primary_email`, and `primary_phone` properties are unique but may be empty. Therefore, it is important to handle `null` values appropriately if you intend to use these properties as identifiers for a user.

## Why skip preparing a user table?

When using Logto as an identity solution, it is important to consider how to organize user information and related data. This involves defining a user schema to determine the structure and properties of a user object and deciding how to store and manage user-related data.

In the past, it was common for developers to create a user table in a SQL database to store a user's profile and related information. They would then establish a many-to-one relationship in other tables using a `user` column that pointed back to the user table. Other identity providers, such as Google, would require the creation of a `google_id` column to enable "sign in with Google" functionality. However, this approach is not appropriate for Logto since it is not just a service provider, but also an identity provider. Logto is a comprehensive solution that can manage all user-related information, including identifiers, social connections, custom data, and more. Therefore, creating a `logto_id` column is not an effective strategy.

Using Logto eliminates the need for a user table.

Forget the user table, store user info in Logto. Here is a common practice:

1. Create a `user_id` column in other tables and save the user's user.id value from Logto. You can refer to the previous chapter on [Identify User](#identify-user) for more information.
2. Use [Logto's Management API](./management-api.md) f for CRUD operations, such as creating and updating users, getting user details, and listing users.
3. Store any additional user information in custom data. You can refer to the [User Custom Data](../../references/users/custom-data.md) for more information.

By utilizing these methods, Logto essentially takes on the role of a "user table".

For example, let's consider an "Online Store" application that uses Logto as its identity service. If you want to implement two features

1. Storing user preference data in the cloud
2. Implementing access control for different groups of users

Logto can facilitate both of these tasks.

With the help of _customData_, we can quickly implement this, and the data object will be like:

```json
{
  "appearenceMode": "DarkMode",
  "role": "customer"
}
```

:::caution
You cannot do "join" or other complex queries on Logto's user storage. In this circumstance, you should use a cache layer or your own user table.
:::
