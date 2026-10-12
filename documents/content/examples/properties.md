---
{
  "title": "read / write",
  "order": 42,
  "group": "Properties"
}
---

Property accessors become conventional Java getters and setters.

::::compare
```kalm Profile.kalm {"style":"indentation"}
pub class Profile:
    var name: Text = "Guest"
    read displayName: Text = name
    write displayName(value: Text):
        name = value
```
```kalm Profile.kalm {"style":"braces"}
pub class Profile {
    var name: Text = "Guest"
    read displayName: Text = name
    write displayName(value: Text) {
        name = value
    }
}
```
```kalms Profile.kalms {"style":"indentation"}
class Profile:
    var name: Text = "Guest"
    read displayName: Text = name
    write displayName(value: Text):
        name = value
```
```kalms Profile.kalms {"style":"braces"}
class Profile {
    var name: Text = "Guest"
    read displayName: Text = name
    write displayName(value: Text) {
        name = value
    }
}
```
```java Profile.java
public final class Profile {
    public String name = "Guest";

    public final String getDisplayName() {
        return name;
    }

    public final void setDisplayName(String value) {
        name = value;
    }
}
```
::::

[Learn more](/docs/language/properties/).
