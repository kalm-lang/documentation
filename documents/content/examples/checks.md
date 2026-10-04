---
{
  "title": "expect / require / ensure",
  "order": 59,
  "group": "Resources"
}
---

Checks stay active without JVM assertion flags.

```kalm Example.kalm
pub fun square(value: Int) -> Int:
    require value >= 0, "nonnegative input"
    fix result = value * value
    ensure result >= 0, "nonnegative result"
    expect result == value * value
    return result
```

[Learn more](/docs/language/properties/).
