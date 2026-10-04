---
{
  "title": "Text interpolation",
  "order": 7,
  "group": "Values"
}
---

Prefix a string with @ to insert values or expressions.

```kalm Example.kalm
pub fun greeting(name: Text) -> Text:
    return @"Hello, $name! ${2 + 3} notes today."
```

[Learn more](/docs/language/values/).
