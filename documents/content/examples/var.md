---
{
  "title": "var",
  "order": 4,
  "group": "Values"
}
---

Use a mutable binding when its value changes.

::::compare
```kalm Example.kalm
pub fun main() -> Unit:
    var score = 3
    score += 1
    sayLine(score)
```
```kalms Example.kalms
var score = 3
score += 1
sayLine(score)
```
```java Example.java
public final class Example {
    public static void main(String[] args) {
        int score = 3;
        score += 1;
        System.out.println(score);
    }
}
```
::::

[Learn more](/docs/language/values/).
