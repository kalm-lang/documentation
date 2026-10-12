---
{
  "title": "with",
  "order": 57,
  "group": "Resources"
}
---

Close resources automatically when the block exits.

::::compare
```kalm Example.kalm
pub fun firstLine() -> Text?:
    with reader = java.util.Scanner("hello\nworld"):
        if reader.hasNextLine():
            return reader.nextLine()
    return null
```
```kalms Example.kalms
fun firstLine() -> Text?:
    with reader = java.util.Scanner("hello\nworld"):
        if reader.hasNextLine():
            return reader.nextLine()
    return null
```
```java Example.java
import java.util.Scanner;

public final class Example {
    public static String firstLine() {
        try (var reader = new Scanner("hello\nworld")) {
            if (reader.hasNextLine()) return reader.nextLine();
        }
        return null;
    }
}
```
::::

[Learn more](/docs/language/resources/).
