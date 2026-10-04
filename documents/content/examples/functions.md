---
{
  "title": "fun / return",
  "order": 22,
  "group": "Functions"
}
---

Use an expression body for one result, or return from a block.

```kalm Example.kalm
pub fun square(value: Int) -> Int = value * value

pub fun greeting(name: Text) -> Text:
    return @"Hello, $name!"
```

[Learn more](/docs/language/functions/).
