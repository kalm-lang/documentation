---
{
  "title": "external fun",
  "order": 51,
  "group": "Java & modules"
}
---

Wrap a Java static method with a Kalm name.

```kalm Example.kalm
external fun parseCount(value: Text) -> Int = java.lang.Integer.parseInt

pub fun count() -> Int = parseCount("12")
```

[Learn more](/docs/java/).
