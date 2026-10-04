---
{
  "title": "augment",
  "order": 52,
  "group": "Java & modules"
}
---

Add Kalm extension functions without modifying the Java class.

```kalm Example.kalm
augment Text:
    fun excited() -> Text = self.upper() + "!"

pub fun greeting() -> Text = "hello".excited()
```

[Learn more](/docs/java/).
