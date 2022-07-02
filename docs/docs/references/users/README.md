# 👨‍👩‍👧‍👦 Users

The _users_ are the main entities of the identity service.
We will describe the user-related concepts and details in the following.

## Profile

Each user has a profile containing the user information.

A user profile consists of the following types of data:

- [**Basic data**](#basic-data): contains basic info in pre-defined attributes, such as user id, username, email, phone number, and when the user last signed in.
- [**Custom data**](#custom-data): contains additional info in customizable attributes, such as user-preferred color and language.
- [**Identities**](#identities): contains the user info retrieved from social sign-in (i.e., sign-in with a social connector), such as Facebook, GitHub, and WeChat.

### All attributes

The following attributes (except `password_encrypted` and `password_encryption_method`) are visible on the user profile,
which means you can query them using Management API.

| Name                                                      | Type         | Description                                   | Unique | Required |
| --------------------------------------------------------- | ------------ | --------------------------------------------- | ------ | -------- |
| [id](#user-id)                                            | string       | Unique identifier                             | ✅     | ✅       |
| [username](#username)                                     | string       | Username for sign-in                          | ✅     | ❌       |
| [primary_email](#primary-email)                           | string       | Primary email                                 | ✅     | ❌       |
| [primary_phone](#primary-phone)                           | string       | Primary phone number                          | ✅     | ❌       |
| [name](#name)                                             | string       | Full name                                     | ❌     | ❌       |
| [avatar](#avatar)                                         | string       | URL pointing to user's avatar image           | ❌     | ❌       |
| [role_names](#role-names)                                 | string array | List of roles                                 | ❌     | ✅       |
| [identities](#identities)                                 | object       | User info retrieved from social sign-in       | ❌     | ✅       |
| [custom_data](#custom-data)                               | object       | Additional info in customizable attributes    | ❌     | ✅       |
| [application_id](#application-id)                         | string       | Application ID that the user first registered | ❌     | ✅       |
| [last_sign_in_at](#last-signed-in-at)                     | date time    | Timestamp when the user signed in last time   | ❌     | ✅       |
| [password_encrypted](#password-encrypted)                 | string       | Encrypted password                            | ❌     | ❌       |
| [password_encryption_method](#password-encryption-method) | string       | Password encryption method                    | ❌     | ❌       |

:::note

- **Unique**: Ensures the [uniqueness](https://www.postgresql.org/docs/current/ddl-constraints.html#DDL-CONSTRAINTS-UNIQUE-CONSTRAINTS) of the values entered into an attribute of a database table.
- **Required**: Ensures that the values entered an attribute of a database table can NOT be `NULL`.

:::

---

#### Sample user profiles

A user that signed in with Facebook:

```json
{
  "id": "iHXPuSb9eMzt",
  "username": null,
  "primaryEmail": null,
  "primaryPhone": null,
  "name": "John Joe",
  "avatar": "https://logto.dev/console/avatar-003.8dde785f.png",
  "roleNames": ["admin"],
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
[Admin Console](../../../docs/recipes/manage-users/using-admin-console#view-and-update-user-profile) or
[Management API](../../../docs/recipes/manage-users/using-management-api),
such as <a href="/api/#tag/Users/paths/~1api~1users~1:userId/get" target="_blank">`GET /api/users/:userId`</a>.

### basic data

_basic data_ contains the basic user info in pre-defined attributes.

#### user id

_user id_ is a unique auto-generated key to identify the user in Logto.

#### username

_username_ is used for sign-in with _username_ and password.

When the user has not registered with their username, their _username_ may be empty.
When the _username_ is non-empty, it should be at most 128 characters, only contain letters, numbers, and underscores (`_`), and NOT start with a number.

#### primary email

_primary email_ is the user's email address, used for sign-in with the email and passcode.

When the user has not registered with their email, their _primary email_ may be empty.
When the _primary email_ is non-empty, it should be at most 128 characters.

#### primary phone

_primary phone_ is the user's phone number, used for sign-in with the phone number and passcode from SMS.

When the user has not registered with their phone number, their _primary phone_ may be empty.
When the _primary phone_ is non-empty, it should contain numbers prefixed with the
[country calling code](https://en.wikipedia.org/wiki/List_of_country_calling_codes) (excluding the plus sign `+`).

#### name

_name_ is the user's full name.
Its max length is 128.

#### avatar

_avatar_ is the URL pointing to the user's avatar image.

If the user registers with a social connector like Facebook and WeChat, their _avatar_ may be retrieved from the social user info.
Its max length is 2048.

#### role names

_roles names_ represent the roles granted to the user in Logto.

A _role_ is a group of permissions that you can grant to users.
Using roles makes it easier to grant, revoke, and adjust permissions than assigning permissions to users individually.

:::info

For example, only the users whose roles names contain `admin`, i.e., the admin users, have permission to use Admin Console and Management API in Logto.

:::

#### application id

_application id_ is the [application ID](../applications/#application-id) that the user first registered.

#### last signed in at

_last signed in at_ is the timestamp with the timezone when the user signed in last time.

#### password encrypted

_password encrypted_ is used to store the user's encrypted password.

When the user has not registered with their username and password, their _password encrypted_ may be empty.
The password before encryption should be at least six characters.

#### password encryption method

_password encryption method_ is used to encrypt the user's password.
When the user has not registered with their username and password, their _password encryption method_ may be empty.

Logto uses [Argon2](https://en.wikipedia.org/wiki/Argon2)'s implementation [node-argon2](https://github.com/ranisalt/node-argon2) as the encryption method by default; see the reference for details if you're interested.

Sample a `password_encrypted` and `password_encryption_method` from a user whose password is "123456":

```json
{
  "password_encryption_method": "Argon2i",
  "password_encrypted": "$argon2i$v=19$m=4096,t=10,p=1$aZzrqpSX45DOo+9uEW6XVw$O4MdirF0mtuWWWz68eyNAt2u1FzzV3m3g00oIxmEr0U"
}
```

### custom data

_custom data_ contains additional info in customizable attributes.
For example, you can use _custom data_ to do the following things:

- Record whether or not specific actions have been done by the user, such as having seen the welcome page.
- Store application-specific data in the user profile, such as the user's preferred language and appearance per application.

Sample _custom data_ from an admin user in Logto:

```json
{
  "adminConsolePreferences": {
    "language": "en",
    "appearanceMode": "system",
    "experienceNoticeConfirmed": true
  }
}
```

Each user's _custom data_ is stored in an individual JSON object.

:::caution Put sensitive data in _custom data_

You may fetch a user profile as a whole containing _custom data_ using Management API and send it to the frontend apps or external backend services.
Therefore, putting the sensitive information in _custom data_ may cause data leaks.

If you still want to put the sensitive information in _custom data_, we recommend encrypting it first.
Only encrypt/decrypt it in a trusted party like your backend services, and avoid doing it in the frontend apps.
These will minimize the damage if your users' _custom data_ is leaked by mistake.

:::

You can update the user's _custom data_ using
[Admin Console](../../../docs/recipes/manage-users/using-admin-console#view-and-update-user-profile) or
[Management API](../../../docs/recipes/manage-users/using-management-api),
such as <a href="/api/#tag/Users/paths/~1api~1users~1:userId/patch" target="_blank">`PATCH /api/users/:userId`</a>.

:::caution Update carefully

Updating a user's _custom data_ will overwrite (not merge) its original content as a whole in the storage.

:::

### identities

_identities_ contains the user info retrieved from social sign-in
(i.e., sign-in with a social connector).

The user info varies by provider, and it typically includes the following:

- [Target](#TODO-link-to-connector-reference) of this provider, such as lowercase "facebook", "google", or "wechat"
- User's unique identifier for this provider
- User's name
- User's verified email
- User's avatar

The user's account may be linked to multiple social identity providers via social sign-in, such as Facebook, Google, and WeChat;
the related user info retrieved from these providers will be stored in the _identities_ object.

Sample _identities_ from a user:

```json
{
  "facebook": {
    "userId": "5110888888888888",
    "details": {
      "id": "5110888888888888",
      "name": "John Joe",
      "email": "johnjoe@logto.io",
      "avatar": "https://example.com/avatar.png"
    }
  },
  "wechat": {
    "userId": "O8sU-6JWMMNZzuXo6-xaEjouyQZ8",
    "details": {
      "id": "O8sU-6JWMMNZzuXo6-xaEjouyQZ8",
      "name": "John Joe",
      "avatar": "https://example.com/avatar.png"
    }
  }
}
```

:::info

The _identities_ can NOT be updated using Admin Console or Management API.

Every time the user signs in with a social connector,
their _identities_ will be automatically imported or updated from the identity provider.

:::
