---
{
  "title": "??=",
  "order": 14,
  "group": "Values"
}
---

Assign a fallback to a nullable mutable binding only when needed.

::::compare
```kalm Example.kalm {"style":"indentation"}
pub fun main() -> Unit:
    var title: Text? = null
    title ??= "Untitled"
    sayLine(title)
```
```kalm Example.kalm {"style":"braces"}
pub fun main() -> Unit {
    var title: Text? = null
    title ??= "Untitled"
    sayLine(title)
}
```
```kalms Example.kalms {"style":"indentation"}
var title: Text? = null
title ??= "Untitled"
sayLine(title)
```
```kalms Example.kalms {"style":"braces"}
var title: Text? = null
title ??= "Untitled"
sayLine(title)
```
```java Example.java
void main() {
    String title = null;
    if (title == null) title = "Untitled";
    System.out.println(title);
}
```
::::

[Learn more](/docs/language/values/).
