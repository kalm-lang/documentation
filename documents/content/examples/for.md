---
{
  "title": "for / in",
  "order": 27,
  "group": "Flow"
}
---

Iterate over an array or Iterable; the loop binding is immutable.

::::compare
```kalm Example.kalm
pub fun main() -> Unit:
    fix names: List<Text> = ["Mira", "Ari"]
    for name in names:
        sayLine(name)
```
```kalms Example.kalms
fix names: List<Text> = ["Mira", "Ari"]
for name in names:
    sayLine(name)
```
```java Example.java
import java.util.ArrayList;
import java.util.List;

public final class Example {
    public static void main(String[] args) {
        final var names = new ArrayList<>(List.of("Mira", "Ari"));
        for (final String name : names) System.out.println(name);
    }
}
```
::::

[Learn more](/docs/language/functions/).
