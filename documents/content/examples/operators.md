---
{
  "title": "Operators",
  "order": 8,
  "group": "Values"
}
---

Arithmetic operands have matching numeric types.

::::compare
```kalm Example.kalm {"style":"indentation"}
pub fun main() -> Unit:
    fix total = 7 + 3 * 2
    fix remainder = total % 5
    sayLine(remainder)
```
```kalm Example.kalm {"style":"braces"}
pub fun main() -> Unit {
    fix total = 7 + 3 * 2
    fix remainder = total % 5
    sayLine(remainder)
}
```
```kalms Example.kalms {"style":"indentation"}
fix total = 7 + 3 * 2
fix remainder = total % 5
sayLine(remainder)
```
```kalms Example.kalms {"style":"braces"}
fix total = 7 + 3 * 2
fix remainder = total % 5
sayLine(remainder)
```
```java Example.java
void main() {
    final int total = 7 + 3 * 2;
    final int remainder = total % 5;
    System.out.println(remainder);
}
```
::::

[Learn more](/docs/language/values/).
