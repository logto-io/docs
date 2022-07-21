---
sidebar_position: 3
---

# You don't need a user table

## Identify user

We recommend using `user.id` to identify a user since we guarantee every user has a unique and non-null `id` property.

Also, `username` `primary_email` and `primary_phone` are unique properties. But they may be empty. Remember to handle `null` properly if you want to use these properties to identify a user.

## Why no user table

When preparing to take Logto as an identity solution, you may think about approaches to organizing user information and user-related stuffs.

Traditionally, developers will create a user table in a SQL database containing the profile and other user-related information, then create a many-to-one relation in other tables, a `user` column pointing to the user table. For other identity providers, take Google as an example. Create a column named `google_id` to achieve "sign in with Google" linking. Now, for Logto, you may want to create a column `logto_id`, but it is not a good way since Logto is more than a social provider, it is a solution that can take charge of all user-related stuffs.

With the help of Logto, **you don't need a user table**.

Here is a common practice (with Logto):

Forget the user table, store user info in Logto:

1. Create `user_id` column in other tables, save Logto's `user.id`, refer to the previous chapter [Identify User](#identify-user).
2. Call [Logto's Management API](./management-api.md) for CRUD: create and update a user, get user detail, list users...
3. Save any additional user information to custom data. Check this link for more info: [User Custom Data](../../references/users/custom-data.md).

By doing this, Logto is now playing the "user table" role.

Let's say that you have an "Online Store" app using Logto as the identity service, and you want two features:

1. Store user preference data in the cloud.
2. Access control for different groups of users.

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

## Compare with the common practice

TODO:

- how to do in common practice
- pros and cons
