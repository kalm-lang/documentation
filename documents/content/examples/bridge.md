---
{
  "title": "bridge augment",
  "order": 53,
  "group": "Java & modules"
}
---

Expose extension functions through a generated Java helper facade.

::::compare {"scriptUnavailable":"Java-callable helper APIs require a Kalm project."}
```kalm Example.kalm
bridge augment Text:
    fun initials() -> Text = self.substring(0, 1)

pub fun initial(name: Text) -> Text = name.initials()
```
```java Example.java
public final class Example {
    public static String initials(String value) { return value.substring(0, 1); }
    public static String initial(String name) { return initials(name); }
}
```
::::

[Learn more](/docs/java/).
