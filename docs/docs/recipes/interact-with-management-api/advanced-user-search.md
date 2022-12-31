# Advanced user search

Directly using Management API to leverage advanced user search conditions.

## Perform a search request

Use `GET /api/users` for searching users. Note it is a Management API that requires auth like others. See [Interact with Management API](./README.md) for the interaction recipe.

### Sample

**Request**

```bash
curl --location --request GET 'http://<your-logto-endpoint>/api/users?search=%25alice%25&hideAdminUser=true'
```

**Response**

An array of `User` entity.

```json
[
  {
    "id": "MgUzzDsyX0iB",
    "username": "alice_123",
    "primaryEmail": "alice@some.email.domain",
    "primaryPhone": null,
    "name": null,
    "avatar": null
    // ...
  }
]
```

### Parameters

A search request consists of the following parameter keys:

- Search keywords: `search`, `search.*`
- Search mode for fields: `mode`, `mode.*` (default value `'like'`, available `['exact', 'like', 'similar_to', 'posix']`)
- Joint mode: `joint` or `jointMode` (default value `'or'`, available `['or', 'and']`)
- Is case-sensitive: `isCaseSensitive` (default value `false`)
- Hide admin users: `hideAdminUser` (default value `false`)

This API has [pagination](./README.md#using-pagination) enabled.

Let's go through them via some examples. All search params will be formatted as a constructor of `URLSearchParams`.

### Basic fuzzy search

If you want to perform a fuzzy search over all available fields, just provide a value for key `search`. It will use [the `like` operator](https://www.postgresql.org/docs/current/functions-matching.html#FUNCTIONS-LIKE) under the hood:

```ts
new URLSearchParams([['search', '%foo%']]);
```

This search will iterate over all available fields in a user search, i.e. `id`, `primaryEmail`, `primaryPhone`, `username`, `name`.

### Specify fields

What if you want to limit the search in `name` only? To search someone that includes `foo` in their name, just use the `.` symbol to specify the field:

```ts
new URLSearchParams([['search.name', '%foo%']]);
```

Remember nested fields are not supported, e.g. `search.name.first` will result an error.

You can also specify multiple fields at the same time:

```ts
new URLSearchParams([
  ['search.name', '%foo%'],
  ['search.primaryEmail', '%@gmail.com'],
]);
```

Means to search users that have `foo` in name **OR** their email ends with `@gmail.com`.

### Changing the joint mode

If you want the API only returns the result that satisfies ALL the conditions, set the joint mode to `and`:

```ts
new URLSearchParams([
  ['search.name', '%foo%'],
  ['search.primaryEmail', '%@gmail.com'],
  ['joint', 'and'],
]);
```

Means to search users that have `foo` in name **AND** their email ends with `@gmail.com`.

### Exact match and case sensitivity

Say you want to search whose name is exact "Alice". You can set `mode.name` to use exact match.

```ts
new URLSearchParams([
  ['search.name', 'Alice'],
  ['mode.name', 'exact'],
]);
```

You may find it has the same effect when using the `like` mode (default) v.s. specifying `exact`. One difference is `exact` mode uses `=` for comparing while `like` uses `like` or `ilike`. Theoretically `=` should have a better performance.

Plus, in `exact` mode, you can pass multiple values for matching, and they will be connected with `or`:

```ts
new URLSearchParams([
  ['search.name', 'Alice'],
  ['search.name', 'Bob'],
  ['mode.name', 'exact'],
]);
```

It will match the users with name "Alice" **OR** "Bob".

By default search is case-insensitive. To be more precise, set the search as case-sensitive:

```ts
new URLSearchParams([
  ['search.name', 'Alice'],
  ['search.name', 'Bob'],
  ['mode.name', 'exact'],
  ['isCaseSensitive', 'true'],
]);
```

Note `isCaseSensitive` is a global config. Thus EVERY field will follow it.

### Regular expression (RegEx)

PostgreSQL supports two types of regular expressions, [similar to](https://www.postgresql.org/docs/current/functions-matching.html#FUNCTIONS-SIMILARTO-REGEXP) and [posix](https://www.postgresql.org/docs/current/functions-matching.html#FUNCTIONS-POSIX-REGEXP). Set `mode` to `similar_to` or `posix` to search by regular expressions:

```ts
new URLSearchParams([
  ['search', '^T.?m Scot+$'],
  ['mode', 'posix'],
]);
```

> **Note**
> Mode `similar_to` only works in case-sensitive searches.

### Match mode override

By default, all keywords will inherit the match mode from the general search:

```ts
new URLSearchParams([
  ['search', '^T.?m Scot+$'],
  ['mode', 'posix'],
  ['search.primaryEmail', 'tom%'], // Posix mode
  ['joint', 'and'],
]);
```

To override for specific field:

```ts
new URLSearchParams([
  ['search', '^T.?m Scot+$'],
  ['mode', 'posix'],
  ['search.primaryEmail', 'tom%'], // Like mode
  ['mode.primaryEmail', 'like'],
  ['search.phone', '0{3,}'], // Posix mode
  ['joint', 'and'],
]);
```

### Hide admin user

For convenience, you can apply `hideAdminUser` to quickly filter out all admins from the result:

```ts
new URLSearchParams([
  ['search', '%foo%'],
  ['hideAdminUser', 'true'],
]);
```
