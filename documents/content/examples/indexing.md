---
{
  "title": "Indexing",
  "order": 20,
  "group": "Collections"
}
---

Read or assign list, map, and array elements by index or key.

```kalm Example.kalm
pub fun main() -> Unit:
    var values: List<Int> = [2, 4]
    values[0] += 3
    sayLine(values[0])
```

[Learn more](/docs/language/values/).
