---
{
  "title": "??=",
  "order": 14,
  "group": "Values"
}
---

Assign a fallback to a nullable mutable binding only when needed.

```kalm Example.kalm
pub fun main() -> Unit:
    var title: Text? = null
    title ??= "Untitled"
    sayLine(title)
```

[Learn more](/docs/language/values/).
