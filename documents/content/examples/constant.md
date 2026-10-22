---
{
  "title": "constant",
  "order": 45,
  "group": "Properties"
}
---

Declare a public static final compile-time value.

::::compare
```kalm Example.kalm {"style":"indentation"}
constant DEFAULT_LIMIT: int = 100
constant TITLE: Text = "Kalm"

pub fun limit() -> int = DEFAULT_LIMIT
```
```kalm Example.kalm {"style":"braces"}
constant DEFAULT_LIMIT: int = 100
constant TITLE: Text = "Kalm"

pub fun limit() -> int = DEFAULT_LIMIT
```
```kalms Example.kalms {"style":"indentation"}
constant DEFAULT_LIMIT: int = 100
constant TITLE: Text = "Kalm"

fun limit() -> int = DEFAULT_LIMIT
```
```kalms Example.kalms {"style":"braces"}
constant DEFAULT_LIMIT: int = 100
constant TITLE: Text = "Kalm"

fun limit() -> int = DEFAULT_LIMIT
```
```java Example.java
public final class Example {
    public static final int DEFAULT_LIMIT = 100;
    public static final String TITLE = "Kalm";

    public static int limit() {
        return DEFAULT_LIMIT;
    }
}
```
::::

[Learn more](/docs/language/types/).
