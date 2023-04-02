# LogtoException

class LogtoException(type: [LogtoException.Type](-type/index.md), cause: [Throwable](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-throwable/index.html)? = null) : [RuntimeException](https://developer.android.com/reference/kotlin/java/lang/RuntimeException.html)

## Constructors

| Name           | Summary                                                                                                                                                                |
| -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| LogtoException | fun LogtoException(type: [LogtoException.Type](-type/index.md), cause: [Throwable](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-throwable/index.html)? = null) |

## Types

| Name                   | Summary                                                                                                                                                 |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Type](-type/index.md) | enum [Type](-type/index.md) : [Enum](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-enum/index.html)&lt;[LogtoException.Type](-type/index.md)&gt; |

## Properties

| Name   | Summary                                                                                              |
| ------ | ---------------------------------------------------------------------------------------------------- |
| detail | var detail: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)? = null |
