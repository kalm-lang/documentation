---
{
  "title": "Math helpers",
  "order": 67,
  "group": "Standard library"
}
---

Use numeric prelude overloads for everyday calculations.

::::compare
```kalm Example.kalm
pub fun main() -> Unit:
    sayLine(abs(-4))
    sayLine(min(2, 5))
    sayLine(max(2, 5))
    sayLine(sqrt(9.0))
    sayLine(pow(2.0, 3.0))
    sayLine(round(2.7))
```
```kalms Example.kalms
sayLine(abs(-4))
sayLine(min(2, 5))
sayLine(max(2, 5))
sayLine(sqrt(9.0))
sayLine(pow(2.0, 3.0))
sayLine(round(2.7))
```
```java Example.java
public final class Example {
    public static void main(String[] args) {
        System.out.println(Math.abs(-4));
        System.out.println(Math.min(2, 5));
        System.out.println(Math.max(2, 5));
        System.out.println(Math.sqrt(9.0));
        System.out.println(Math.pow(2.0, 3.0));
        System.out.println(Math.round(2.7));
    }
}
```
::::

[Learn more](/docs/language/values/).
