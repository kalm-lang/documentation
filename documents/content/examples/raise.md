---
{
  "title": "raise",
  "order": 31,
  "group": "Flow"
}
---

Raise a JVM exception when a condition cannot be accepted.

::::compare
```kalm Example.kalm {"style":"indentation"}
pub fun positive(value: int) -> int:
    if value < 1:
        raise java.lang.IllegalArgumentException("Expected a positive value")

    return value
```
```kalm Example.kalm {"style":"braces"}
pub fun positive(value: int) -> int {
    if value < 1 {
        raise java.lang.IllegalArgumentException("Expected a positive value")
    }
    return value
}
```
```kalms Example.kalms {"style":"indentation"}
fun positive(value: int) -> int:
    if value < 1:
        raise java.lang.IllegalArgumentException("Expected a positive value")

    return value
```
```kalms Example.kalms {"style":"braces"}
fun positive(value: int) -> int {
    if value < 1 {
        raise java.lang.IllegalArgumentException("Expected a positive value")
    }
    return value
}
```
```java Example.java
public final class Example {
    public static int positive(int value) {
        if (value < 1) throw new IllegalArgumentException(
            "Expected a positive value"
        );
        return value;
    }
}
```
::::

[Learn more](/docs/language/resources/).
