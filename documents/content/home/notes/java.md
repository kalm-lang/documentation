---
{
  "title": "Java interoperability goes both ways.",
  "order": 1,
  "icon": "code-xml",
  "description": "Call Java libraries directly. Kalm compiles to Java source and ordinary JVM classes, so Java can call Kalm in the same build.",
  "doc": "/docs/java/",
  "scriptTitle": "Call Java libraries from a script.",
  "scriptDescription": "Use Java libraries directly from a .kalms file. Publish Java-callable APIs from a .kalm project."
}
---

Java sees ordinary methods, constructors, records and interfaces. Top-level functions become static methods on a file facade.

::::compare
```kalm Calendar.kalm {"style":"indentation"}
use java.time.LocalDate

pub fun tomorrow() -> Text:
    return LocalDate.now().plusDays(1L).toString()
```
```kalm Calendar.kalm {"style":"braces"}
use java.time.LocalDate

pub fun tomorrow() -> Text {
    return LocalDate.now().plusDays(1L).toString()
}
```
```kalms Calendar.kalms {"style":"indentation"}
use java.time.LocalDate

fun tomorrow() -> Text:
    return LocalDate.now().plusDays(1L).toString()
```
```kalms Calendar.kalms {"style":"braces"}
use java.time.LocalDate

fun tomorrow() -> Text {
    return LocalDate.now().plusDays(1L).toString()
}
```
```java Calendar.java
import java.time.LocalDate;

public final class Calendar {
    public static String tomorrow() {
        return LocalDate.now().plusDays(1L).toString();
    }
}
```
::::
