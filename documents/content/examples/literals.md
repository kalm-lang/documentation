---
{
  "title": "Literals",
  "order": 6,
  "group": "Values"
}
---

Write Boolean, numeric, character, and text values directly.

```kalm Example.kalm
pub fun main() -> Unit:
    fix enabled: Bool = true
    fix letter: Char = 'K'
    fix count: Long = 12L
    fix ratio: Double = 0.5
    sayLine(@"$letter: $count / $ratio / $enabled")
```

[Learn more](/docs/language/values/).
