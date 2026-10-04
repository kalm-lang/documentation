---
{
  "title": "late var",
  "order": 44,
  "group": "Properties"
}
---

Reading before assignment raises IllegalStateException.

```kalm Session.kalm
pub class Session:
    late var name: Text
    fun initialize(value: Text) -> Unit:
        self.name = value
    fun label() -> Text = self.name
```

[Learn more](/docs/language/properties/).
