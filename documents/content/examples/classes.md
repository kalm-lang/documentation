---
{
  "title": "class / init / self",
  "order": 32,
  "group": "Types"
}
---

Initialize instance fields in a constructor.

::::compare
```kalm Person.kalm
pub class Person:
    fix name: Text

    init(name: Text):
        self.name = name

    fun greeting() -> Text = @"Hello, $name!"
```
```kalms Person.kalms
class Person:
    fix name: Text

    init(name: Text):
        self.name = name

    fun greeting() -> Text = @"Hello, $name!"
```
```java Person.java
public final class Person {
    public final String name;
    public Person(String name) { this.name = name; }
    public final String greeting() { return "Hello, " + name + "!"; }
}
```
::::

[Learn more](/docs/language/types/).
