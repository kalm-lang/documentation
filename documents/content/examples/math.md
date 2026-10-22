---
{
  "title": "Math helpers",
  "order": 67,
  "group": "Standard library"
}
---

Use numeric prelude overloads for everyday calculations.

::::compare
```kalm Example.kalm {"style":"indentation"}
pub fun main() -> void:
    sayLine(abs(-4))
    sayLine(min(2, 5))
    sayLine(max(2, 5))
    sayLine(sqrt(9.0))
    sayLine(pow(2.0, 3.0))
    sayLine(round(2.7))
```
```kalm Example.kalm {"style":"braces"}
pub fun main() -> void {
    sayLine(abs(-4))
    sayLine(min(2, 5))
    sayLine(max(2, 5))
    sayLine(sqrt(9.0))
    sayLine(pow(2.0, 3.0))
    sayLine(round(2.7))
}
```
```kalms Example.kalms {"style":"indentation"}
sayLine(abs(-4))
sayLine(min(2, 5))
sayLine(max(2, 5))
sayLine(sqrt(9.0))
sayLine(pow(2.0, 3.0))
sayLine(round(2.7))
```
```kalms Example.kalms {"style":"braces"}
sayLine(abs(-4))
sayLine(min(2, 5))
sayLine(max(2, 5))
sayLine(sqrt(9.0))
sayLine(pow(2.0, 3.0))
sayLine(round(2.7))
```
```java Example.java
void main() {
    System.out.println(Math.abs(-4));
    System.out.println(Math.min(2, 5));
    System.out.println(Math.max(2, 5));
    System.out.println(Math.sqrt(9.0));
    System.out.println(Math.pow(2.0, 3.0));
    System.out.println(Math.round(2.7));
}
```
::::

[Learn more](/docs/language/values/).
