---
{
  "title": "?. / ?[]",
  "order": 12,
  "group": "Values"
}
---

A null receiver skips access; an existing receiver still follows normal bounds rules.

```kalm Example.kalm
pub fun first(names: List<Text>?) -> Text?:
    return names?[0]?.upper()
```

[Learn more](/docs/language/values/).
