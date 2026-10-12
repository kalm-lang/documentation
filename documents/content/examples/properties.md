---
{
  "title": "read / write",
  "order": 42,
  "group": "Properties"
}
---

Property accessors become conventional Java getters and setters.

::::compare
```kalm Profile.kalm
pub class Profile:
    var name: Text = "Guest"
    read displayName: Text = name
    write displayName(value: Text):
        name = value
```
```kalms Profile.kalms
class Profile:
    var name: Text = "Guest"
    read displayName: Text = name
    write displayName(value: Text):
        name = value
```
```java Profile.java
public final class Profile {
    public String name = "Guest";
    public final String getDisplayName() { return name; }
    public final void setDisplayName(String value) { name = value; }
}
```
::::

[Learn more](/docs/language/properties/).
