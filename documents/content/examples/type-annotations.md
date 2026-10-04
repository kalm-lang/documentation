---
{
  "title": "Type annotations",
  "order": 75,
  "group": "Java & modules"
}
---

Apply an annotation to parameter types, including generic arguments.

```kalm Mark.kalm
pub annotation Mark:
    target typeUse
    value: Text = "checked"

pub fun echo(value: @Mark Text) -> @Mark Text:
    return value
```

[Learn more](/docs/java/).
