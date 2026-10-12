---
{
  "title": "Null refinement",
  "order": 74,
  "group": "Values"
}
---

A non-null check refines a stable fix binding in its branch.

::::compare
```kalm Example.kalm
pub fun loud(name: Text?) -> Text:
    fix candidate = name
    if candidate != null:
        return candidate.upper()
    return "GUEST"
```
```kalms Example.kalms
fun loud(name: Text?) -> Text:
    fix candidate = name
    if candidate != null:
        return candidate.upper()
    return "GUEST"
```
```java Example.java
import java.util.Locale;

public final class Example {
    public static String loud(String name) {
        final String candidate = name;
        if (candidate != null) return candidate.toUpperCase(Locale.ROOT);
        return "GUEST";
    }
}
```
::::

[Learn more](/docs/language/values/).
