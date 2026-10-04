---
{
  "title": "alias",
  "order": 40,
  "group": "Types"
}
---

A type alias introduces another name without creating a JVM type.

```kalm Example.kalm
alias Name = Text
alias Names<T> = List<T>

pub fun greeting(name: Name) -> Text = @"Hello, $name!"
```

[Learn more](/docs/language/types/).
