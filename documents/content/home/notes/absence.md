---
{
  "title": "Absence has a type.",
  "order": 0,
  "description": "Give missing values a name, then a gentle fallback.",
  "preview": "Text? / ?. / ??",
  "doc": "/docs/language/values/"
}
---

```kalm
pub fun greeting(name: Text?) -> Text:
    fix display = name ?? "Guest"
    return @"Hello, $display!"
```
