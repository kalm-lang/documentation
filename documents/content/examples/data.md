---
{
  "title": "data / generate Display",
  "order": 33,
  "group": "Types"
}
---

Records provide immutable components and value equality.

::::compare
```kalm Note.kalm
pub data Note(title: Text, words: Int) generate Display
```
```kalms Note.kalms
data Note(title: Text, words: Int) generate Display
```
```java Note.java
public record Note(String title, int words) {}
```
::::

[Learn more](/docs/language/types/).
