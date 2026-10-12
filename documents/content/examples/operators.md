---
{
  "title": "Operators",
  "order": 8,
  "group": "Values"
}
---

Arithmetic operands have matching numeric types.

::::compare
```kalm Example.kalm
pub fun main() -> Unit:
    fix total = 7 + 3 * 2
    fix remainder = total % 5
    sayLine(remainder)
```
```kalms Example.kalms
fix total = 7 + 3 * 2
fix remainder = total % 5
sayLine(remainder)
```
```java Example.java
public final class Example {
    public static void main(String[] args) {
        final int total = 7 + 3 * 2;
        final int remainder = total % 5;
        System.out.println(remainder);
    }
}
```
::::

[Learn more](/docs/language/values/).
