---
{
  "title": "fix",
  "order": 3,
  "group": "Values"
}
---

Bind a value once.

::::compare
```kalm Example.kalm {"style":"indentation"}
pub fun main() -> void:
    fix name = "Mira"
    sayLine(name)
```
```kalm Example.kalm {"style":"braces"}
pub fun main() -> void {
    fix name = "Mira"
    sayLine(name)
}
```
```kalms Example.kalms {"style":"indentation"}
fix name = "Mira"
sayLine(name)
```
```kalms Example.kalms {"style":"braces"}
fix name = "Mira"
sayLine(name)
```
```java Example.java
void main() {
    final String name = "Mira";
    System.out.println(name);
}
```
::::

[Learn more](/docs/language/values/).
