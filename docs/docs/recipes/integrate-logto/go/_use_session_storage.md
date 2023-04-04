In traditional web applications, the user authentication information will be stored in the user session.

Logto SDK provides a `Storage` interface, you can implement a `Storage` adapter based on your web framework so that the Logto SDK can store user authentication information in the session.

:::note
We do NOT recommend using cookie-based sessions, as user authentication information stored by Logto may exceed the cookie size limit.
In this example, we use memory-based sessions. You can use Redis, MongoDB, and other technologies in production to store sessions as needed.
:::

The `Storage` type in the Logto SDK is as follows:

```go
// github.com/logto-io/client/storage.go
package client

type Storage interface {
	GetItem(key string) string
	SetItem(key, value string)
}
```

We will use [github.com/gin-contrib/sessions](https://github.com/gin-contrib/sessions) as an example to demonstrate this process.
