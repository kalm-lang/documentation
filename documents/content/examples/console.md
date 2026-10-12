---
{
  "title": "say / sayLine",
  "order": 65,
  "group": "Standard library"
}
---

Write values using the automatically available prelude.

::::compare
```kalm Example.kalm
pub fun main() -> Unit:
    say("Hello, ")
    sayLine("Kalm!")
```
```kalms Example.kalms
say("Hello, ")
sayLine("Kalm!")
```
```java Example.java
public final class Example {
    public static void main(String[] args) {
        System.out.print("Hello, ");
        System.out.println("Kalm!");
    }
}
```
::::

[Learn more](/docs/language/values/).
