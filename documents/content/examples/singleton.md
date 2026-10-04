---
{
  "title": "singleton",
  "order": 39,
  "group": "Types"
}
---

Access the shared instance through INSTANCE.

```kalm Example.kalm
singleton Settings:
    fun title() -> Text = "Kalm"

pub fun title() -> Text = Settings.INSTANCE.title()
```

[Learn more](/docs/language/types/).
