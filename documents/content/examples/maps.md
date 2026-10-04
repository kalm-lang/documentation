---
{
  "title": "Maps",
  "order": 18,
  "group": "Collections"
}
---

Map literals preserve insertion order.

```kalm Example.kalm
pub fun main() -> Unit:
    var scores: Map<Text, Int> = {"Mira": 3, "Ari": 5}
    scores["Mira"] = 4
    sayLine(scores["Mira"])
```

[Learn more](/docs/language/values/).
