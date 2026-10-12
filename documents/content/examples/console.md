---
{
  "title": "say / sayLine",
  "order": 65,
  "group": "Standard library"
}
---

Write values using the automatically available prelude.

::::compare
```kalm Example.kalm {"style":"indentation"}
pub fun main() -> Unit:
    say("Hello, ")
    sayLine("Kalm!")
```
```kalm Example.kalm {"style":"braces"}
pub fun main() -> Unit {
    say("Hello, ")
    sayLine("Kalm!")
}
```
```kalms Example.kalms {"style":"indentation"}
say("Hello, ")
sayLine("Kalm!")
```
```kalms Example.kalms {"style":"braces"}
say("Hello, ")
sayLine("Kalm!")
```
```java Example.java
void main() {
    System.out.print("Hello, ");
    System.out.println("Kalm!");
}
```
::::

[Learn more](/docs/language/values/).
