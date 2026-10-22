---
{
  "title": "while",
  "order": 26,
  "group": "Flow"
}
---

Repeat while a condition holds.

::::compare
```kalm Example.kalm {"style":"indentation"}
pub fun main() -> void:
    var count = 0
    while count < 3:
        sayLine(count)
        count += 1
```
```kalm Example.kalm {"style":"braces"}
pub fun main() -> void {
    var count = 0
    while count < 3 {
        sayLine(count)
        count += 1
    }
}
```
```kalms Example.kalms {"style":"indentation"}
var count = 0
while count < 3:
    sayLine(count)
    count += 1
```
```kalms Example.kalms {"style":"braces"}
var count = 0
while count < 3 {
    sayLine(count)
    count += 1
}
```
```java Example.java
void main() {
    int count = 0;
    while (count < 3) {
        System.out.println(count);
        count += 1;
    }
}
```
::::

[Learn more](/docs/language/functions/).
