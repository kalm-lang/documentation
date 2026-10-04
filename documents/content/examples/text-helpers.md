---
{
  "title": "Text helpers",
  "order": 66,
  "group": "Standard library"
}
---

Normalize text with locale-independent upper and lower helpers.

```kalm Example.kalm
pub fun main() -> Unit:
    fix label = "Kalm"
    sayLine(label.upper())
    sayLine(label.lower())
    sayLine(len(label))
```

[Learn more](/docs/language/values/).
