---
{
  "title": "raise",
  "order": 31,
  "group": "Flow"
}
---

Raise a JVM exception when a condition cannot be accepted.

```kalm Example.kalm
pub fun positive(value: Int) -> Int:
    if value < 1:
        raise java.lang.IllegalArgumentException("Expected a positive value")
    return value
```

[Learn more](/docs/language/resources/).
