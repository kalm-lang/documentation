---
{
  "title": "if / elif / else",
  "order": 25,
  "group": "Flow"
}
---

Choose a branch using Boolean conditions.

::::compare
```kalm Example.kalm
pub fun label(value: Int) -> Text:
    if value > 0:
        return "positive"
    elif value == 0:
        return "zero"
    else:
        return "negative"
```
```kalms Example.kalms
fun label(value: Int) -> Text:
    if value > 0:
        return "positive"
    elif value == 0:
        return "zero"
    else:
        return "negative"
```
```java Example.java
public final class Example {
    public static String label(int value) {
        if (value > 0) return "positive";
        else if (value == 0) return "zero";
        else return "negative";
    }
}
```
::::

[Learn more](/docs/language/functions/).
