Typical values in _types.ts_:

- Connector config type guard
- Request parameter types
- Response parameter types
- Error types

:::note
We STRONGLY recommend using [_Zod_](https://github.com/colinhacks/zod) to build type guards for the connector's config, requests, and responses.

Zod could be beneficial when trying to set up connectors, and a toast with detailed error messages from ZodError will show up if your config JSON is invalid.
:::
