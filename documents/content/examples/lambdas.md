---
{
  "title": "Lambdas",
  "order": 23,
  "group": "Functions"
}
---

A Java or Kalm single-method contract supplies the parameter types.

```kalm Example.kalm
pub fun loud() -> java.util.function.Function<Text, Text>:
    return fun name => name.toUpperCase()
```

[Learn more](/docs/language/functions/).
