---
{
  "title": "as",
  "order": 16,
  "group": "Values"
}
---

Cast to a specific JVM type; use a nullable target to allow null.

::::compare
```kalm Example.kalm
pub fun text(value: Any) -> Text = value as Text
pub fun maybeText(value: Any) -> Text? = value as Text?
```
```kalms Example.kalms
fun text(value: Any) -> Text = value as Text
fun maybeText(value: Any) -> Text? = value as Text?
```
```java Example.java
import java.util.Objects;

public final class Example {
    public static String text(Object value) { return (String) Objects.requireNonNull(value); }
    public static String maybeText(Object value) { return (String) value; }
}
```
::::

[Learn more](/docs/language/values/).
