- A resource value indicates the target service or resource to which access is being requested.
- Its value **MUST** be an absolute URI.
- The URI **MUST NOT** include a fragment component.
- It **SHOULD NOT** include a query component.
- You **SHOULD** provide the most specific URI that it can for the complete API or set of resources it intends to access. (In practice, a client will know a `base URI` for the application or resource that it interacts with, which is appropriate to use as the value of the resource parameter.)

i.e. Logto management API base URI

```
https://logto.dev/api
```

By default, this API resource is pre-registered. All the management APIs under this URI are protected by Logto server.
