---
{
  "title": "Java interoperability goes both ways.",
  "order": 1,
  "icon": "code-xml",
  "description": "Call Java libraries directly. Kalm compiles to Java source and ordinary JVM classes, so Java can call Kalm in the same build.",
  "doc": "/docs/java/"
}
---

Java sees ordinary methods, constructors, records and interfaces. Top-level functions become static methods on a file facade.

```kalm Calendar.kalm
use java.time.LocalDate

pub fun tomorrow() -> Text:
    return LocalDate.now().plusDays(1L).toString()
```
