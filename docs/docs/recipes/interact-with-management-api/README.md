---
sidebar_position: 7
---

# 🚝 Interact with Management API

Admin Console is great, but we know it does not always fit the scenario.

For example, we don't enable a normal API to update the current user's profile, because it may cause unexpected results (imagine a user updates his role to "admin"), and things may vary by the actual business.

In this case, you need to use a backend service that directly talks to [Logto Management API](/api), and decide what to expose on demand.

## How to?

1. Follow the tutorial [Create and integrate the first application](/docs/tutorials/get-started/create-and-integrate-the-first-app) to create a Machine to Machine app in Admin Console.
2. Follow the guide [Machine to Machine: Auth with Logto](/docs/recipes/integrate-logto/machine-to-machine) to fetch an Access Token for the API identifier `https://api.logto.io` (indicates Management API).
3. Interact with Management API with Bearer authorization using the Access Token.

:::note
Usually the Access Token has a short expiration. If you have a local cache, remember to check and fetch a new Access Token if needed before sending requests.
:::

## Using pagination

Some of the API responses may include many results, the results will be paginated. Logto provides 2 kinds of pagination info.

### Using link headers

A paginated response header will be like:

```
Link: <https://logto.dev/users?page=1&page_size=20>; rel="first"
```

The link header provides the URL for the previous, next, first, and last page of results:

- The URL for the previous page is followed by rel="prev".
- The URL for the next page is followed by rel="next".
- The URL for the last page is followed by rel="last".
- The URL for the first page is followed by rel="first".

### Using total-number header

In addition to the standard link headers, Logto will also add a `Total-Number` header:

```
Total-Number: 216
```

That would be very convenient and useful to show page numbers.

### Changing page number and page size

There are 2 optional query parameters:

- `page`: indicates the page number, starts from 1, the default value is 1.
- `page_size`: indicates the number of items per page, the default value is 20.
