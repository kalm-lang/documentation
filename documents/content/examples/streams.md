---
{
  "title": "Streams",
  "order": 71,
  "group": "Functions"
}
---

Context-typed lambdas work with ordinary Java streams.

```kalm Example.kalm
pub fun loudNames(names: List<Text>) -> List<Text>:
    return names.stream().map(fun name => name.toUpperCase()).toList()
```

[Learn more](/docs/java/).
