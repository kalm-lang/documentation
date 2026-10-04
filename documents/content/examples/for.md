---
{
  "title": "for / in",
  "order": 27,
  "group": "Flow"
}
---

Iterate over an array or Iterable; the loop binding is immutable.

```kalm Example.kalm
pub fun main() -> Unit:
    fix names: List<Text> = ["Mira", "Ari"]
    for name in names:
        sayLine(name)
```

[Learn more](/docs/language/functions/).
