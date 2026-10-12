---
{
  "title": "augment",
  "order": 52,
  "group": "Java & modules"
}
---

Add Kalm extension functions without modifying the Java class.

::::compare
```kalm Example.kalm
augment Text:
    fun excited() -> Text = self.upper() + "!"

pub fun greeting() -> Text = "hello".excited()
```
```kalms Example.kalms
augment Text:
    fun excited() -> Text = self.upper() + "!"

fun greeting() -> Text = "hello".excited()
```
```java Example.java
import java.util.Locale;

public final class Example {
    // Java uses a helper instead of an extension method.
    public static String excited(String value) { return value.toUpperCase(Locale.ROOT) + "!"; }
    public static String greeting() { return excited("hello"); }
}
```
::::

[Learn more](/docs/java/).
