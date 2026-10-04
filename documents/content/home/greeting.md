---
{"title":"App.kalm","order":0}
---

```kalm App.kalm
use java.time.LocalDate

pub fun greeting(name: Text?) -> Text:
    fix display = name?.trim() ?? "Guest"
    fix today = LocalDate.now()
    return @"Hello, $display. It is $today."

pub fun main() -> Unit:
    sayLine(greeting(null))
```
