---
sidebar_label: Custom data
sidebar_position: 2
---

# Custom data

_custom_data_ stores additional user info not listed in the pre-defined user properties.

You can use _custom_data_ to do the following things:

- Record whether specific actions have been done by the user, such as having seen the welcome page.
- Store application-specific data in the user profile, such as the user's preferred language and appearance per application.
- Maintain other arbitrary data related to the user.

Sample _custom_data_ from an admin user in Logto:

```json
{
  "adminConsolePreferences": {
    "language": "en",
    "appearanceMode": "system",
    "experienceNoticeConfirmed": true
  },
  "customDataFoo": {
    "foo": "foo"
  },
  "customDataBar": {
    "bar": "bar"
  }
}
```

Each user's _custom_data_ is stored in an individual JSON object.

:::caution DO NOT put sensitive data in _custom_data_

You may fetch a user profile containing _custom_data_ using Management API and send it to the frontend apps or external backend services.
Therefore, putting the sensitive information in _custom_data_ may cause data leaks.

If you still want to put the sensitive information in _custom_data_, we recommend encrypting it first.
Only encrypt/decrypt it in a trusted party like your backend services, and avoid doing it in the frontend apps.
These will minimize the loss if your users' _custom_data_ is leaked by mistake.

:::

You can update the user's _custom_data_ using
[Admin Console](../../../docs/recipes/manage-users/admin-console.md#view-and-update-user-profile) or
[Management API](../../../docs/recipes/manage-users/management-api.md),
such as <a href="/api/#tag/Users/paths/~1api~1users~1:userId/patch" target="_blank">`PATCH /api/users/:userId`</a>.

:::caution Update carefully

Updating a user's _custom_data_ will completely overwrite its original content in the storage.

For example, if your input of calling update _custom_data_ API looks like this (suppose that the original _custom_data_ is previous shown sample data):

```json
{
  "customDataBaz": {
    "baz": "baz"
  }
}
```

then new _custom_data_ value after updating should be:

```json
{
  "customDataBaz": {
    "baz": "baz"
  }
}
```

That is, the updated field value has nothing to do with the previous value.

:::
