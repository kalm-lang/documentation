---
{
  "title": "Visibility",
  "order": 46,
  "group": "Types"
}
---

Use pub for API declarations, internal for module access, and private for local implementation.

```kalm Counter.kalm
pub class Counter:
    private var value: Int = 0
    protected fun current() -> Int = value
    pub fun increment() -> Int:
        value += 1
        return value

internal fun defaultValue() -> Int = 0
```

[Learn more](/docs/language/types/).
