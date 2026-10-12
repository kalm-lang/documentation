---
{
  "title": "base / needs / inherits",
  "order": 36,
  "group": "Types"
}
---

Abstract classes declare methods concrete children must implement.

::::compare
```kalm Example.kalm {"style":"indentation"}
base class Reporter:
    needs fun title() -> Text

class TextReporter inherits Reporter:
    override fun title() -> Text = "Report"
```
```kalm Example.kalm {"style":"braces"}
base class Reporter {
    needs fun title() -> Text
}

class TextReporter inherits Reporter {
    override fun title() -> Text = "Report"
}
```
```kalms Example.kalms {"style":"indentation"}
base class Reporter:
    needs fun title() -> Text

class TextReporter inherits Reporter:
    override fun title() -> Text = "Report"
```
```kalms Example.kalms {"style":"braces"}
base class Reporter {
    needs fun title() -> Text
}

class TextReporter inherits Reporter {
    override fun title() -> Text = "Report"
}
```
```java Example.java
abstract class Reporter {

    public abstract String title();
}

final class TextReporter extends Reporter {
    @Override
    public final String title() {
        return "Report";
    }
}
```
::::

[Learn more](/docs/language/types/).
