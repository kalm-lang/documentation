---
{
  "title": "base / needs / inherits",
  "order": 36,
  "group": "Types"
}
---

Abstract classes declare methods concrete children must implement.

```kalm Example.kalm
base class Reporter:
    needs fun title() -> Text

class TextReporter inherits Reporter:
    override fun title() -> Text = "Report"
```

[Learn more](/docs/language/types/).
