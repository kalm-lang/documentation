---
{
  "title": "closed",
  "order": 38,
  "group": "Types"
}
---

Declare all permitted direct children inside a sealed hierarchy.

::::compare
```kalm Result.kalm {"style":"indentation"}
pub closed class Result:
    pub fix class Ready inherits Result {}
    pub fix class Missing inherits Result {}
```
```kalm Result.kalm {"style":"braces"}
pub closed class Result {
    pub fix class Ready inherits Result {}
    pub fix class Missing inherits Result {}
}
```
```kalms Result.kalms {"style":"indentation"}
closed class Result:
    pub fix class Ready inherits Result {}
    pub fix class Missing inherits Result {}
```
```kalms Result.kalms {"style":"braces"}
closed class Result {
    pub fix class Ready inherits Result {}
    pub fix class Missing inherits Result {}
}
```
```java Result.java
public sealed class Result permits Result.Ready, Result.Missing {

    public static final class Ready extends Result {}

    public static final class Missing extends Result {}
}
```
::::

[Learn more](/docs/language/types/).
