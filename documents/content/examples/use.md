---
{
  "title": "use / as",
  "order": 48,
  "group": "Java & modules"
}
---

Import a type, optionally under a shorter name.

::::compare
```kalm Example.kalm {"style":"indentation"}
use java.time.LocalDate as Day

pub fun year() -> int = Day.now().getYear()
```
```kalm Example.kalm {"style":"braces"}
use java.time.LocalDate as Day

pub fun year() -> int = Day.now().getYear()
```
```kalms Example.kalms {"style":"indentation"}
use java.time.LocalDate as Day

fun year() -> int = Day.now().getYear()
```
```kalms Example.kalms {"style":"braces"}
use java.time.LocalDate as Day

fun year() -> int = Day.now().getYear()
```
```java Example.java
import java.time.LocalDate;

public final class Example {
    // Java imports cannot rename a type.
    public static int year() {
        return LocalDate.now().getYear();
    }
}
```
::::

[Learn more](/docs/java/).
