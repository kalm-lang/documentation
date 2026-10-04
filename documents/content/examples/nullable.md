---
{
  "title": "Nullable types",
  "order": 11,
  "group": "Values"
}
---

Add ? when a value can be absent.

```kalm Example.kalm
pub fun nickname(known: Bool) -> Text?:
    if known:
        return "Mira"
    return null
```

[Learn more](/docs/language/values/).
