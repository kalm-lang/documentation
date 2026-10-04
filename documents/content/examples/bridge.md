---
{
  "title": "bridge augment",
  "order": 53,
  "group": "Java & modules"
}
---

Expose extension functions through a generated Java helper facade.

```kalm Example.kalm
bridge augment Text:
    fun initials() -> Text = self.substring(0, 1)

pub fun initial(name: Text) -> Text = name.initials()
```

[Learn more](/docs/java/).
