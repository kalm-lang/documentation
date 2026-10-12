---
{
  "title": "??=",
  "order": 14,
  "group": "Values"
}
---

Assign a fallback to a nullable mutable binding only when needed.

::::compare
```kalm Example.kalm
pub fun main() -> Unit:
    var title: Text? = null
    title ??= "Untitled"
    sayLine(title)
```
```kalms Example.kalms
var title: Text? = null
title ??= "Untitled"
sayLine(title)
```
```java Example.java
public final class Example {
    public static void main(String[] args) {
        String title = null;
        if (title == null) title = "Untitled";
        System.out.println(title);
    }
}
```
::::

[Learn more](/docs/language/values/).
