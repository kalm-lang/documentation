---
{
  "title": "var",
  "order": 4,
  "group": "Values"
}
---

Use a mutable binding when its value changes.

::::compare
```kalm Example.kalm {"style":"indentation"}
pub fun main() -> Unit:
    var score = 3
    score += 1
    sayLine(score)
```
```kalm Example.kalm {"style":"braces"}
pub fun main() -> Unit {
    var score = 3
    score += 1
    sayLine(score)
}
```
```kalms Example.kalms {"style":"indentation"}
var score = 3
score += 1
sayLine(score)
```
```kalms Example.kalms {"style":"braces"}
var score = 3
score += 1
sayLine(score)
```
```java Example.java
void main() {
    int score = 3;
    score += 1;
    System.out.println(score);
}
```
::::

[Learn more](/docs/language/values/).
