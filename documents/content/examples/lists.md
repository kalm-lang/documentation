---
{
  "title": "Lists",
  "order": 17,
  "group": "Collections"
}
---

List literals create mutable Java lists.

```kalm Example.kalm
pub fun main() -> Unit:
    fix names: List<Text> = ["Mira", "Ari"]
    names.add("Tim")
    sayLine(names[0])
```

[Learn more](/docs/language/values/).
