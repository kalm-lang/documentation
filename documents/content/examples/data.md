---
{
  "title": "data / generate Display",
  "order": 33,
  "group": "Types"
}
---

Records provide immutable components and value equality.

::::compare
```kalm Note.kalm {"style":"indentation"}
pub data Note(title: Text, words: int) generate Display
```
```kalm Note.kalm {"style":"braces"}
pub data Note(title: Text, words: int) generate Display
```
```kalms Note.kalms {"style":"indentation"}
data Note(title: Text, words: int) generate Display
```
```kalms Note.kalms {"style":"braces"}
data Note(title: Text, words: int) generate Display
```
```java Note.java
public record Note(String title, int words) {}
```
::::

[Learn more](/docs/language/types/).
