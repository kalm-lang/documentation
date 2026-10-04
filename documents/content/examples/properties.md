---
{
  "title": "read / write",
  "order": 42,
  "group": "Properties"
}
---

Property accessors become conventional Java getters and setters.

```kalm Profile.kalm
pub class Profile:
    var name: Text = "Guest"
    read displayName: Text = name
    write displayName(value: Text):
        name = value
```

[Learn more](/docs/language/properties/).
