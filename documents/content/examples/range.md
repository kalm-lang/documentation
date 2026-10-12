---
{
  "title": "range",
  "order": 21,
  "group": "Collections"
}
---

Ranges include the start and exclude the end.

::::compare
```kalm Example.kalm
pub fun main() -> Unit:
    for value in range(1, 4):
        sayLine(value)
```
```kalms Example.kalms
for value in range(1, 4):
    sayLine(value)
```
```java Example.java
public final class Example {
    public static void main(String[] args) {
        for (int value = 1; value < 4; value++) System.out.println(value);
    }
}
```
::::

[Learn more](/docs/language/functions/).
