---
{
  "title": "stop / next",
  "order": 28,
  "group": "Flow"
}
---

Skip an iteration with next, or leave the loop with stop.

::::compare
```kalm Example.kalm
pub fun main() -> Unit:
    for value in range(5):
        if value == 1:
            next
        if value == 4:
            stop
        sayLine(value)
```
```kalms Example.kalms
for value in range(5):
    if value == 1:
        next
    if value == 4:
        stop
    sayLine(value)
```
```java Example.java
public final class Example {
    public static void main(String[] args) {
        for (int value = 0; value < 5; value++) {
            if (value == 1) continue;
            if (value == 4) break;
            System.out.println(value);
        }
    }
}
```
::::

[Learn more](/docs/language/functions/).
