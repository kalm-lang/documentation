---
{
  "title": "Generics / given",
  "order": 24,
  "group": "Functions"
}
---

Use given to require a bound on a type parameter.

```kalm Example.kalm
pub fun stringify<T>(item: T) -> Text given T: java.lang.Comparable<T>:
    return item.toString()
```

[Learn more](/docs/language/types/).
