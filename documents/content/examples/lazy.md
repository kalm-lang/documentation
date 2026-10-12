---
{
  "title": "lazy fix",
  "order": 43,
  "group": "Properties"
}
---

Evaluate an initializer once on first access.

::::compare
```kalm Settings.kalm {"style":"indentation"}
pub class Settings:
    lazy fix title: Text = "Kalm".upper()
    fun label() -> Text = self.title
```
```kalm Settings.kalm {"style":"braces"}
pub class Settings {
    lazy fix title: Text = "Kalm".upper()
    fun label() -> Text = self.title
}
```
```kalms Settings.kalms {"style":"indentation"}
class Settings:
    lazy fix title: Text = "Kalm".upper()
    fun label() -> Text = self.title
```
```kalms Settings.kalms {"style":"braces"}
class Settings {
    lazy fix title: Text = "Kalm".upper()
    fun label() -> Text = self.title
}
```
```java Settings.java
import java.util.Locale;

public final class Settings {
    private String title;

    public final synchronized String label() {
        if (title == null) title = "Kalm".toUpperCase(Locale.ROOT);
        return title;
    }
}
```
::::

[Learn more](/docs/language/properties/).
