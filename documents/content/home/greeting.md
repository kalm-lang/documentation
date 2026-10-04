---
{"title":"App.kalm","order":0}
---

```kalm App.kalm
pub fun greeting(name: Text?) -> Text:
    fix display = name ?? "Guest"
    return @"Hello, $display!"

pub fun main() -> Unit:
    sayLine(greeting(null))
```
