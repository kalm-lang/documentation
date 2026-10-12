---
{
  "title": "Lists",
  "order": 17,
  "group": "Collections"
}
---

List literals create mutable Java lists.

::::compare
```kalm Example.kalm
pub fun main() -> Unit:
    fix names: List<Text> = ["Mira", "Ari"]
    names.add("Tim")
    sayLine(names[0])
```
```kalms Example.kalms
fix names: List<Text> = ["Mira", "Ari"]
names.add("Tim")
sayLine(names[0])
```
```java Example.java
import java.util.ArrayList;
import java.util.List;

public final class Example {
    public static void main(String[] args) {
        final var names = new ArrayList<>(List.of("Mira", "Ari"));
        names.add("Tim");
        System.out.println(names.get(0));
    }
}
```
::::

[Learn more](/docs/language/values/).
