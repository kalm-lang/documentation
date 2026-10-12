---
{
  "title": "space",
  "order": 47,
  "group": "Java & modules"
}
---

Declare a Java-compatible package.

::::compare {"scriptUnavailable":"Scripts do not declare packages."}
```kalm Example.kalm
space notebook

pub fun title() -> Text = "Notes"
```
```java Example.java
package notebook;

public final class Example {
    public static String title() { return "Notes"; }
}
```
::::

[Learn more](/docs/java/).
