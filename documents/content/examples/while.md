---
{
  "title": "while",
  "order": 26,
  "group": "Flow"
}
---

Repeat while a condition holds.

::::compare
```kalm Example.kalm
pub fun main() -> Unit:
    var count = 0
    while count < 3:
        sayLine(count)
        count += 1
```
```kalms Example.kalms
var count = 0
while count < 3:
    sayLine(count)
    count += 1
```
```java Example.java
public final class Example {
    public static void main(String[] args) {
        int count = 0;
        while (count < 3) { System.out.println(count); count += 1; }
    }
}
```
::::

[Learn more](/docs/language/functions/).
