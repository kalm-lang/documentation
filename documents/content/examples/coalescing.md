---
{
  "title": "??",
  "order": 13,
  "group": "Values"
}
---

Evaluate the fallback only when the left value is null.

```kalm Example.kalm
pub fun greeting(name: Text?) -> Text:
    fix display = name ?? "Guest"
    return @"Hello, $display!"
```

[Learn more](/docs/language/values/).
