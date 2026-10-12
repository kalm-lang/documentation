---
{
  "title": "Cleanup belongs to the scope.",
  "order": 4,
  "icon": "layers",
  "description": "Use with to close Java resources automatically, and defer to run cleanup when a scope exits—even on an early return.",
  "doc": "/docs/language/resources/"
}
---

`with` closes resources in reverse order. `defer` keeps cleanup next to the work that needs it.

::::compare
```kalm Resources.kalm
pub fun firstLine() -> Text?:
    defer:
        sayLine("read finished")
    with reader = java.util.Scanner("hello\nworld"):
        if reader.hasNextLine():
            return reader.nextLine()
    return null
```
```kalms Resources.kalms
fun firstLine() -> Text?:
    defer:
        sayLine("read finished")
    with reader = java.util.Scanner("hello\nworld"):
        if reader.hasNextLine():
            return reader.nextLine()
    return null
```
```java Resources.java
import java.util.Scanner;

public final class Resources {
    public static String firstLine() {
        try (var reader = new Scanner("hello\nworld")) {
            if (reader.hasNextLine()) return reader.nextLine();
            return null;
        } finally { System.out.println("read finished"); }
    }
}
```
::::
