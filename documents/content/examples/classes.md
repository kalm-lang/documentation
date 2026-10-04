---
{
  "title": "class / init / self",
  "order": 32,
  "group": "Types"
}
---

Initialize instance fields in a constructor.

```kalm Person.kalm
pub class Person:
    fix name: Text

    init(name: Text):
        self.name = name

    fun greeting() -> Text = @"Hello, $name!"
```

[Learn more](/docs/language/types/).
