---
{
  "title": "Text helpers",
  "order": 66,
  "group": "Standard library"
}
---

Normalize text with locale-independent upper and lower helpers.

::::compare
```kalm Example.kalm {"style":"indentation"}
pub fun main() -> Unit:
    fix label = "Kalm"
    sayLine(label.upper())
    sayLine(label.lower())
    sayLine(len(label))
```
```kalm Example.kalm {"style":"braces"}
pub fun main() -> Unit {
    fix label = "Kalm"
    sayLine(label.upper())
    sayLine(label.lower())
    sayLine(len(label))
}
```
```kalms Example.kalms {"style":"indentation"}
fix label = "Kalm"
sayLine(label.upper())
sayLine(label.lower())
sayLine(len(label))
```
```kalms Example.kalms {"style":"braces"}
fix label = "Kalm"
sayLine(label.upper())
sayLine(label.lower())
sayLine(len(label))
```
```java Example.java
import java.util.Locale;

void main() {
    final String label = "Kalm";
    System.out.println(label.toUpperCase(Locale.ROOT));
    System.out.println(label.toLowerCase(Locale.ROOT));
    System.out.println(label.length());
}
```
::::

[Learn more](/docs/language/values/).
