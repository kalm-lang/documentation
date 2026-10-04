---
{
  "title": "Numeric conversions",
  "order": 10,
  "group": "Values"
}
---

Convert explicitly; narrowing rejects out-of-range values.

```kalm Example.kalm
pub fun small(value: Int) -> Byte = value.toByte()
pub fun roundedDown(value: Double) -> Int = value.toInt()
```

[Learn more](/docs/language/values/).
