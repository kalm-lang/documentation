---
{
  "title": "fix",
  "order": 3,
  "group": "Values"
}
---

Bind a value once.

::::compare
```kalm Example.kalm
pub fun main() -> Unit:
    fix name = "Mira"
    sayLine(name)
```
```kalms Example.kalms
fix name = "Mira"
sayLine(name)
```
```java Example.java
public final class Example {
    public static void main(String[] args) {
        final String name = "Mira";
        System.out.println(name);
    }
}
```
::::

[Learn more](/docs/language/values/).
