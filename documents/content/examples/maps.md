---
{
  "title": "Maps",
  "order": 18,
  "group": "Collections"
}
---

Map literals preserve insertion order.

::::compare
```kalm Example.kalm {"style":"indentation"}
pub fun main() -> void:
    var scores: Map<Text, Int> = {"Mira": 3, "Ari": 5}
    scores["Mira"] = 4
    sayLine(scores["Mira"])
```
```kalm Example.kalm {"style":"braces"}
pub fun main() -> void {
    var scores: Map<Text, Int> = {"Mira": 3, "Ari": 5}
    scores["Mira"] = 4
    sayLine(scores["Mira"])
}
```
```kalms Example.kalms {"style":"indentation"}
var scores: Map<Text, Int> = {"Mira": 3, "Ari": 5}
scores["Mira"] = 4
sayLine(scores["Mira"])
```
```kalms Example.kalms {"style":"braces"}
var scores: Map<Text, Int> = {"Mira": 3, "Ari": 5}
scores["Mira"] = 4
sayLine(scores["Mira"])
```
```java Example.java
import java.util.LinkedHashMap;

void main() {
    var scores = new LinkedHashMap<String, Integer>();
    scores.put("Mira", 3);
    scores.put("Ari", 5);
    scores.put("Mira", 4);
    System.out.println(scores.get("Mira"));
}
```
::::

[Learn more](/docs/language/values/).
