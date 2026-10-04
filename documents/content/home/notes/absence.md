---
{
  "title": "Cleanup belongs to the scope.",
  "order": 4,
  "icon": "layers",
  "description": "Use with to close Java resources automatically, and defer to run cleanup when a scope exits—even on an early return.",
  "doc": "/docs/language/resources/"
}
---

`with` closes resources in reverse order. `defer` keeps cleanup next to the work that needs it.

```kalm Resources.kalm
pub fun firstLine() -> Text?:
    defer:
        sayLine("read finished")
    with reader = java.util.Scanner("hello\nworld"):
        if reader.hasNextLine():
            return reader.nextLine()
    return null
```
