---
{
  "title": "Operators",
  "order": 8,
  "group": "Values"
}
---

Arithmetic operands have matching numeric types.

```kalm Example.kalm
pub fun main() -> Unit:
    fix total = 7 + 3 * 2
    fix remainder = total % 5
    sayLine(remainder)
```

[Learn more](/docs/language/values/).
