---
{
  "title": "is",
  "order": 15,
  "group": "Values"
}
---

A type check refines a stable binding inside the true branch.

::::compare
```kalm Example.kalm
pub fun loud(value: Any) -> Text:
    if value is Text:
        return value.upper()
    return "not text"
```
```kalms Example.kalms
fun loud(value: Any) -> Text:
    if value is Text:
        return value.upper()
    return "not text"
```
```java Example.java
import java.util.Locale;

public final class Example {
    public static String loud(Object value) {
        if (value instanceof String text) return text.toUpperCase(Locale.ROOT);
        return "not text";
    }
}
```
::::

[Learn more](/docs/language/values/).
