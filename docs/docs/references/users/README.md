# 👨‍👩‍👧‍👦 Users

The _users_ are the main entities of the identity service.
We will describe the user-related concepts and details in the following.

## Profile

Each user has a profile containing [all user information](#property-reference).

It consists of the following types of data:

- [Social identities](./social-identities.md): stores the user info retrieved from social sign-in (i.e., sign-in with a social connector), such as Facebook, GitHub, and WeChat.
- [Custom data](./custom-data.md): stores additional user info not listed in the pre-defined user properties, such as user-preferred color and language.
- [Basic data](#basic-data): is the basic info from the user profile. It stores all other _user_'s properties except for _identities_ and _custom_data_, such as user id, username, email, phone number, and when the user last signed in.

Here is a sample of a user's data which is retrieved from a sign-in to Facebook:

```json
{
  "id": "iHXPuSb9eMzt",
  "username": null,
  "primaryEmail": null,
  "primaryPhone": null,
  "name": "John Joe",
  "avatar": "https://example.com/avatar.png",
  "customData": {
    "preferences": {
      "language": "en",
      "color": "#f236c9"
    }
  },
  "identities": {
    "facebook": {
      "userId": "106077000000000",
      "details": {
        "id": "106077000000000",
        "name": "John Joe",
        "email": "johnjoe@logto.io",
        "avatar": "https://example.com/avatar.png"
      }
    }
  },
  "lastSignInAt": 1655799453171,
  "applicationId": "admin_console"
}
```

You can query the user profile using
[Admin Console](../../../docs/recipes/manage-users/admin-console.md#view-and-update-user-profile) or
[Management API](../../../docs/recipes/manage-users/management-api.md),
such as <a href="/api/#tag/Users/paths/~1api~1users~1:userId/get" target="_blank">`GET /api/users/:userId`</a>.

## Basic data

Let's walk through all properties in of user's _basic data_.

### id

_id_ is a unique auto-generated key to identify the user in Logto.

### username

_username_ is used for sign-in with _username_ and password.

Its value is from the username that the user first registered with.
It may be `null`.
Its non-null value should be no longer than 128 characters, only contain letters, numbers, and underscores (`_`), and NOT start with a number.

### primary_email

_primary_email_ is the user's email address, used for sign-in with the email and passcode.

Its value is usually from the email address that the user first registered with.
It may be `null`.
Its max length is 128.

### primary_phone

_primary_phone_ is the user's phone number, used for sign-in with the phone number and passcode from SMS.

Its value is usually from the phone number that the user first registered with.
It may be `null`.
Its non-null value should contain numbers prefixed with the
[country calling code](https://en.wikipedia.org/wiki/List_of_country_calling_codes) (excluding the plus sign `+`).

### name

_name_ is the user's full name.
Its max length is 128.

### avatar

_avatar_ is the URL pointing to the user's avatar image.
Its max length is 2048.

If the user registers with a social connector like Facebook and WeChat, its value may be retrieved from the social user info.

### application_id

The value of [_application_id_](../applications/README.mdx#application-id) is from the application the user first signed in to.
It may be `null`.

### last_signed_in_at

_last_signed_in_at_ is the timestamp with the timezone when the user signed in last time.

### password_encrypted

_password_encrypted_ is used to store the user's encrypted password.

Its value is from the password that the user first registered with.
It may be `null`.
If its value is non-null, its original content before encryption should be at least six characters.

### password_encryption_method

_password_encryption_method_ is used to encrypt the user's password.
Its value is initialized when the user registers with the username and password.
It may be `null`.

Logto uses [Argon2](https://en.wikipedia.org/wiki/Argon2)'s implementation [node-argon2](https://github.com/ranisalt/node-argon2) as the encryption method by default; see the reference for details if you're interested.

Sample a _password_encrypted_ and _password_encryption_method_ from a user whose password is `123456`:

```json
{
  "password_encryption_method": "Argon2i",
  "password_encrypted": "$argon2i$v=19$m=4096,t=10,p=1$aZzrqpSX45DOo+9uEW6XVw$O4MdirF0mtuWWWz68eyNAt2u1FzzV3m3g00oIxmEr0U"
}
```

### is_suspended

_is_suspended_ is a boolean value that indicates whether a user is suspended or not. The value can be managed by calling the [Logto Management API](../../../docs/recipes/manage-users/management-api.md) or using [Admin Console](../../../docs/recipes/manage-users/admin-console.md#suspend-user).

Once a user is suspended the pre-granted refresh tokens will be revoked immediately and the user won't be able to get authenticated by Logto anymore.

## Property reference

The following properties (except _password_encrypted_ and _password_encryption_method_) are visible on the user profile,
which means you can query them using [Management API](../../../docs/recipes/manage-users/management-api.md).

| Name                                                      | Type      | Description                                   | Unique | Required |
| --------------------------------------------------------- | --------- | --------------------------------------------- | ------ | -------- |
| [id](#id)                                                 | string    | Unique identifier                             | ✅     | ✅       |
| [username](#username)                                     | string    | Username for sign-in                          | ✅     | ❌       |
| [primary_email](#primary_email)                           | string    | Primary email                                 | ✅     | ❌       |
| [primary_phone](#primary_phone)                           | string    | Primary phone number                          | ✅     | ❌       |
| [name](#name)                                             | string    | Full name                                     | ❌     | ❌       |
| [avatar](#avatar)                                         | string    | URL pointing to user's avatar image           | ❌     | ❌       |
| [identities](./social-identities.md)                      | object    | User info retrieved from social sign-in       | ❌     | ✅       |
| [custom_data](./custom-data.md)                           | object    | Additional info in customizable properties    | ❌     | ✅       |
| [application_id](#application_id)                         | string    | Application ID that the user first registered | ❌     | ✅       |
| [last_sign_in_at](#last_signed_in_at)                     | date time | Timestamp when the user signed in last time   | ❌     | ✅       |
| [password_encrypted](#password_encrypted)                 | string    | Encrypted password                            | ❌     | ❌       |
| [password_encryption_method](#password_encryption_method) | string    | Password encryption method                    | ❌     | ❌       |
| [is_suspended](#is_suspended)                             | bool      | User suspend mark                             | ❌     | ✅       |

:::note

- **Unique**: Ensures the [uniqueness](https://www.postgresql.org/docs/current/ddl-constraints.html#DDL-CONSTRAINTS-UNIQUE-CONSTRAINTS) of the values entered into a property of a database table.
- **Required**: Ensures that the values entered a property of a database table can NOT be `NULL`.

:::
