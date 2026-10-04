---
{
  "title": "use / as",
  "order": 48,
  "group": "Java & modules"
}
---

Import a type, optionally under a shorter name.

```kalm Example.kalm
use java.time.LocalDate as Day

pub fun year() -> Int = Day.now().getYear()
```

[Learn more](/docs/java/).
