---
{
  "title": "Calling Java",
  "order": 49,
  "group": "Java & modules"
}
---

Java constructors and methods are directly available.

::::compare
```kalm Example.kalm
use java.time.LocalDate

pub fun tomorrow() -> Text:
    return LocalDate.now().plusDays(1L).toString()
```
```kalms Example.kalms
use java.time.LocalDate

fun tomorrow() -> Text:
    return LocalDate.now().plusDays(1L).toString()
```
```java Example.java
import java.time.LocalDate;

public final class Example {
    public static String tomorrow() { return LocalDate.now().plusDays(1L).toString(); }
}
```
::::

[Learn more](/docs/java/).
