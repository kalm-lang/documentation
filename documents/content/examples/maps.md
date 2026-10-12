---
{
  "title": "Maps",
  "order": 18,
  "group": "Collections"
}
---

Map literals preserve insertion order.

::::compare
```kalm Example.kalm
pub fun main() -> Unit:
    var scores: Map<Text, Int> = {"Mira": 3, "Ari": 5}
    scores["Mira"] = 4
    sayLine(scores["Mira"])
```
```kalms Example.kalms
var scores: Map<Text, Int> = {"Mira": 3, "Ari": 5}
scores["Mira"] = 4
sayLine(scores["Mira"])
```
```java Example.java
import java.util.LinkedHashMap;

public final class Example {
    public static void main(String[] args) {
        var scores = new LinkedHashMap<String, Integer>();
        scores.put("Mira", 3);
        scores.put("Ari", 5);
        scores.put("Mira", 4);
        System.out.println(scores.get("Mira"));
    }
}
```
::::

[Learn more](/docs/language/values/).
