---
{
  "title": "lazy fix",
  "order": 43,
  "group": "Properties"
}
---

Evaluate an initializer once on first access.

```kalm Settings.kalm
pub class Settings:
    lazy fix title: Text = "Kalm".upper()
    fun label() -> Text = self.title
```

[Learn more](/docs/language/properties/).
