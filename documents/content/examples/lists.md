---
{
  "title": "Lists",
  "order": 17,
  "group": "Collections"
}
---

List literals create mutable Java lists.

::::compare
```kalm Example.kalm {"style":"indentation"}
pub fun main() -> void:
    fix names: List<Text> = ["Mira", "Ari"]
    names.add("Tim")
    sayLine(names[0])
```
```kalm Example.kalm {"style":"braces"}
pub fun main() -> void {
    fix names: List<Text> = ["Mira", "Ari"]
    names.add("Tim")
    sayLine(names[0])
}
```
```kalms Example.kalms {"style":"indentation"}
fix names: List<Text> = ["Mira", "Ari"]
names.add("Tim")
sayLine(names[0])
```
```kalms Example.kalms {"style":"braces"}
fix names: List<Text> = ["Mira", "Ari"]
names.add("Tim")
sayLine(names[0])
```
```java Example.java
import java.util.ArrayList;
import java.util.List;

void main() {
    final var names = new ArrayList<>(List.of("Mira", "Ari"));
    names.add("Tim");
    System.out.println(names.get(0));
}
```
::::

[Learn more](/docs/language/values/).
