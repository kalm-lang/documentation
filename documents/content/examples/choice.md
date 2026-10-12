---
{
  "title": "choice",
  "order": 34,
  "group": "Types"
}
---

Declare a finite set of enum values without payloads.

::::compare
```kalm Status.kalm {"style":"indentation"}
pub choice Status:
    Ready
    Working
    Done
```
```kalm Status.kalm {"style":"braces"}
pub choice Status {
    Ready
    Working
    Done
}
```
```kalms Status.kalms {"style":"indentation"}
choice Status:
    Ready
    Working
    Done
```
```kalms Status.kalms {"style":"braces"}
choice Status {
    Ready
    Working
    Done
}
```
```java Status.java
public enum Status {
    Ready,
    Working,
    Done,
}
```
::::

[Learn more](/docs/language/types/).
