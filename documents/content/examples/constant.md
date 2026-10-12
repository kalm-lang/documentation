---
{
  "title": "constant",
  "order": 45,
  "group": "Properties"
}
---

Declare a public static final compile-time value.

::::compare
```kalm Example.kalm
constant DEFAULT_LIMIT: Int = 100
constant TITLE: Text = "Kalm"

pub fun limit() -> Int = DEFAULT_LIMIT
```
```kalms Example.kalms
constant DEFAULT_LIMIT: Int = 100
constant TITLE: Text = "Kalm"

fun limit() -> Int = DEFAULT_LIMIT
```
```java Example.java
public final class Example {
    public static final int DEFAULT_LIMIT = 100;
    public static final String TITLE = "Kalm";
    public static int limit() { return DEFAULT_LIMIT; }
}
```
::::

[Learn more](/docs/language/types/).
