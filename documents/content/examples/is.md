---
{
  "title": "is",
  "order": 15,
  "group": "Values"
}
---

A type check refines a stable binding inside the true branch.

```kalm Example.kalm
pub fun loud(value: Any) -> Text:
    if value is Text:
        return value.upper()
    return "not text"
```

[Learn more](/docs/language/values/).
