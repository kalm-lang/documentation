---
{
  "title": "singleton",
  "order": 39,
  "group": "Types"
}
---

Access the shared instance through INSTANCE.

::::compare
```kalm Example.kalm {"style":"indentation"}
singleton Settings:
    fun title() -> Text = "Kalm"

pub fun title() -> Text = Settings.INSTANCE.title()
```
```kalm Example.kalm {"style":"braces"}
singleton Settings {
    fun title() -> Text = "Kalm"
}

pub fun title() -> Text = Settings.INSTANCE.title()
```
```kalms Example.kalms {"style":"indentation"}
singleton Settings:
    fun title() -> Text = "Kalm"

fun title() -> Text = Settings.INSTANCE.title()
```
```kalms Example.kalms {"style":"braces"}
singleton Settings {
    fun title() -> Text = "Kalm"
}

fun title() -> Text = Settings.INSTANCE.title()
```
```java Example.java
final class Settings {
    public static final Settings INSTANCE = new Settings();

    private Settings() {}

    public final String title() {
        return "Kalm";
    }
}

public final class Example {
    public static String title() {
        return Settings.INSTANCE.title();
    }
}
```
::::

[Learn more](/docs/language/types/).
