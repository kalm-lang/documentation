---
{
  "title": "with",
  "order": 57,
  "group": "Resources"
}
---

Close resources automatically when the block exits.

```kalm Example.kalm
pub fun firstLine() -> Text?:
    with reader = java.util.Scanner("hello\nworld"):
        if reader.hasNextLine():
            return reader.nextLine()
    return null
```

[Learn more](/docs/language/resources/).
