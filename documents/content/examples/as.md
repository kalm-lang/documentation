---
{
  "title": "as",
  "order": 16,
  "group": "Values"
}
---

Cast to a specific JVM type; use a nullable target to allow null.

```kalm Example.kalm
pub fun text(value: Any) -> Text = value as Text
pub fun maybeText(value: Any) -> Text? = value as Text?
```

[Learn more](/docs/language/values/).
