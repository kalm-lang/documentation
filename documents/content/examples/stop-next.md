---
{
  "title": "stop / next",
  "order": 28,
  "group": "Flow"
}
---

Skip an iteration with next, or leave the loop with stop.

::::compare
```kalm Example.kalm {"style":"indentation"}
pub fun main() -> Unit:
    for value in range(5):
        if value == 1:
            next

        if value == 4:
            stop

        sayLine(value)
```
```kalm Example.kalm {"style":"braces"}
pub fun main() -> Unit {
    for value in range(5) {
        if value == 1 {
            next
        }
        if value == 4 {
            stop
        }
        sayLine(value)
    }
}
```
```kalms Example.kalms {"style":"indentation"}
for value in range(5):
    if value == 1:
        next

    if value == 4:
        stop

    sayLine(value)
```
```kalms Example.kalms {"style":"braces"}
for value in range(5) {
    if value == 1 {
        next
    }
    if value == 4 {
        stop
    }
    sayLine(value)
}
```
```java Example.java
void main() {
    for (int value = 0; value < 5; value++) {
        if (value == 1) continue;
        if (value == 4) break;
        System.out.println(value);
    }
}
```
::::

[Learn more](/docs/language/functions/).
