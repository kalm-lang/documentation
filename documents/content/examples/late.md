---
{
  "title": "late var",
  "order": 44,
  "group": "Properties"
}
---

Reading before assignment raises IllegalStateException.

::::compare
```kalm Session.kalm {"style":"indentation"}
pub class Session:
    late var name: Text
    fun initialize(value: Text) -> void:
        self.name = value

    fun label() -> Text = self.name
```
```kalm Session.kalm {"style":"braces"}
pub class Session {
    late var name: Text
    fun initialize(value: Text) -> void {
        self.name = value
    }
    fun label() -> Text = self.name
}
```
```kalms Session.kalms {"style":"indentation"}
class Session:
    late var name: Text
    fun initialize(value: Text) -> void:
        self.name = value

    fun label() -> Text = self.name
```
```kalms Session.kalms {"style":"braces"}
class Session {
    late var name: Text
    fun initialize(value: Text) -> void {
        self.name = value
    }
    fun label() -> Text = self.name
}
```
```java Session.java
import java.util.Objects;

public final class Session {
    private String name;

    public final void initialize(String value) {
        name = Objects.requireNonNull(value);
    }

    public final String label() {
        if (name == null) throw new IllegalStateException(
            "name is uninitialized"
        );
        return name;
    }
}
```
::::

[Learn more](/docs/language/properties/).
