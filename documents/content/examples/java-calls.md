---
{
  "title": "Calling Java",
  "order": 49,
  "group": "Java & modules"
}
---

Java constructors and methods are directly available.

```kalm Example.kalm
use java.time.LocalDate

pub fun tomorrow() -> Text:
    return LocalDate.now().plusDays(1L).toString()
```

[Learn more](/docs/java/).
