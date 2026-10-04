---
{
  "title": "Null refinement",
  "order": 74,
  "group": "Values"
}
---

A non-null check refines a stable fix binding in its branch.

```kalm Example.kalm
pub fun loud(name: Text?) -> Text:
    fix candidate = name
    if candidate != null:
        return candidate.upper()
    return "GUEST"
```

[Learn more](/docs/language/values/).
