---
{
  "title": "and / or / not",
  "order": 9,
  "group": "Values"
}
---

Combine Boolean expressions with short-circuit operators.

```kalm Example.kalm
pub fun allowed(age: Int, paused: Bool) -> Bool:
    return age >= 18 and not paused
```

[Learn more](/docs/language/values/).
