---
{
  "title": "guard",
  "order": 63,
  "group": "Concurrency"
}
---

Synchronize on a non-null receiver; await is prohibited inside a guard.

```kalm Example.kalm
pub fun update(values: List<Text>) -> Unit:
    guard values:
        values.add("ready")
```

[Learn more](/docs/language/resources/).
