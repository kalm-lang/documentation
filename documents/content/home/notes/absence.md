---
{
  "title": "Absence has a type.",
  "order": 0,
  "icon": "circle-help",
  "description": "Give missing values a name, then a gentle fallback.",
  "preview": "Text? / ?. / ??",
  "doc": "/docs/language/values/"
}
---

```kalm Greeting.kalm
pub fun greeting(name: Text?) -> Text:
    fix display = name?.trim() ?? "Guest"
    return @"Hello, $display!"
```
