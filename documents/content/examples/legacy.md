---
{
  "title": "legacy",
  "order": 56,
  "group": "Java & modules"
}
---

Mark an API deprecated for Kalm and Java callers.

::::compare
```kalm Example.kalm {"style":"indentation"}
legacy fun oldTitle() -> Text = "Old title"

pub fun title() -> Text = "New title"
```
```kalm Example.kalm {"style":"braces"}
legacy fun oldTitle() -> Text = "Old title"

pub fun title() -> Text = "New title"
```
```kalms Example.kalms {"style":"indentation"}
legacy fun oldTitle() -> Text = "Old title"

fun title() -> Text = "New title"
```
```kalms Example.kalms {"style":"braces"}
legacy fun oldTitle() -> Text = "Old title"

fun title() -> Text = "New title"
```
```java Example.java
public final class Example {
    @Deprecated
    static String oldTitle() {
        return "Old title";
    }

    public static String title() {
        return "New title";
    }
}
```
::::

[Learn more](/docs/java/).
