---
{
  "title": "Java stays within reach.",
  "order": 2,
  "icon": "code-xml",
  "description": "A familiar library is only an import away.",
  "preview": "use java.time.LocalDate",
  "doc": "/docs/java/"
}
---

```kalm Calendar.kalm
use java.time.LocalDate

pub fun tomorrow() -> Text:
    return LocalDate.now().plusDays(1L).toString()
```
