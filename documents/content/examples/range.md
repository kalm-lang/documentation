---
{
  "title": "range",
  "order": 21,
  "group": "Collections"
}
---

Ranges include the start and exclude the end.

::::compare
```kalm Example.kalm {"style":"indentation"}
pub fun main() -> Unit:
    for value in range(1, 4):
        sayLine(value)
```
```kalm Example.kalm {"style":"braces"}
pub fun main() -> Unit {
    for value in range(1, 4) {
        sayLine(value)
    }
}
```
```kalms Example.kalms {"style":"indentation"}
for value in range(1, 4):
    sayLine(value)
```
```kalms Example.kalms {"style":"braces"}
for value in range(1, 4) {
    sayLine(value)
}
```
```java Example.java
void main() {
    for (int value = 1; value < 4; value++) System.out.println(value);
}
```
::::

[Learn more](/docs/language/functions/).
